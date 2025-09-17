// app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://conferencia-estaca-ayacucho.vercel.app/', // página principal
      lastModified: new Date(), // última vez que cambió
      changeFrequency: 'weekly', // cada cuánto suele actualizarse
      priority: 1, // 1 = muy importante
    },
  ];
}
