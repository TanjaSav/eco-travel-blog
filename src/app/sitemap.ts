import { createClient } from "@/prismicio";

const BASE_URL = "https://eco-travel-blog-c56v.vercel.app";

export default async function sitemap() {
  const client = createClient();
  const articles = await client.getAllByType("article", {
    orderings: [{ field: "my.article.published_at", direction: "desc" }],
  });

  const articleUrls = articles.map((article: any) => ({
    url: `${BASE_URL}/articles/${article.uid}`,
    lastModified: article.data.published_at || new Date().toISOString(),
  }));

  return [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${BASE_URL}/articles`,
      lastModified: new Date().toISOString(),
    },
    ...articleUrls,
  ];
}