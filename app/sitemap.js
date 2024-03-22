export const revalidate = 0;

export const sitemap = async () => {
  const [publications, recipes] = await Promise.all([
    fetch(`${process.env.BACKEND_URL}/publications?populate=deep,3`)
      .then(response => response.json())
      .then(({ data }) => data?.map(d => ({ ...d, ...d?.attributes }))),
    fetch(`${process.env.BACKEND_URL}/recipes?populate=deep,3`)
      .then(response => response.json())
      .then(({ data }) => data?.map(d => ({ ...d, ...d?.attributes }))),
  ]);

  const routes = [
    '',
    '/zhda',
    '/risk-groups',
    '/diagnostics',
    '/how-to-treat',
    '/about-ferretab',
    '/test-zhda',
    '/recipes',
    '/blog',
    '/about-ferretab',
    '/privacy-policy',
    '/terms-of-use',
  ].map(route => ({
    url: `${process.env.STATIC_URL}${route}/`,
    lastModified: new Date().toISOString(),
  }));

  return [
    ...routes,
    ...publications.map(({ id, slug, updatedAt }) => ({
      url: `${process.env.STATIC_URL}/blog/${id}-${slug}/`,
      lastModified: updatedAt,
    })),
    ...recipes.map(({ id, slug, updatedAt }) => ({
      url: `${process.env.STATIC_URL}/recipes/${id}-${slug}/`,
      lastModified: updatedAt,
    })),
  ];
};

export default sitemap;
