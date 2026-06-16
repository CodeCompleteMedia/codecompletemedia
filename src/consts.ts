// Site-wide constants: nav, social, default SEO, brand metadata.
// Centralized so they aren't duplicated across pages/components.

export const SITE = {
  name: 'Code Complete Media',
  shortName: 'CodeCompleteMedia',
  url: 'https://codecompletemedia.com',
  title: 'Code Complete Media · Full-service web studio',
  description:
    'Code Complete Media designs and builds websites that earn their keep, plus the SEO, copy, and strategy to back them up. One team. No layers. No mystery invoices.',
  ogDescription:
    'Agency quality. Freelancer price. Zero runaround. Sites that do the selling for you.',
  email: 'hello@codecompletemedia.com',
  responseTime: 'Within 1 business day',
} as const;

// Single-page home uses in-page anchors; blog is a real route.
export const NAV_LINKS = [
  { label: 'Services', href: '/#services' },
  { label: 'Work', href: '/#work' },
  { label: 'Blog', href: '/#insights' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
] as const;

// hrefs target individual service accordion items (ids match the MDX slugs).
export const FOOTER_SERVICES = [
  { label: 'Web Design', href: '/#svc-web-design' },
  { label: 'Development', href: '/#svc-development' },
  { label: 'SEO', href: '/#svc-seo' },
  { label: 'Marketing', href: '/#svc-marketing' },
  { label: 'Copywriting', href: '/#svc-copywriting' },
  { label: 'Strategy', href: '/#svc-strategy' },
] as const;

export const SOCIAL = {
  email: `mailto:${SITE.email}`,
} as const;
