import Image from "next/image";
import { notFound } from "next/navigation";
import { createClient } from "@/prismicio";
import { playfair, inter } from "@/fonts";
import Link from "next/link";
import { asText } from "@prismicio/client";

type PageProps = {
  params: Promise<{
    uid: string;
  }>;
};

// Generate static paths for all articles (SSG)
export async function generateStaticParams() {
  const client = createClient();
  const articles = await client.getAllByType("article");

  return articles.map((article) => ({
    uid: article.uid,
  }));
}

export default async function ArticlePage({ params }: PageProps) {
  const { uid } = await params;
  const client = createClient();

  try {
    // Fetch article by UID from Prismic
    const article = await client.getByUID("article", uid);

    return (
      <main className="border-y border-[#7FA091]">

        {/* Back navigation */}
        <div className="container-main py-3 md:py-4">
          <div className="mx-auto max-w-300">
            <Link
              href="/articles"
              className={`${inter.className} inline-flex items-center gap-2 text-[14px] leading-4.5 text-[#374151] transition-opacity hover:opacity-80`}
            >
              <span aria-hidden="true">←</span>
              Back
            </Link>

            {/* Divider */}
            <div className="my-3 border-b border-[#7FA091] md:my-4" />
          </div>
        </div>

        {/* Main article content */}
        <div className="container-main">
          <article className="mx-auto max-w-195 pb-5 md:pb-6">

            {/* Category badge */}
            {article.data.category && (
              <p
                className={`${inter.className} mb-6 inline-flex rounded-full bg-[#D9EEE7] px-3 py-1 text-[12px] font-medium leading-4 text-[#1D604B] md:mb-7`}
              >
                {article.data.category}
              </p>
            )}

            {/* Article title */}
            <h1
              className={`${playfair.className} mb-5 max-w-225 text-[22px] font-bold leading-6.5 text-[#171D16] md:mb-6 md:text-[36px] md:leading-9.5`}
            >
              {asText(article.data.title)}
            </h1>

            {/* Summary / subtitle */}
            <p
              className={`${playfair.className} mb-6 max-w-225 text-[14px] font-bold leading-4.5 text-[#374151] md:mb-8 md:text-[17px] md:leading-5.25`}
            >
              {asText(article.data.summary)}
            </p>

            {/* Featured image */}
            {article.data.featured_image?.url && (
              <Image
                src={article.data.featured_image.url}
                alt={
                  article.data.featured_image.alt ||
                  asText(article.data.title) ||
                  ""
                }
                width={780}
                height={420}
                className="mb-6 h-auto w-full rounded-lg object-cover md:mb-10"
              />
            )}

            {/* Article body content (headings + paragraphs) */}
            <div className="flex flex-col gap-4 md:gap-6">
              {article.data.body?.map((item: any, index: number) => {
                // Render H2 blocks
                if (item.type === "heading2") {
                  return (
                    <h2
                      key={index}
                      className={`${playfair.className} pt-1 text-[18px] font-bold leading-5.5 text-[#171D16] md:pt-2 md:text-[22px] md:leading-6.5`}
                    >
                      {item.text}
                    </h2>
                  );
                }

                // Render H3 blocks
                if (item.type === "heading3") {
                  return (
                    <h3
                      key={index}
                      className={`${playfair.className} text-[16px] font-bold leading-5 text-[#171D16] md:pt-1 md:text-[20px] md:leading-6`}
                    >
                      {item.text}
                    </h3>
                  );
                }

                // Default: paragraph text
                return (
                  <p
                    key={index}
                    className={`${inter.className} text-[14px] font-light leading-5.5 text-[#171D16] md:text-[16px] md:leading-6.5`}
                  >
                    {item.text}
                  </p>
                );
              })}
            </div>
          </article>
        </div>

        {/* Footer metadata: author + date */}
        <div className="container-main">
          <div className="mx-auto max-w-300 border-t border-[#7FA091] pt-4 pb-5 md:pt-6 md:pb-6">
            <p
              className={`${inter.className} text-[12px] leading-4 text-[#171D16] md:text-[14px] md:leading-5 text-right`}
            >
              {article.data.author} · {article.data.published_at}
            </p>
          </div>
        </div>
      </main>
    );
  } catch {
    // If article not found, show Next.js 404 page
    notFound();
  }
}