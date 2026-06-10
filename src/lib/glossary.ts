// Web accessibility glossary. Plain-English first, then the precise/standard
// phrasing. Grounded in BUILD-CONTEXT.md "VERIFIED FACTS" (WCAG 2.1/2.2, the
// EAA / Directive (EU) 2019/882, EN 301 549, the ADA / Section 508 and VPAT).
// Used by /glossary (DefinedTerm schema) and linkable from the pillar pages.

export type GlossaryTerm = {
  slug: string;
  term: string;
  /** Plain-English definition, shown first. */
  plain: string;
  /** The precise / standard phrasing, shown in muted text below. Optional. */
  formal?: string;
  /** Related term slugs. */
  seeAlso?: string[];
};

export const GLOSSARY: GlossaryTerm[] = [
  {
    slug: 'wcag',
    term: 'WCAG',
    plain:
      'The Web Content Accessibility Guidelines: the international standard for making websites and digital content usable by people with disabilities. Almost every accessibility law points back to WCAG.',
    formal:
      'Published by the World Wide Web Consortium (W3C) through its Web Accessibility Initiative (WAI). Organised under four principles (POUR) and three conformance levels (A, AA, AAA). Versions: 2.0 (2008), 2.1 (2018), 2.2 (2023).',
    seeAlso: ['wcag-21', 'wcag-22', 'pour', 'level-aa', 'success-criterion']
  },
  {
    slug: 'wcag-21',
    term: 'WCAG 2.1',
    plain:
      'The 2018 version of WCAG. It is the version most accessibility laws currently reference, including the EU standard EN 301 549 and the US DOJ Title II rule.',
    formal:
      'W3C Recommendation of 5 June 2018. Adds criteria for mobile, low vision and cognitive accessibility on top of WCAG 2.0. WCAG 2.1 Level AA contains 50 success criteria.',
    seeAlso: ['wcag', 'wcag-22', 'en-301-549', 'level-aa']
  },
  {
    slug: 'wcag-22',
    term: 'WCAG 2.2',
    plain:
      'The current version of WCAG, from 2023. It adds nine new success criteria (for example minimum target size and not obscuring focus) and removes one obsolete one.',
    formal:
      'W3C Recommendation of 5 October 2023. Adds 9 new success criteria across levels and removes 4.1.1 Parsing, giving a net +5 at each level (WCAG 2.2 Level AA = 55 success criteria). It is backwards-compatible with 2.1.',
    seeAlso: ['wcag', 'wcag-21', 'success-criterion', 'focus-indicator']
  },
  {
    slug: 'level-a',
    term: 'Level A',
    plain:
      'The lowest WCAG conformance level. Meeting Level A removes the most severe barriers, but it is not enough on its own for legal compliance.',
    formal:
      'The minimum WCAG conformance level. Level A success criteria address the most fundamental accessibility barriers. Most laws require the higher Level AA, which includes all Level A criteria.',
    seeAlso: ['level-aa', 'level-aaa', 'conformance', 'success-criterion']
  },
  {
    slug: 'level-aa',
    term: 'Level AA',
    plain:
      'The middle WCAG level and the one that matters legally. AA is the target referenced by the EAA (via EN 301 549), Section 508, the DOJ Title II rule and most ADA case law.',
    formal:
      'The conformance level required by essentially every accessibility law. Level AA includes all Level A criteria plus additional ones (for example colour contrast and resize text). WCAG 2.1 AA = 50 criteria; WCAG 2.2 AA = 55.',
    seeAlso: ['level-a', 'level-aaa', 'conformance', 'en-301-549', 'eaa']
  },
  {
    slug: 'level-aaa',
    term: 'Level AAA',
    plain:
      'The highest WCAG level. It is not expected across a whole site and is not the usual legal target — some AAA criteria cannot be met for all content.',
    formal:
      'The most demanding WCAG conformance level. W3C does not recommend AAA as a general policy requirement for entire sites. Focus Appearance (2.4.13) in WCAG 2.2 is a AAA criterion, not AA.',
    seeAlso: ['level-a', 'level-aa', 'conformance']
  },
  {
    slug: 'pour',
    term: 'POUR',
    plain:
      'The four principles WCAG is built on: content must be Perceivable, Operable, Understandable and Robust. Every success criterion sits under one of them.',
    formal:
      'Perceivable, Operable, Understandable, Robust — the four foundational principles of WCAG. Each principle contains guidelines, and each guideline contains testable success criteria.',
    seeAlso: ['wcag', 'success-criterion']
  },
  {
    slug: 'success-criterion',
    term: 'Success criterion',
    plain:
      'A single, testable accessibility rule in WCAG — for example "text has enough contrast". Each criterion is assigned to a level (A, AA or AAA), and conformance is measured against them.',
    formal:
      'A testable statement under a WCAG guideline, each assigned to Level A, AA or AAA. WCAG 2.2 has 86 success criteria in total; 55 of them are needed for Level AA.',
    seeAlso: ['wcag', 'pour', 'level-aa', 'conformance']
  },
  {
    slug: 'conformance',
    term: 'Conformance',
    plain:
      'Whether a page meets all the WCAG success criteria for a given level. A site is said to conform to, say, "WCAG 2.1 AA" when it satisfies every Level A and AA criterion.',
    formal:
      'Satisfying all the WCAG success criteria for a chosen level (and lower). Conformance is per page; partial conformance and exceptions must be documented (for example in an accessibility statement or a VPAT/ACR).',
    seeAlso: ['level-aa', 'success-criterion', 'accessibility-statement', 'vpat']
  },
  {
    slug: 'en-301-549',
    term: 'EN 301 549',
    plain:
      'The EU’s harmonised technical standard for accessible technology. For websites and apps it incorporates WCAG, so meeting it is how you show conformance with EU accessibility law.',
    formal:
      'The harmonised European standard (ETSI/CEN/CENELEC) for ICT accessibility. Current harmonised version v3.2.1 (2021); its Chapter 9 incorporates WCAG 2.1 Level A and AA. It is the conformance benchmark for both the EAA and the Web Accessibility Directive.',
    seeAlso: ['eaa', 'web-accessibility-directive', 'wcag-21', 'level-aa']
  },
  {
    slug: 'eaa',
    term: 'European Accessibility Act (EAA)',
    plain:
      'EU law setting common accessibility requirements for a defined list of products and services — such as e-commerce, banking, e-books and smartphones. Its requirements have applied since 28 June 2025.',
    formal:
      'Directive (EU) 2019/882. Adopted 17 April 2019; transposition deadline 28 June 2022; requirements apply from 28 June 2025. Conformance for digital content is shown via EN 301 549 (WCAG 2.1 AA). Micro-enterprises providing services are exempt.',
    seeAlso: ['en-301-549', 'web-accessibility-directive', 'ada', 'accessibility-statement']
  },
  {
    slug: 'web-accessibility-directive',
    term: 'Web Accessibility Directive',
    plain:
      'The earlier EU law (2016) that requires public-sector websites and apps to be accessible and to publish an accessibility statement. The EAA later extended similar duties to the private sector.',
    formal:
      'Directive (EU) 2016/2102 on the accessibility of public-sector bodies’ websites and mobile applications. Requires conformance with EN 301 549 (WCAG AA) and an accessibility statement using the EU model, reviewed at least annually.',
    seeAlso: ['eaa', 'en-301-549', 'accessibility-statement']
  },
  {
    slug: 'ada',
    term: 'ADA',
    plain:
      'The Americans with Disabilities Act: US civil-rights law that courts apply to websites of "public accommodations". It has no explicit web standard, but cases use WCAG AA as the benchmark.',
    formal:
      'The Americans with Disabilities Act (1990). Title III covers public accommodations; courts and settlements use WCAG 2.0/2.1 AA. The DOJ Title II final rule (2024) adopts WCAG 2.1 AA, with compliance deadlines of 26 April 2027 / 2028 after a one-year extension in April 2026.',
    seeAlso: ['section-508', 'eaa', 'level-aa']
  },
  {
    slug: 'section-508',
    term: 'Section 508',
    plain:
      'US federal procurement law requiring technology bought or built by federal agencies to be accessible. It is why US agencies ask vendors for a VPAT.',
    formal:
      'Section 508 of the US Rehabilitation Act. The 2017 "508 Refresh" incorporates WCAG 2.0 Level AA. Drives demand for VPATs/ACRs in US public-sector and enterprise procurement.',
    seeAlso: ['ada', 'vpat', 'acr', 'level-aa']
  },
  {
    slug: 'vpat',
    term: 'VPAT',
    plain:
      'A standard template a vendor fills in to report how accessible their product is. Procurement teams ask for it, especially in the US public sector. A completed VPAT is called an ACR.',
    formal:
      'Voluntary Product Accessibility Template, from the IT Industry Council (ITI). Four editions: WCAG, 508, EU (EN 301 549) and INT. A completed VPAT is an Accessibility Conformance Report (ACR).',
    seeAlso: ['acr', 'section-508', 'conformance', 'auditing']
  },
  {
    slug: 'acr',
    term: 'ACR (Accessibility Conformance Report)',
    plain:
      'A completed VPAT — the document that actually reports, criterion by criterion, how accessible a product is. Buyers use it to compare products and check compliance.',
    formal:
      'Accessibility Conformance Report: the output of completing a VPAT against a chosen edition (WCAG, 508, EN 301 549 or INT), stating support level ("Supports", "Partially Supports", "Does Not Support") for each criterion.',
    seeAlso: ['vpat', 'conformance', 'section-508']
  },
  {
    slug: 'accessibility-statement',
    term: 'Accessibility statement',
    plain:
      'A public page explaining how accessible a site is, what is not yet accessible, and how to report a problem. It is mandatory for EU public-sector bodies and good practice for everyone.',
    formal:
      'A published statement of compliance status, known non-accessible content (with reasons/exemptions), a feedback mechanism and an enforcement contact, plus the preparation method and date. Required for public-sector bodies under Directive (EU) 2016/2102 and reviewed at least annually.',
    seeAlso: ['web-accessibility-directive', 'eaa', 'conformance']
  },
  {
    slug: 'auditing',
    term: 'Accessibility audit',
    plain:
      'A structured review of a site against WCAG, combining automated checks with manual and assistive-technology testing. It produces a list of issues to fix.',
    formal:
      'An evaluation of digital content against WCAG (usually Level AA). Because automated tools detect only about 30–40% of issues, a credible audit includes manual keyboard and screen-reader testing. Output feeds remediation and any VPAT/ACR.',
    seeAlso: ['remediation', 'wcag', 'level-aa', 'vpat', 'accessibility-overlay']
  },
  {
    slug: 'remediation',
    term: 'Remediation',
    plain:
      'The work of fixing the accessibility problems an audit finds — correcting code, content and design so the site actually meets WCAG.',
    formal:
      'The process of correcting identified accessibility defects in code, content and design to bring a site into WCAG conformance. Distinct from an overlay, which does not change the underlying site.',
    seeAlso: ['auditing', 'conformance', 'accessibility-overlay']
  },
  {
    slug: 'assistive-technology',
    term: 'Assistive technology',
    plain:
      'Tools people use to access digital content, such as screen readers, screen magnifiers, switch devices and voice control. Accessibility means working correctly with these tools.',
    formal:
      'Hardware or software that people with disabilities use to interact with content — screen readers, magnifiers, alternative input devices, voice recognition and more. WCAG’s "Robust" principle requires content to work reliably with them.',
    seeAlso: ['screen-reader', 'aria', 'keyboard-accessibility', 'pour']
  },
  {
    slug: 'screen-reader',
    term: 'Screen reader',
    plain:
      'Software that reads a screen aloud (or sends it to a braille display) so blind and low-vision users can navigate. Common examples are NVDA, JAWS and VoiceOver.',
    formal:
      'Assistive technology that converts on-screen content to speech or braille, navigating by the page’s semantic structure (headings, landmarks, labels, alt text). Poor structure or missing alt text makes content unusable for screen-reader users.',
    seeAlso: ['assistive-technology', 'alt-text', 'aria', 'keyboard-accessibility']
  },
  {
    slug: 'aria',
    term: 'ARIA',
    plain:
      'A set of HTML attributes that add accessibility information — roles, states and labels — to interactive components that HTML alone cannot describe, so assistive technology understands them.',
    formal:
      'Accessible Rich Internet Applications (WAI-ARIA), a W3C specification. Provides roles, states and properties for custom widgets. First rule of ARIA: use native HTML where you can; incorrect ARIA can make things worse than none.',
    seeAlso: ['assistive-technology', 'screen-reader', 'keyboard-accessibility']
  },
  {
    slug: 'alt-text',
    term: 'Alt text',
    plain:
      'The written description of an image that screen readers announce and that shows when an image fails to load. Informative images need it; decorative images should have empty alt text.',
    formal:
      'Alternative text set via an image’s alt attribute, satisfying WCAG 1.1.1 Non-text Content (Level A). Decorative images take an empty alt (alt=""). Missing alt text was found on 55.5% of home pages in the WebAIM Million 2025.',
    seeAlso: ['screen-reader', 'success-criterion', 'level-a']
  },
  {
    slug: 'colour-contrast-ratio',
    term: 'Colour contrast ratio',
    plain:
      'A measure of how readable text is against its background. Low contrast is the single most common accessibility failure on the web.',
    formal:
      'The luminance ratio between text and background. WCAG 1.4.3 (Level AA) requires at least 4.5:1 for normal text and 3:1 for large text. Low-contrast text was found on 79.1% of home pages in the WebAIM Million 2025.',
    seeAlso: ['level-aa', 'success-criterion', 'wcag']
  },
  {
    slug: 'keyboard-accessibility',
    term: 'Keyboard accessibility',
    plain:
      'Being able to operate everything on a site using only a keyboard, with no mouse. Many people — including screen-reader and motor-impaired users — depend on it.',
    formal:
      'Satisfying WCAG 2.1.1 Keyboard (Level A) and 2.1.2 No Keyboard Trap: all functionality available from a keyboard, with focus able to move away from any component. Underpins focus order, visible focus and skip links.',
    seeAlso: ['focus-indicator', 'skip-link', 'assistive-technology', 'screen-reader']
  },
  {
    slug: 'focus-indicator',
    term: 'Focus indicator',
    plain:
      'The visible highlight showing which element the keyboard is currently on. Removing it leaves keyboard users unable to tell where they are.',
    formal:
      'The visible focus state required by WCAG 2.4.7 Focus Visible (Level AA). WCAG 2.2 adds 2.4.11 Focus Not Obscured (Minimum, AA) and the AAA criterion 2.4.13 Focus Appearance. Never remove the outline without an equally clear replacement.',
    seeAlso: ['keyboard-accessibility', 'skip-link', 'wcag-22', 'level-aa']
  },
  {
    slug: 'skip-link',
    term: 'Skip link',
    plain:
      'A "skip to main content" link, usually the first thing a keyboard user reaches, that lets them jump past the navigation instead of tabbing through it on every page.',
    formal:
      'A bypass mechanism supporting WCAG 2.4.1 Bypass Blocks (Level A). Typically the first focusable element, often visually hidden until focused, that moves focus to the main content region.',
    seeAlso: ['keyboard-accessibility', 'focus-indicator', 'level-a']
  },
  {
    slug: 'accessibility-overlay',
    term: 'Accessibility overlay',
    plain:
      'A third-party widget that claims to make a site accessible automatically. It cannot deliver compliance: automated tools catch only about 30–40% of issues, so most barriers remain.',
    formal:
      'A script (such as accessiBe, AudioEye, UserWay or EqualWeb) layered over a site to "auto-fix" accessibility. Rejected as a compliance solution by the Overlay Fact Sheet (1,000+ signatories); in 2025 the FTC finalised a $1,000,000 order against accessiBe over deceptive claims. The DOJ has said overlays do not equal ADA compliance.',
    seeAlso: ['auditing', 'remediation', 'ada', 'conformance']
  }
];
