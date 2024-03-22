export const robots = () => ({
  rules: {
    userAgent: '*',
    allow: '/',
  },
  sitemap: `${process.env.SITE_URL}/sitemap.xml`,
});

export default robots;
