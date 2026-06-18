# Vercel environment variables — setup

Run these from the project root in a terminal where the Vercel CLI is logged in
(`vercel login`). They push the contact-form env vars to **Production, Preview,
and Development**.

> ⚠️ Don't commit secrets. `RESEND_API_KEY` below is shown as a placeholder —
> copy the real value from your local `.env` (it's gitignored). This file is
> safe to commit as-is.

## 0. One-time: link this folder to your Vercel project

```bash
vercel link
```

Pick the existing `codecompletemedia` project (or create it). This writes
`.vercel/project.json` so the `env add` commands know which project to target.

## 1. Push the variables

Each command pipes the value via stdin (no trailing newline) and adds it to all
three environments. If a variable already exists for an environment, remove it
first with `vercel env rm <NAME> <env>`.

```bash
# RESEND_API_KEY — secret. Replace with the re_… value from your .env
for e in production preview development; do
  printf '%s' 're_REPLACE_WITH_KEY_FROM_DOTENV' | vercel env add RESEND_API_KEY "$e"
done

# CONTACT_NOTIFY_TO
for e in production preview development; do
  printf '%s' 'matt@codecompletemedia.com' | vercel env add CONTACT_NOTIFY_TO "$e"
done

# CONTACT_NOTIFY_FROM
for e in production preview development; do
  printf '%s' 'CodeCompleteMedia <onboarding@resend.dev>' | vercel env add CONTACT_NOTIFY_FROM "$e"
done
```

## 2. Google Sheet webhook (after deploying the Apps Script — see below)

```bash
# GOOGLE_SHEET_WEBHOOK_URL — paste your /exec URL
for e in production preview development; do
  printf '%s' 'https://script.google.com/macros/s/XXXX/exec' | vercel env add GOOGLE_SHEET_WEBHOOK_URL "$e"
done
```

## 3. Verify and redeploy

```bash
vercel env ls          # confirm all four names appear for each environment
vercel --prod          # redeploy so the running functions pick up the new vars
```

Env var changes only apply to **new** deployments — an existing deployment keeps
its old values until you redeploy.

---

## Deploying the Google Sheet Apps Script (to get the /exec URL)

The script lives at `docs/google-sheet-apps-script.gs`. One time, ~3 minutes:

1. Create a Google Sheet, e.g. "CCM — Contact submissions".
2. In the Sheet: **Extensions → Apps Script**.
3. Delete the default code, paste the contents of `docs/google-sheet-apps-script.gs`, and **Save**.
4. **Deploy → New deployment → type "Web app"**:
   - Description: `CCM contact webhook`
   - Execute as: **Me**
   - Who has access: **Anyone**
5. Click **Deploy** and authorize when prompted.
6. Copy the **Web app URL** (ends in `/exec`).
7. Use that URL in the step-2 command above, and add it to your local `.env`
   as `GOOGLE_SHEET_WEBHOOK_URL=` so the form logs to the sheet in dev too.

The first row is written as headers automatically. The contact form treats this
channel as optional — if the URL isn't set, it just emails via Resend.
