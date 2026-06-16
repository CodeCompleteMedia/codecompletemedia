// Shared client behavior. All handlers are defensive — they no-op when the
// relevant elements aren't present (e.g. the blog pages have no accordions).

const $ = <T extends Element = Element>(s: string, r: ParentNode = document): T | null =>
  r.querySelector<T>(s);
const $$ = <T extends Element = Element>(s: string, r: ParentNode = document): T[] =>
  Array.prototype.slice.call(r.querySelectorAll<T>(s));

const reduce = window.matchMedia('(prefers-reduced-motion:reduce)').matches;

/* ---------- Disclosure (accordion / faq) ---------- */
function toggleDisc(btn: Element, sel: string, exclusive = false) {
  const item = btn.closest(sel);
  if (!item) return;
  const open = item.getAttribute('data-open') === 'true';
  // In exclusive mode, close any open siblings before opening this one.
  if (exclusive && !open) {
    item.parentElement?.querySelectorAll(`${sel}[data-open="true"]`).forEach((other) => {
      if (other === item) return;
      other.setAttribute('data-open', 'false');
      other.querySelector('[aria-expanded]')?.setAttribute('aria-expanded', 'false');
    });
  }
  item.setAttribute('data-open', String(!open));
  btn.setAttribute('aria-expanded', String(!open));
}
document.addEventListener('click', (e) => {
  const target = e.target as Element;
  const accHead = target.closest('.acc-head');
  if (accHead) toggleDisc(accHead, '.acc-item', true); // services: one open at a time
  const faqHead = target.closest('.faq-head');
  if (faqHead) toggleDisc(faqHead, '.faq-item');
  if (target.closest('a[href*="#"]')) closeMenu();
});

/* ---------- Mobile menu ---------- */
const menuBtn = $('#menuBtn');
const mobileMenu = $('#mobileMenu');
function openMenu() {
  mobileMenu?.classList.add('open');
  menuBtn?.setAttribute('aria-expanded', 'true');
  menuBtn?.setAttribute('aria-label', 'Close menu');
}
function closeMenu() {
  mobileMenu?.classList.remove('open');
  menuBtn?.setAttribute('aria-expanded', 'false');
  menuBtn?.setAttribute('aria-label', 'Open menu');
}
menuBtn?.addEventListener('click', () =>
  mobileMenu?.classList.contains('open') ? closeMenu() : openMenu()
);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMenu();
});

