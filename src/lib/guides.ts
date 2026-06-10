// Guide subpage data for the EAA Navigator.
//
// Plain-English, source-backed guides on web accessibility compliance, framed
// around WCAG (the standard), the European Accessibility Act / EAA (EU law) and
// the ADA / Section 508 (US). Facts are grounded in BUILD-CONTEXT.md "VERIFIED
// FACTS" — do not invent figures. Every regulatory or standard claim on the
// rendered page carries a SourceCite to an official source; the SRC map below
// holds the canonical URLs.

export const SITE = 'https://eaa-navigator.com';
export const PUBLISHED = '2025-09-01';
export const MODIFIED = '2026-06-09';

// Canonical official sources (from BUILD-CONTEXT.md "Canonical source URLs").
export const SRC = {
  eaaDirective: 'https://eur-lex.europa.eu/eli/dir/2019/882/oj/eng',
  eaaCommission:
    'https://commission.europa.eu/strategy-and-policy/policies/justice-and-fundamental-rights/disability/union-equality-strategy-rights-persons-disabilities-2021-2030/european-accessibility-act_en',
  wcag22: 'https://www.w3.org/TR/WCAG22/',
  wcagNew22: 'https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/',
  wcagOverview: 'https://www.w3.org/WAI/standards-guidelines/wcag/',
  en301549:
    'https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf',
  wad:
    'https://eur-lex.europa.eu/EN/legal-content/summary/accessibility-of-public-sector-websites-and-mobile-apps.html',
  dojWebRule: 'https://www.ada.gov/resources/2024-03-08-web-rule/',
  accessBoard: 'https://www.access-board.gov/ict/',
  acrVpatFaq: 'https://www.section508.gov/sell/acr-vpat-faq/',
  vpat: 'https://www.itic.org/policy/accessibility/vpat',
  webaim: 'https://webaim.org/projects/million/',
  who: 'https://www.who.int/news-room/fact-sheets/detail/disability-and-health',
  overlayFactSheet: 'https://overlayfactsheet.com/'
} as const;

export type Faq = { q: string; a: string };

export type Guide = {
  slug: string;
  /** Short label used on cards and crumbs. */
  name: string;
  /** Page H1. */
  title: string;
  metaTitle: string;
  metaDescription: string;
  /** One-line summary used on the index cards. */
  summary: string;
  intro: string;
  tldr: string[];
  /** "What this covers" — the topics this guide addresses. */
  covers: string[];
  /** Section heading for the keyPoints block (varies per guide). */
  keyPointsHeading: string;
  /** "Key points" / "Common pitfalls". */
  keyPoints: string[];
  /** "What to do" — an ordered action list. */
  steps: string[];
  faq: Faq[];
};

