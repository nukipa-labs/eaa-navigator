// Content-hub nav structure. Groups with dropdown panels (NOT mega-glass).
// Every href has a route in src/app, so no 404-guarding is needed.

export type NavLink = { label: string; href: string; note?: string };
export type NavGroup = {
  label: string;
  href: string; // group landing (clicking the group label goes here)
  items?: NavLink[]; // dropdown panel items
};

export const NAV_GROUPS: NavGroup[] = [
  {
    label: 'Web Accessibility',
    href: '/accessibility',
    items: [
      { label: 'What is web accessibility?', href: '/accessibility' },
      { label: 'WCAG explained', href: '/wcag' },
      { label: 'Accessibility glossary', href: '/glossary' }
    ]
  },
  {
    label: 'The Laws',
    href: '/eaa',
    items: [
      { label: 'European Accessibility Act (EAA)', href: '/eaa' },
      { label: 'ADA & Section 508', href: '/ada' },
      { label: 'WCAG & EN 301 549', href: '/wcag' },
      { label: 'Compliance deadlines', href: '/deadlines' }
    ]
  },
  {
    label: 'Guides',
    href: '/guides'
  },
  {
    label: 'Tools & Resources',
    href: '/resources',
    items: [
      { label: 'Colour contrast checker', href: '/contrast-checker' },
      { label: 'WCAG 2.2 AA checklist (PDF)', href: '/wcag-checklist' },
      { label: 'VPAT template (PDF)', href: '/vpat' }
    ]
  },
  {
    label: 'About',
    href: '/about'
  }
];

export const SUBSCRIBE_HREF = '/subscribe';

export const PRIMARY_CTA = { label: 'Get the WCAG Checklist', href: '/wcag-checklist' };

// Footer columns mirror the nav groups.
export const FOOTER_COLUMNS: { heading: string; links: NavLink[] }[] = [
  {
    heading: 'Learn',
    links: [
      { label: 'Web accessibility', href: '/accessibility' },
      { label: 'WCAG explained', href: '/wcag' },
      { label: 'The EAA', href: '/eaa' },
      { label: 'ADA & Section 508', href: '/ada' },
      { label: 'Glossary', href: '/glossary' }
    ]
  },
  {
    heading: 'Guides',
    links: [
      { label: 'All guides', href: '/guides' },
      { label: 'Who the EAA applies to', href: '/guides/who-does-the-eaa-apply-to' },
      { label: 'Accessibility statement', href: '/guides/how-to-write-an-accessibility-statement' },
      { label: 'Do overlays work?', href: '/guides/do-accessibility-overlays-work' },
      { label: 'Deadlines', href: '/deadlines' }
    ]
  },
  {
    heading: 'Tools & Resources',
    links: [
      { label: 'Colour contrast checker', href: '/contrast-checker' },
      { label: 'WCAG 2.2 AA checklist', href: '/wcag-checklist' },
      { label: 'VPAT template', href: '/vpat' },
      { label: 'All resources', href: '/resources' },
      { label: 'Subscribe', href: '/subscribe' }
    ]
  },
  {
    heading: 'About',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Privacy', href: '/legal/privacy' },
      { label: 'Terms', href: '/legal/terms' },
      { label: 'Imprint', href: '/legal/imprint' }
    ]
  }
];
