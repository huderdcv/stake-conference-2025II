import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*', // todos los buscadores (Google, Bing, etc.)
        allow: '/', // permite acceso a todo el sitio
      },
    ],
    sitemap: 'https://conferencia-estaca-ayacucho.vercel.app/sitemap.xml',
  };
}