/* ---------- Nav scroll state ---------- */
const nav = $('#nav');
const onScroll = () => nav?.classList.toggle('scrolled', window.scrollY > 8);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ---------- Scrollspy (home in-page nav) ---------- */
function initScrollSpy() {
  const links: Record<string, Element> = {};
  $$<HTMLAnchorElement>('.nav-links a[href*="#"]:not(.btn)').forEach((a) => {
    const href = a.getAttribute('href') || '';
    const id = href.split('#')[1];
    if (id) links[id] = a;
  });
  const targets = Object.keys(links)
    .map((id) => document.getElementById(id))
    .filter(Boolean) as HTMLElement[];
  if (!targets.length || !('IntersectionObserver' in window)) return;
  const spy = new IntersectionObserver(
    (ents) => {
      ents.forEach((en) => {
        if (en.isIntersecting) {
          Object.values(links).forEach((a) => a.setAttribute('aria-current', 'false'));
          links[en.target.id]?.setAttribute('aria-current', 'page');
        }
      });
    },
    { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
  );
  targets.forEach((t) => spy.observe(t));
}

/* ---------- Reveal + count-up ---------- */
function countUp(el: HTMLElement) {
  const target = parseFloat(el.dataset.count || '');
  const sfx = el.dataset.suffix || '';
  if (isNaN(target)) return;
  if (reduce) {
    el.textContent = target + sfx;
    return;
  }
  const dur = 1300;
  const start = performance.now();
  const tick = (now: number) => {
    const p = Math.min(1, (now - start) / dur);
    const e = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(target * e) + sfx;
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}
let io: IntersectionObserver | undefined;
function runReveal() {
  const els = $$<HTMLElement>('[data-reveal]:not(.shown)');
  if (reduce || !('IntersectionObserver' in window)) {
    els.forEach((el) => {
      el.classList.add('shown');
      if (el.matches('[data-count]')) countUp(el);
      $$<HTMLElement>('[data-count]', el).forEach(countUp);
    });
    return;
  }
  if (!io) {
    io = new IntersectionObserver(
      (ents) => {
        ents.forEach((en) => {
          if (en.isIntersecting) {
            const el = en.target as HTMLElement;
            el.classList.add('shown');
            if (el.matches('[data-count]')) countUp(el);
            $$<HTMLElement>('[data-count]', el).forEach(countUp);
            io!.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    );
  }
  els.forEach((el) => io!.observe(el));
}

/* ---------- Contact form ---------- */
function initForm() {
  const form = $<HTMLFormElement>('#contactForm');
  if (!form) return;
  const validateField = (input: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement) => {
    const field = input.closest('.field');
    let ok = true;
    if (input.hasAttribute('required') && !input.value.trim()) ok = false;
    if (
      (input as HTMLInputElement).type === 'email' &&
      input.value &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)
    )
      ok = false;
    field?.classList.toggle('invalid', !ok);
    input.setAttribute('aria-invalid', String(!ok));
    return ok;
  };
  const errorEl = $<HTMLElement>('#formError');
  const submitBtn = form.querySelector<HTMLButtonElement>('button[type="submit"]');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const required = $$<HTMLInputElement>('[required]', form);
    let ok = true;
    let first: HTMLElement | null = null;
    required.forEach((i) => {
      if (!validateField(i)) {
        ok = false;
        if (!first) first = i;
      }
    });
    if (!ok) {
      (first as HTMLElement | null)?.focus();
      return;
    }

    if (errorEl) errorEl.hidden = true;
    const original = submitBtn?.textContent;
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending…';
    }

    try {
      const payload = Object.fromEntries(new FormData(form).entries());
      const res = await fetch(form.action, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      form.hidden = true;
      const success = $<HTMLElement>('#formSuccess');
      if (success) {
        success.hidden = false;
        success.setAttribute('tabindex', '-1');
        success.focus();
      }
    } catch {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = original || 'Send it over';
      }
      if (errorEl) {
        errorEl.hidden = false;
        errorEl.setAttribute('tabindex', '-1');
        errorEl.focus();
      }
    }
  });
  $$<HTMLInputElement>('[required]', form).forEach((i) =>
    i.addEventListener('blur', () => {
      if (i.closest('.field')?.classList.contains('invalid')) validateField(i);
    })
  );
}

/* ---------- Smooth anchor scrolling ---------- */
const scrollBehavior: ScrollBehavior = reduce ? 'auto' : 'smooth';

function smoothScrollTo(id: string) {
  const el = document.getElementById(id);
  if (!el) return false;
  el.scrollIntoView({ behavior: scrollBehavior, block: 'start' });
  return true;
}

// If the target id is a service accordion item, open it (and close siblings).
function maybeOpenAccordion(id: string) {
  const item = document.getElementById(id);
  if (!item || !item.classList.contains('acc-item')) return;
  item.parentElement?.querySelectorAll('.acc-item[data-open="true"]').forEach((other) => {
    if (other === item) return;
    other.setAttribute('data-open', 'false');
    other.querySelector('[aria-expanded]')?.setAttribute('aria-expanded', 'false');
  });
  item.setAttribute('data-open', 'true');
  item.querySelector('[aria-expanded]')?.setAttribute('aria-expanded', 'true');
}

// Same-page anchor clicks (incl. /#section links from the home page).
document.addEventListener('click', (e) => {
  const link = (e.target as Element).closest<HTMLAnchorElement>('a[href*="#"]');
  if (!link) return;
  const url = new URL(link.href, location.href);
  if (url.pathname !== location.pathname || !url.hash) return; // let cross-page nav happen
  const id = url.hash.slice(1);
  maybeOpenAccordion(id);
  if (smoothScrollTo(id)) {
    e.preventDefault();
    history.pushState(null, '', url.hash);
  }
});

// Arriving with a hash from another page (e.g. /#contact from /blog): the
// browser jumps instantly on load, so re-do it smoothly once painted.
function initHashScroll() {
  if (!location.hash) return;
  const id = location.hash.slice(1);
  maybeOpenAccordion(id);
  requestAnimationFrame(() => requestAnimationFrame(() => smoothScrollTo(id)));
}

/* ---------- Init ---------- */
runReveal();
initScrollSpy();
initForm();
initHashScroll();
