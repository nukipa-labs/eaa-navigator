import type { MetadataRoute } from 'next';
import { GUIDES } from '@/lib/guides';

const BASE = 'https://eaa-navigator.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes: { path: string; priority: number; changeFrequency: 'weekly' | 'monthly' | 'yearly' }[] = [
    { path: '/', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/accessibility', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/wcag', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/eaa', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/ada', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/deadlines', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/guides', priority: 0.8, changeFrequency: 'monthly' },
    // guide subpages added below
    { path: '/contrast-checker', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/vpat', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/wcag-checklist', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/glossary', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/resources', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/subscribe', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/about', priority: 0.5, changeFrequency: 'monthly' },
    { path: '/legal/privacy', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/legal/terms', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/legal/imprint', priority: 0.3, changeFrequency: 'yearly' }
  ];

  for (const g of GUIDES) {
    routes.push({ path: `/guides/${g.slug}`, priority: 0.7, changeFrequency: 'monthly' });
  }

  return routes.map((r) => ({
    url: `${BASE}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority
  }));
}
