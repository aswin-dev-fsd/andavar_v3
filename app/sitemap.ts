import type {MetadataRoute} from 'next';

const paths = ['', '/treatments', '/cataract-surgery', '/schemes', '/about', '/patient-stories', '/eye-health'];
export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';
  return ['en','ta'].flatMap(locale => paths.map(path => ({url:`${base}/${locale}${path}`, changeFrequency:'monthly' as const, priority: path === '' ? 0.9 : 0.7}))); 
}
