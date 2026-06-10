// AI-generated brand imagery (Nukipa cms_generate_asset_image), stored in the
// tenant asset library (Supabase cms-assets). Inclusive editorial photography of
// real people using everyday technology with assistive tools, indigo/cyan grade.
// next.config.mjs allows any https remotePattern, so these load via next/image.

const BASE =
  'https://aqynbjfkcfnrqkhzbzxl.supabase.co/storage/v1/object/public/cms-assets/7e6c02ef-cede-4e27-8e76-c0e2dc27c9c1/';

export type BrandImage = { src: string; alt: string; width: number; height: number };

export const IMAGES: Record<string, BrandImage> = {
  heroBraille: {
    src: BASE + '9b9c726c-efb6-4c07-bd2c-0df9c3a8cabb.jpg',
    alt: 'A blind man using a laptop with headphones and a refreshable braille display in a bright modern workspace',
    width: 1536,
    height: 1024
  },
  teamReview: {
    src: BASE + '9b48c890-1dac-4bc5-ae70-540e731e7e44.jpg',
    alt: 'Two colleagues, one a wheelchair user, reviewing a website together on a large monitor in a modern office',
    width: 1536,
    height: 1024
  },
  lowVision: {
    src: BASE + '250fbc64-983b-474d-b54c-298aa3108e51.jpg',
    alt: 'A woman with low vision using screen magnification on a tablet near a window',
    width: 1536,
    height: 1024
  }
};
