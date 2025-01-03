import type { MetadataRoute } from 'next'
import { postItems } from '@/data/data';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages = [
    {
      url: 'https://www.fastcookiteasy.com', 
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: 'https://www.fastcookiteasy.com/about',
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: 'https://www.fastcookiteasy.com/contact',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.5,
    },
    {
      url: 'https://www.fastcookiteasy.com/postitems',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: 'https://www.fastcookiteasy.com/policy',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.3,
    },
    {
      url: 'https://www.fastcookiteasy.com/terms',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.3,
    },
    {
      url: 'https://www.fastcookiteasy.com/disclaimer',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.3,
    },
    {
      url: 'https://www.fastcookiteasy.com/ads.txt',
      lastModified: new Date(),
      priority: 0.3,
    },
    {
      url: 'https://www.fastcookiteasy.com/postitems/category/quick-and-easy',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: 'https://www.fastcookiteasy.com/postitems/category/main-course',
      lastModified: new Date(),
      changeFrequency: 'weekly'as const,
      priority: 0.8,
    },
    {
      url: 'https://www.fastcookiteasy.com/postitems/category/dessert',
      lastModified: new Date(),
      changeFrequency: 'weekly'as const,
      priority: 0.8,
    },
    {
      url: 'https://www.fastcookiteasy.com/postitems/category/drinks',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ];
  const foundItems = postItems.map((post)=>({
    url: `https://www.fastcookiteasy.com/postitems/${post.title.replace(/\s+/g, '-').toLowerCase()}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));
  return [...staticPages, ...foundItems];
}
