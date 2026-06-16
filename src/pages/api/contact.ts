import type { APIRoute } from 'astro';

// Rendered on-demand (serverless) by the Vercel adapter.
export const prerender = false;

/**
 * Contact form handler.
 *
 * Delivers each submission to two optional channels (whichever are configured
 * via env vars — see .env.example):
 *   1. Email — via the Resend API (RESEND_API_KEY).
 *   2. Google Sheet — by POSTing to an Apps Script web app
 *      (GOOGLE_SHEET_WEBHOOK_URL). See docs/google-sheet-apps-script.gs.
 *
 * No database required. If no channel is configured (e.g. local dev without
 * env), it accepts the submission and logs a warning so the form still works.
 */

interface ContactPayload {
  name: string;
  email: string;
  need?: string;
  budget?: string;
  message: string;
}

// Read env from Astro (build) or Node (runtime/serverless), whichever has it.
const env = (key: string): string | undefined =>
  (import.meta.env as Record<string, string | undefined>)[key] ?? process.env[key];

function isValid(p: Partial<ContactPayload>): p is ContactPayload {
  return (
    typeof p.name === 'string' &&
    p.name.trim().length > 0 &&
    typeof p.email === 'string' &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(p.email) &&
    typeof p.message === 'string' &&
    p.message.trim().length > 0
  );
}

function esc(s = ''): string {
  return s.replace(
    /[&<>"]/g,
    (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c] as string
  );
}

async function sendEmail(d: ContactPayload): Promise<void> {
  const key = env('RESEND_API_KEY');
  if (!key) return; // not configured → skip
  const to = env('CONTACT_NOTIFY_TO') || 'matt@codecompletemedia.com';
  const from = env('CONTACT_NOTIFY_FROM') || 'CodeCompleteMedia <onboarding@resend.dev>';

  const html = `
    <h2>New project inquiry</h2>
    <p><strong>Name:</strong> ${esc(d.name)}</p>
    <p><strong>Email:</strong> ${esc(d.email)}</p>
    <p><strong>Needs:</strong> ${esc(d.need)}</p>
    <p><strong>Budget:</strong> ${esc(d.budget)}</p>
    <p><strong>Message:</strong></p>
    <p>${esc(d.message).replace(/\n/g, '<br>')}</p>
  `;

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from,
      to,
      reply_to: d.email,
      subject: `New project inquiry — ${d.name}`,
      html,
    }),
  });
  if (!res.ok) throw new Error(`Resend ${res.status}: ${await res.text()}`);
}

async function appendToSheet(d: ContactPayload): Promise<void> {
  const url = env('GOOGLE_SHEET_WEBHOOK_URL');
  if (!url) return; // not configured → skip
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...d, submittedAt: new Date().toISOString() }),
  });
  if (!res.ok) throw new Error(`Google Sheet webhook ${res.status}`);
}

export const POST: APIRoute = async ({ request }) => {
  let data: Partial<ContactPayload> = {};
  const contentType = request.headers.get('content-type') || '';
  try {
    if (contentType.includes('application/json')) {
      data = await request.json();
    } else {
      const form = await request.formData();
      data = Object.fromEntries(form.entries()) as Partial<ContactPayload>;
    }
  } catch {
    return json({ ok: false, error: 'Could not parse request body.' }, 400);
  }

  if (!isValid(data)) {
    return json({ ok: false, error: 'Missing or invalid fields.' }, 422);
  }

  const channels: Array<[string, Promise<void>]> = [];
  if (env('RESEND_API_KEY')) channels.push(['email', sendEmail(data)]);
  if (env('GOOGLE_SHEET_WEBHOOK_URL')) channels.push(['sheet', appendToSheet(data)]);

  if (channels.length === 0) {
    console.warn('[contact] no delivery channels configured — submission not stored', {
      name: data.name,
      email: data.email,
    });
    return json({ ok: true, configured: false }, 200);
  }

  const settled = await Promise.allSettled(channels.map(([, p]) => p));
  const failures = settled
    .map((r, i) => [channels[i][0], r] as const)
    .filter(([, r]) => r.status === 'rejected');

  failures.forEach(([name, r]) =>
    console.error(`[contact] ${name} delivery failed:`, (r as PromiseRejectedResult).reason)
  );

  // All channels failed → surface an error so the client can show a fallback.
  if (failures.length === settled.length) {
    return json({ ok: false, error: 'Delivery failed. Please email us directly.' }, 502);
  }

  return json({ ok: true }, 200);
};

function json(body: unknown, status: number) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}
