export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://jeweltoolhub.vercel.app/sitemap.xml',
  };
}