export const GUIDES: Guide[] = [
  // ------------------------------------------------ WHO DOES THE EAA APPLY TO
  {
    slug: 'who-does-the-eaa-apply-to',
    name: 'Who the EAA applies to',
    title: 'Who Does the European Accessibility Act Apply To?',
    metaTitle: 'Who Does the EAA Apply To? Scope, Products & Services | EAA Navigator',
    metaDescription:
      'Who the European Accessibility Act covers: which products and services are in scope, the micro-enterprise exemption, deadlines and worked examples in plain English.',
    summary:
      'Which products and services the EAA covers, the micro-enterprise exemption and the dates that matter.',
    intro:
      'The European Accessibility Act (EAA) is an EU law that sets common accessibility requirements for a defined list of products and services sold in the EU. It is easy to assume it covers every website, but its scope is specific. This guide explains which products and services are caught, who is exempt, and the deadlines that apply.',
    tldr: [
      'The EAA is Directive (EU) 2019/882. Its accessibility requirements have applied since 28 June 2025.',
      'It covers a defined list of products (such as computers, smartphones, ATMs, ticketing machines, e-readers and payment terminals) and services (such as e-commerce, consumer banking, e-books, electronic communications and passenger transport).',
      'Micro-enterprises providing services are exempt; the exemption does not extend to micro-enterprises that make products.',
      'Existing service contracts may continue until 28 June 2030; self-service terminals already in use may run to the end of their useful life, up to a maximum of 20 years.'
    ],
    covers: [
      'The list of products in scope: computers and operating systems, smartphones and other communication devices, TV equipment for digital television, ATMs, ticketing and check-in machines, e-readers and payment terminals.',
      'The list of services in scope: e-commerce, consumer banking, e-books and dedicated software, electronic communications, access to audiovisual media services, and air, bus, rail and waterborne passenger transport services.',
      'The micro-enterprise exemption and exactly how far it reaches.',
      'The application date and the transition periods for existing contracts and terminals.'
    ],
    keyPointsHeading: 'Key points',
    keyPoints: [
      'Scope is defined by product and service categories, not by "any website". An e-commerce service is squarely in scope; a brochure-only site that sells nothing may not be — though other laws can still apply.',
      'The micro-enterprise exemption is narrow: it applies to micro-enterprises providing services (fewer than 10 staff and turnover or balance sheet of €2 million or less). Micro-enterprises that place products on the market are not exempt.',
      'Conformance is demonstrated through the harmonised standard EN 301 549, which incorporates WCAG 2.1 Level AA for web and mobile content.',
      'Penalties are set by each member state and must be effective, proportionate and dissuasive. There is no single EU-wide figure.'
    ],
    steps: [
      'List your products and services and match each against the EAA categories above.',
      'Check whether any micro-enterprise exemption genuinely applies to you, remembering it only covers services.',
      'If you provide an in-scope service such as e-commerce, treat WCAG 2.1 AA (via EN 301 549) as your working target.',
      'Map the transition periods to your situation: most requirements apply from 28 June 2025, with limited continuation for existing contracts and terminals.',
      'Prepare the accessibility information the EAA expects you to make available, and plan an audit if you have not tested your site.'
    ],
    faq: [
      {
        q: 'Does the EAA apply to every website?',
        a: 'No. The EAA applies to a defined list of products and services. Many websites are caught because they provide an in-scope service such as e-commerce, consumer banking or electronic communications, but a site that does not provide a listed service may fall outside the EAA, even if other accessibility laws still apply.'
      },
      {
        q: 'Are small businesses exempt from the EAA?',
        a: 'Only micro-enterprises providing services are exempt: those with fewer than 10 employees and an annual turnover or balance sheet total of €2 million or less. Micro-enterprises that manufacture or place products on the market do not get this exemption, and small businesses above the micro thresholds are not exempt.'
      },
      {
        q: 'When did the EAA start to apply?',
        a: 'The directive was adopted on 17 April 2019. Member states had to transpose it by 28 June 2022, and its requirements have applied since 28 June 2025.'
      },
      {
        q: 'Is e-commerce covered by the EAA?',
        a: 'Yes. E-commerce is explicitly listed as a service in scope, so online shops selling to EU consumers generally need to meet the accessibility requirements unless a specific exemption applies.'
      },
      {
        q: 'What standard do I have to meet?',
        a: 'Conformance is shown through the harmonised standard EN 301 549, which for web and mobile incorporates WCAG 2.1 Level AA. Meeting WCAG 2.1 AA gives a presumption of conformity for the digital parts of an in-scope service.'
      }
    ]
  },

  // ------------------------------------------------------------- ADA VS EAA
  {
    slug: 'ada-vs-eaa',
    name: 'ADA vs EAA',
    title: 'ADA vs EAA: US and EU Web Accessibility Law Compared',
    metaTitle: 'ADA vs EAA: US vs EU Web Accessibility Law Compared | EAA Navigator',
    metaDescription:
      'ADA vs EAA compared: jurisdiction, the technical standard, enforcement, deadlines and who is liable under US and EU web accessibility law, in plain English.',
    summary:
      'How US ADA and EU EAA differ on jurisdiction, standard, enforcement, deadlines and who is liable.',
    intro:
      'If you sell into both the US and the EU, two different legal regimes can apply to your website: the Americans with Disabilities Act (ADA) in the US and the European Accessibility Act (EAA) in the EU. They share a practical target — WCAG — but differ in how they work and how they are enforced. This guide compares them side by side.',
    tldr: [
      'The ADA is US civil-rights law; the EAA is an EU directive transposed into each member state. Jurisdiction follows where you operate or sell, not where you are based.',
      'Neither names a single mandatory web standard for every case, but both converge on WCAG Level AA in practice (the EAA via EN 301 549 and WCAG 2.1 AA; the ADA via case law and the DOJ Title II rule, which adopts WCAG 2.1 AA).',
      'The ADA is enforced largely through private lawsuits, which run into the thousands each year. The EAA is enforced by national market-surveillance authorities, with penalties set by each member state.',
      'If you serve both markets, build to WCAG 2.1 AA (or 2.2 AA) as a common baseline rather than chasing each regime separately.'
    ],
    covers: [
      'Jurisdiction: who each law applies to and how cross-border selling brings you into scope.',
      'The technical standard each regime relies on, and why both land on WCAG Level AA.',
      'How each is enforced — private litigation in the US versus market surveillance in the EU.',
      'The deadlines that matter, including the EAA application date and the DOJ Title II compliance dates.'
    ],
    keyPointsHeading: 'Key differences',
    keyPoints: [
      'Standard: the EAA uses EN 301 549, which incorporates WCAG 2.1 AA. The ADA has no explicit web standard for private businesses, but courts and settlements use WCAG 2.0/2.1 AA, and the DOJ Title II rule for state and local government adopts WCAG 2.1 AA.',
      'Enforcement: the US sees thousands of web-accessibility lawsuits a year against private "public accommodations". The EAA is enforced by designated national authorities rather than primarily through private suits.',
      'Who is liable: under the ADA, the business operating the website. Under the EAA, the economic operator placing the product or providing the service, with obligations flowing across manufacturers, importers, distributors and service providers.',
      'Deadlines: EAA requirements apply from 28 June 2025. The DOJ Title II deadlines (after a one-year extension in April 2026) are 26 April 2027 for populations of 50,000 or more, and 26 April 2028 for smaller populations and special districts.'
    ],
    steps: [
      'Identify which markets you serve — selling to EU consumers or US users can pull you into one or both regimes regardless of where you are based.',
      'Adopt WCAG 2.1 AA (or 2.2 AA) as a single working baseline that satisfies the practical target of both laws.',
      'For the EU, map your service to the EAA and treat EN 301 549 conformance as the goal; prepare the accessibility information the EAA expects.',
      'For the US, reduce litigation risk by testing against WCAG AA, fixing real barriers and publishing an accessibility statement with a contact route.',
      'Commission a manual audit rather than relying on automated scans alone, since most legal exposure comes from issues automated tools cannot detect.'
    ],
    faq: [
      {
        q: 'Is the ADA or the EAA stricter?',
        a: 'They are hard to rank directly because they work differently. In practice both converge on WCAG Level AA, so a site built to WCAG 2.1 AA addresses the core technical expectation of each. The bigger difference is enforcement: the US relies on private lawsuits, while the EU relies on national authorities and member-state penalties.'
      },
      {
        q: 'If I comply with the EAA, am I ADA-compliant too?',
        a: 'Not automatically, but you are most of the way there. EAA conformance through EN 301 549 means meeting WCAG 2.1 AA, which is also the de-facto benchmark used in US ADA cases. You should still publish a US-style accessibility statement and keep testing, as ADA exposure is driven by real barriers and litigation, not a certificate.'
      },
      {
        q: 'Does the ADA name a specific WCAG version?',
        a: 'Not for private businesses under Title III; there is no explicit technical web standard, and courts and settlements have used WCAG 2.0/2.1 AA. The DOJ Title II final rule for state and local government, published in April 2024, does adopt WCAG 2.1 AA.'
      },
      {
        q: 'How many ADA web lawsuits are filed each year?',
        a: 'Thousands. Counts vary by how they are measured — roughly 2,500 federal-only to around 4,000 across all venues in 2024 — but the consistent picture is that web-accessibility lawsuits run into the thousands per year in the US.'
      },
      {
        q: 'I am a US company — does the EAA affect me?',
        a: 'It can. The EAA applies to products and services placed on the EU market, so a US business selling an in-scope service such as e-commerce to EU consumers can fall within its scope regardless of where the company is based.'
      }
    ]
  },

  // ----------------------------------------- HOW TO WRITE AN A11Y STATEMENT
  {
    slug: 'how-to-write-an-accessibility-statement',
    name: 'Accessibility statements',
    title: 'How to Write an Accessibility Statement',
    metaTitle: 'How to Write an Accessibility Statement (with checklist) | EAA Navigator',
    metaDescription:
      'What an accessibility statement is, when it is legally required, and exactly what to include — compliance status, known issues, feedback route and contact — in plain English.',
    summary:
      'What an accessibility statement is, when it is required by law and what to include.',
    intro:
      'An accessibility statement is a public page that explains how accessible your website or service is, what is not yet accessible, and how someone can report a problem. For public-sector bodies it is a legal requirement; for everyone else it is good practice that also reduces legal risk. This guide explains when you need one and exactly what to put in it.',
    tldr: [
      'An accessibility statement sets out your compliance status, known accessibility problems, and how users can get help or report a barrier.',
      'It is mandatory for public-sector bodies under the EU Web Accessibility Directive (2016/2102), using the EU model statement and updated at least once a year.',
      'Under the EAA, service providers must make accessibility information available, which a statement helps deliver.',
      'A clear statement with a working feedback route also reduces ADA litigation risk, because it shows good faith and gives users a way to raise issues.'
    ],
    covers: [
      'What an accessibility statement is and why it exists.',
      'When it is legally required: the public-sector obligation under the Web Accessibility Directive, and the EAA duty to make accessibility information available.',
      'The specific elements a statement should contain.',
      'How the public-sector model statement is structured and how to adapt it for a private business.'
    ],
    keyPointsHeading: 'What to include',
    keyPoints: [
      'Compliance status: state whether the site is fully compliant, partially compliant or non-compliant with the relevant standard (WCAG 2.1 AA via EN 301 549).',
      'Known issues: list the non-accessible content, with the reason, and note any exemption or disproportionate-burden claim you rely on.',
      'A feedback mechanism: a clear way for users to report accessibility problems and request information in an accessible format.',
      'An enforcement or escalation contact: who to approach if a user is not satisfied with the response.',
      'How and when the statement was prepared: the assessment method (self-assessment or third-party audit) and the date, with at least annual review for public-sector bodies.'
    ],
    steps: [
      'Test your site against WCAG 2.1 AA so you can state an honest compliance status rather than guessing.',
      'Start from the EU model accessibility statement structure if you are a public-sector body, or adapt it if you are a private service provider.',
      'Write the compliance status, the list of known non-accessible content, and the reasons or exemptions in plain language.',
      'Add a working feedback route and a named escalation or enforcement contact, and make sure someone monitors it.',
      'Date the statement, record the assessment method, and set a reminder to review it at least annually or whenever the site changes materially.'
    ],
    faq: [
      {
        q: 'Is an accessibility statement legally required?',
        a: 'For public-sector bodies in the EU, yes — the Web Accessibility Directive (2016/2102) requires a statement using the EU model, kept up to date and reviewed at least annually. For private businesses it is not always a standalone legal requirement, but the EAA expects service providers to make accessibility information available, and a statement is the usual way to do that.'
      },
      {
        q: 'What should an accessibility statement contain?',
        a: 'At a minimum: your compliance status against the relevant standard, a list of known non-accessible content with reasons or exemptions, a feedback mechanism for users to report problems or request accessible formats, an enforcement or escalation contact, and the date and method of assessment.'
      },
      {
        q: 'How often should I update it?',
        a: 'Public-sector bodies must review their statement at least once a year and whenever the site changes significantly. For everyone else, the same cadence is sensible: an out-of-date statement that claims compliance you no longer meet can do more harm than good.'
      },
      {
        q: 'Does an accessibility statement make my site compliant?',
        a: 'No. A statement describes your accessibility; it does not create it. Publishing a statement that claims full compliance without testing can increase risk. Test first, then state honestly what is and is not accessible.'
      }
    ]
  },

  // ----------------------------------------------------- ECOMMERCE A11Y
  {
    slug: 'ecommerce-accessibility',
    name: 'E-commerce accessibility',
    title: 'E-commerce Accessibility: Why Online Shops Are in Scope',
    metaTitle: 'E-commerce Accessibility: EAA Scope & Common Failures | EAA Navigator',
    metaDescription:
      'Why online shops are squarely in EAA scope and a frequent ADA lawsuit target, plus the common failures that cost conversions: contrast, alt text, forms, keyboard and focus.',
    summary:
      'Why online shops are in EAA scope and a lawsuit magnet, and the failures that cost conversions.',
    intro:
      'E-commerce is one of the services explicitly listed in the European Accessibility Act, and online shops are also the single most common target of US web-accessibility lawsuits. Beyond the legal exposure, accessibility barriers in a checkout flow directly cost sales. This guide explains why online shops are in scope and the failures that come up most often.',
    tldr: [
      'E-commerce is named as a service in scope under the EAA, so online shops selling to EU consumers generally must meet the accessibility requirements.',
      'Online retail is also the most frequent target of US ADA web-accessibility lawsuits, which run into the thousands each year.',
      'The most common failures are low-contrast text, missing alt text, unlabelled form fields, keyboard traps and missing focus indicators.',
      'Accessibility barriers in product pages and checkout cost conversions as well as creating legal risk.'
    ],
    covers: [
      'Why e-commerce is squarely in EAA scope and a frequent ADA litigation target.',
      'The accessibility failures that show up most often on online shops.',
      'Where in the buying journey those failures cause the most harm — product pages, forms and checkout.',
      'How to test and prioritise fixes without relying on automated scans alone.'
    ],
    keyPointsHeading: 'Common failures',
    keyPoints: [
      'Low-contrast text: the single most common WCAG failure on the web — found on 79.1% of home pages in the WebAIM Million 2025 — and it makes prices, labels and calls-to-action hard to read.',
      'Missing alt text: 55.5% of home pages had missing alternative text in 2025, so screen-reader users cannot tell what a product image shows.',
      'Unlabelled form fields: inputs without proper labels make search, login and checkout forms unusable with assistive technology.',
      'Keyboard traps and broken focus order: users who navigate by keyboard can get stuck in a menu or modal, or lose track of where they are without a visible focus indicator.',
      'Empty links and buttons: "add to cart" controls with no accessible name leave assistive-technology users unable to act.'
    ],
    steps: [
      'Treat your shop as an in-scope EAA service and set WCAG 2.1 AA (or 2.2 AA) as the target.',
      'Run a keyboard-only pass through search, product page, cart and checkout — if you cannot complete a purchase without a mouse, neither can many users.',
      'Fix the high-frequency basics first: text contrast, image alt text, form labels and visible focus indicators.',
      'Test the checkout with a screen reader, since that is where barriers most directly cost sales and attract complaints.',
      'Publish an accessibility statement with a feedback route, and commission a manual audit to catch what automated tools miss.'
    ],
    faq: [
      {
        q: 'Is my online shop covered by the EAA?',
        a: 'Most likely, yes. E-commerce is explicitly listed as a service in scope under the EAA, so an online shop selling to EU consumers generally needs to meet the accessibility requirements unless a specific exemption applies, such as the micro-enterprise services exemption.'
      },
      {
        q: 'Why are e-commerce sites sued so often in the US?',
        a: 'Online retail is the most common target of US web-accessibility lawsuits, which run into the thousands a year. Shops are public-facing, transactional and easy to test, so barriers in product pages and checkout are quickly identified.'
      },
      {
        q: 'What are the most common accessibility problems on online shops?',
        a: 'Low-contrast text, missing image alt text, unlabelled form fields, keyboard traps and missing focus indicators. The WebAIM Million 2025 found low-contrast text on 79.1% of home pages and missing alt text on 55.5%.'
      },
      {
        q: 'Does accessibility affect conversions?',
        a: 'Yes. A checkout that cannot be completed with a keyboard or screen reader loses those customers outright, and barriers such as poor contrast and confusing forms add friction for everyone. Fixing them tends to help conversion as well as compliance.'
      }
    ]
  },

  // ----------------------------------------------------- WORDPRESS A11Y
  {
    slug: 'wordpress-accessibility',
    name: 'WordPress accessibility',
    title: 'WordPress Accessibility: How to Make a WordPress Site Accessible',
    metaTitle: 'WordPress Accessibility: Themes, Plugins & Testing | EAA Navigator',
    metaDescription:
      'How to make a WordPress site accessible: accessibility-ready themes, the truth about plugins and overlays, and the manual testing no plugin can replace.',
    summary:
      'Accessible themes, the plugin caveat and the manual testing that no plugin can replace.',
    intro:
      'WordPress powers a large share of the web, so "how do I make my WordPress site accessible?" is a common question. The honest answer is that themes and plugins help, but no plugin makes a site accessible on its own. This guide covers accessibility-ready themes, where plugins do and do not help, and the manual testing you still need.',
    tldr: [
      'Accessibility starts with the theme: choose an accessibility-ready theme and keep your content structured (headings, alt text, link text).',
      'Plugins can help with specific tasks, but no plugin makes a site compliant, and accessibility overlay plugins do not equal compliance.',
      'Most WCAG issues — contrast, alt text, keyboard operation, focus order — are decided by your content and design choices, not by a plugin.',
      'You still need manual testing: keyboard-only navigation and a screen-reader pass on your key templates.'
    ],
    covers: [
      'Choosing an accessibility-ready theme and what that label does and does not guarantee.',
      'Where plugins genuinely help, and the honest limits of accessibility plugins.',
      'Why overlay plugins are not a compliance solution.',
      'The manual testing that no WordPress plugin can replace.'
    ],
    keyPointsHeading: 'Key points',
    keyPoints: [
      'Themes matter most: an accessibility-ready theme gives you sensible heading structure, keyboard support and focus styles to build on, but your content and customisations can still break it.',
      'Plugins help with tasks, not compliance: a plugin can help you add captions or check contrast, but installing a plugin does not make the whole site conformant.',
      'Overlay plugins are not compliance: widgets that promise instant accessibility cannot fix most WCAG issues, and overlay-equipped sites are still sued. Automated tooling alone catches only about 30 to 40 per cent of issues.',
      'Content is where most failures live: missing alt text, vague link text ("click here"), poor contrast and skipped heading levels are authoring choices, not plugin settings.'
    ],
    steps: [
      'Start with an accessibility-ready theme and check it with the keyboard before you build on it.',
      'Set WCAG 2.1 AA (or 2.2 AA) as your target and structure content properly: one H1, logical headings, meaningful link text and alt text on images.',
      'Use plugins for specific jobs (captions, contrast checking, form labels), not as a compliance guarantee — and avoid overlay widgets that claim instant compliance.',
      'Test manually: navigate every key template with the keyboard only, then run a screen-reader pass on your home page, a post and any forms.',
      'Publish an accessibility statement and arrange a manual audit for anything you cannot confidently test yourself.'
    ],
    faq: [
      {
        q: 'Is there a plugin that makes WordPress accessible?',
        a: 'No. Plugins can help with specific tasks such as captions or contrast checking, but no plugin makes a site compliant on its own. Most WCAG issues depend on your theme, content and design choices, which a plugin cannot fix automatically.'
      },
      {
        q: 'Do accessibility overlay plugins work for WordPress?',
        a: 'Overlay plugins do not make a site compliant. Automated tooling detects only about 30 to 40 per cent of WCAG issues, and overlay-equipped sites are still subject to complaints and lawsuits. Treat overlays as, at best, a minor convenience and not a compliance solution.'
      },
      {
        q: 'What is an accessibility-ready theme?',
        a: 'It is a theme reviewed against a set of accessibility requirements — such as keyboard navigation, sufficient contrast and proper heading structure. It gives you a sound starting point, but your content and customisations can still introduce barriers, so testing is still needed.'
      },
      {
        q: 'How do I test my WordPress site for accessibility?',
        a: 'Combine automated checks with manual testing: navigate your key templates using only the keyboard, run a screen-reader pass on your home page, a post and any forms, and check colour contrast. For anything you cannot confidently assess, commission a manual audit.'
      }
    ]
  },

  // --------------------------------------------------- DO OVERLAYS WORK
  {
    slug: 'do-accessibility-overlays-work',
    name: 'Do overlays work?',
    title: 'Do Accessibility Overlays Work? An Honest Answer',
    metaTitle: 'Do Accessibility Overlays Work? The Honest Answer | EAA Navigator',
    metaDescription:
      'An honest, source-backed look at accessibility overlays: what they are, why automated tools catch only 30-40% of issues, the Overlay Fact Sheet, the FTC accessiBe order and why overlays do not equal compliance.',
    summary:
      'The honest, source-backed answer: overlays do not equal compliance — and here is why.',
    intro:
      'Accessibility overlays are widgets you add to a site that promise to make it accessible automatically, often with a small accessibility icon in the corner. They are heavily marketed and widely misunderstood. This guide gives the honest, source-backed answer: overlays do not make a site compliant, and relying on them can increase your risk.',
    tldr: [
      'An overlay is a third-party script (such as accessiBe, AudioEye, UserWay or EqualWeb) that claims to detect and fix accessibility issues automatically.',
      'Automated tools detect only about 30 to 40 per cent of WCAG issues; the rest require human testing, so an overlay cannot make a site conformant.',
      'The Overlay Fact Sheet, signed by more than 1,000 accessibility professionals, rejects overlays as a compliance solution, and overlay-equipped sites are still sued.',
      'In 2025 the FTC finalised a $1,000,000 order against accessiBe for deceptive claims that its product makes sites compliant. Treat overlays as marketing, not compliance.'
    ],
    covers: [
      'What an accessibility overlay actually is and what it claims to do.',
      'Why automated-only fixing cannot deliver compliance.',
      'The independent and regulatory evidence against overlays as a compliance solution.',
      'What to do instead if you want a site that genuinely works for disabled users.'
    ],
    keyPointsHeading: 'Why overlays fall short',
    keyPoints: [
      'Automated coverage is limited: automated tools catch only about 30 to 40 per cent of WCAG issues. Things like meaningful alt text, logical reading order and usable forms need human judgement.',
      'Overlays sit on top of the problem: they do not fix the underlying code, so the barriers remain for users who turn the widget off or use their own assistive technology.',
      'They are still litigated: overlay-equipped sites continue to receive complaints and lawsuits, and the DOJ has said overlays do not equal ADA compliance.',
      'Regulators have acted: the Overlay Fact Sheet (signed by 1,000+ professionals) rejects overlays, and in 2025 the FTC finalised a $1,000,000 order against accessiBe over deceptive "AI makes you compliant" claims.'
    ],
    steps: [
      'Do not treat an overlay as evidence of compliance — it is not, regardless of the vendor’s marketing.',
      'Commission a manual accessibility audit against WCAG 2.1 AA (or 2.2 AA) to find the issues automated tools miss.',
      'Fix issues in your own code and content: contrast, alt text, form labels, keyboard operation and focus order.',
      'Publish an honest accessibility statement with a feedback route, rather than an overlay badge.',
      'If you already run an overlay, keep auditing and remediating the underlying site; the widget does not remove that obligation.'
    ],
    faq: [
      {
        q: 'Do accessibility overlays make my site compliant?',
        a: 'No. Overlays cannot make a site conformant. Automated tools detect only about 30 to 40 per cent of WCAG issues, and the rest require human testing. The DOJ has said overlays do not equal ADA compliance, and overlay-equipped sites continue to be sued.'
      },
      {
        q: 'What is the Overlay Fact Sheet?',
        a: 'It is a public statement at overlayfactsheet.com, signed by more than 1,000 accessibility professionals and disabled users, documenting why overlay and widget products do not deliver accessibility or compliance and can introduce new barriers.'
      },
      {
        q: 'Did accessiBe get fined?',
        a: 'In 2025 the US Federal Trade Commission finalised a $1,000,000 order against accessiBe over deceptive advertising claims that its product could make any website compliant. It is a clear signal that "AI makes you compliant" marketing does not hold up.'
      },
      {
        q: 'What should I do instead of using an overlay?',
        a: 'Test your site properly — automated checks plus manual keyboard and screen-reader testing, or a professional audit — then fix the issues in your own code and content. Publish an honest accessibility statement with a way for users to report problems.'
      }
    ]
  },

  // --------------------------------------------------- KEYBOARD A11Y
  {
    slug: 'keyboard-accessibility',
    name: 'Keyboard accessibility',
    title: 'Keyboard Accessibility: Navigation, Focus and Skip Links',
    metaTitle: 'Keyboard Accessibility: Focus Order, Visible Focus & Traps | EAA Navigator',
    metaDescription:
      'Keyboard accessibility explained: keyboard-only navigation, logical focus order, visible focus indicators, skip links and the common keyboard traps to avoid.',
    summary:
      'Keyboard-only navigation, focus order, visible focus, skip links and the traps to avoid.',
    intro:
      'Many people cannot use a mouse — including screen-reader users, people with motor disabilities and anyone using a keyboard by preference. WCAG requires that everything you can do with a mouse you can also do with a keyboard. This guide explains keyboard navigation, focus order, visible focus, skip links and the traps to avoid.',
    tldr: [
      'WCAG requires all functionality to be operable with a keyboard, not just a mouse or touch.',
      'The focus order must be logical and match the visual order, and the currently focused element must be clearly visible.',
      'A keyboard trap — where focus gets stuck and cannot move on — is a serious barrier and a common failure.',
      'Skip links let keyboard and screen-reader users bypass repetitive navigation and jump to the main content.'
    ],
    covers: [
      'What keyboard accessibility means and who depends on it.',
      'Focus order and why it should follow the visual reading order.',
      'Visible focus indicators and why removing them is a common, serious failure.',
      'Skip links and keyboard traps — what they are and how to handle them.'
    ],
    keyPointsHeading: 'Common pitfalls',
    keyPoints: [
      'Removed focus outlines: styling away the focus ring (for example with CSS that hides the outline) leaves keyboard users unable to see where they are. Provide a clear, visible focus indicator instead.',
      'Illogical focus order: when the tab order jumps around the page rather than following the visual order, the page becomes confusing and hard to operate.',
      'Keyboard traps: modals, menus and embedded widgets that capture focus and never release it stop users from continuing — a direct WCAG failure.',
      'Mouse-only controls: custom dropdowns, sliders and "click" handlers that ignore the keyboard make functionality unreachable for keyboard users.',
      'Missing skip link: without a "skip to main content" link, keyboard users must tab through the entire navigation on every page.'
    ],
    steps: [
      'Put the mouse away and tab through your page: you should be able to reach and operate every control in a logical order.',
      'Make sure the focus indicator is always clearly visible — never remove the outline without replacing it with something equally clear.',
      'Check that focus order follows the visual reading order, and fix any places where it jumps unexpectedly.',
      'Add a skip link at the top of the page so users can jump straight to the main content.',
      'Test modals, menus and custom widgets for traps: focus should move in, stay within while open, and return sensibly when closed.'
    ],
    faq: [
      {
        q: 'What is keyboard accessibility?',
        a: 'It means everything on your site can be operated using only a keyboard, with no mouse required. WCAG requires this because many people — including screen-reader users and people with motor disabilities — navigate by keyboard.'
      },
      {
        q: 'What is a keyboard trap?',
        a: 'A keyboard trap is when focus moves into a component — often a modal, menu or embedded widget — and then cannot be moved out using the keyboard. It is a WCAG failure because it can leave a user stuck and unable to use the rest of the page.'
      },
      {
        q: 'Why do I need a visible focus indicator?',
        a: 'Keyboard users rely on the focus indicator to see which element is currently selected. If it is removed or hidden, they cannot tell where they are on the page. WCAG requires a visible focus indicator, so never style it away without providing a clear replacement.'
      },
      {
        q: 'What is a skip link?',
        a: 'A skip link is usually the first focusable element on a page — a "skip to main content" link that lets keyboard and screen-reader users bypass the repeated navigation and jump straight to the main content. It is often visually hidden until it receives focus.'
      }
    ]
  },

  // --------------------------------------------------- ALT TEXT GUIDE
  {
    slug: 'alt-text-guide',
    name: 'Alt text',
    title: 'Alt Text Guide: Writing Good Alternative Text',
    metaTitle: 'Alt Text Guide: Decorative vs Informative Images | EAA Navigator',
    metaDescription:
      'How to write good alt text: informative vs decorative images, what to say and what to leave out, and why 55.5% of home pages still have missing alternative text.',
    summary:
      'How to write good alt text: informative vs decorative images and what to actually say.',
    intro:
      'Alt text (alternative text) is the written description of an image that screen readers announce and that appears when an image fails to load. Getting it right is one of the most basic accessibility tasks, yet missing alt text remains one of the most common failures on the web. This guide explains how to write good alt text and when to leave it empty.',
    tldr: [
      'Alt text describes the purpose and content of an image for people who cannot see it.',
      'Informative images need alt text that conveys the same information the image gives a sighted user; decorative images should have empty alt text so screen readers skip them.',
      'Missing alt text is one of the most common failures online: 55.5% of home pages had missing alternative text in the WebAIM Million 2025.',
      'Good alt text is concise and describes meaning, not appearance for its own sake — and it never starts with "image of".'
    ],
    covers: [
      'What alt text is and where it is used.',
      'The difference between informative and decorative images, and how to treat each.',
      'How to write alt text that conveys an image’s purpose, not just its appearance.',
      'Special cases: images of text, functional images (links and buttons) and complex images such as charts.'
    ],
    keyPointsHeading: 'How to write it well',
    keyPoints: [
      'Informative images: write alt text that gives the same information a sighted user gets, in as few words as needed. For a product photo, describe the product; for a chart, summarise the point it makes.',
      'Decorative images: use empty alt text (alt="") so screen readers skip them. A decorative flourish with a description just adds noise.',
      'Functional images: when an image is a link or button, the alt text should describe the action or destination, not the picture — for example "Search" rather than "magnifying glass".',
      'Keep it concise and avoid redundancy: do not start with "image of" or "picture of", and do not repeat text that already sits next to the image.',
      'Images of text: avoid them where possible; if unavoidable, the alt text must contain the same words as the image.'
    ],
    steps: [
      'For every image, decide whether it is informative, decorative or functional — that decision drives the alt text.',
      'Write concise alt text for informative images that conveys their purpose, and use empty alt (alt="") for purely decorative ones.',
      'For images that are links or buttons, describe the action or destination rather than the graphic.',
      'Remove "image of" / "picture of" prefixes and avoid repeating adjacent caption text.',
      'Audit your key pages for missing alt attributes — it is one of the most common failures and one of the easiest to fix.'
    ],
    faq: [
      {
        q: 'What is alt text?',
        a: 'Alt text, or alternative text, is a written description of an image. Screen readers announce it to people who cannot see the image, and browsers show it when an image fails to load. It is set with the image’s alt attribute.'
      },
      {
        q: 'Should every image have alt text?',
        a: 'Every image needs an alt attribute, but not every image needs a description. Informative images need alt text that conveys their meaning; purely decorative images should have empty alt text (alt="") so screen readers skip them.'
      },
      {
        q: 'How long should alt text be?',
        a: 'As short as possible while still conveying the image’s purpose — usually a sentence or less. If an image needs a long description, such as a complex chart, provide a short alt text and put the full explanation in nearby text.'
      },
      {
        q: 'How common is missing alt text?',
        a: 'Very common. The WebAIM Million 2025 found missing alternative text on 55.5% of the top one million home pages, making it one of the most frequent accessibility failures on the web — and one of the simplest to fix.'
      }
    ]
  }
];

export function getGuide(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}
