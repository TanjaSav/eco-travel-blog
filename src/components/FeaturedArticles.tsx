import Link from "next/link";
import Image from "next/image";
import { createClient } from "@/prismicio";
import { playfair, inter } from "@/fonts";

type FeaturedArticlesProps = {
  title?: string;
  limit?: number;
};

export default async function FeaturedArticles({
  title = "Featured Articles",
  limit,
}: FeaturedArticlesProps) {
  const client = createClient();

  const articles = await client.getAllByType("article", {
    orderings: [{ field: "my.article.published_at", direction: "desc" }],
  });

  const featuredArticles = articles
    .filter((article: any) => article.data.is_featured === true)
    .slice(0, limit ?? articles.length);

  return (
    <section>
      <div className="container-main">
        <div className="py-3 text-center md:py-4">
          <h2
            className={`${playfair.className} text-[14px] font-bold leading-4.5 text-[#171D16] md:text-[18px] md:leading-5.5`}
          >
            {title}
          </h2>
        </div>

        <div className="border-t border-[#7FA091]">
          {featuredArticles.map((article: any) => {
            const articleText =
              article.data.body
                ?.filter((item: any) => item.type === "paragraph")
                .map((item: any) => item.text)
                .join(" ") || "";

            return (
              <article
                key={article.id}
                className="border-b border-[#7FA091] py-5 last:mb-6 md:py-6"
              >
                <div className="flex flex-col gap-4 min-[914px]:flex-row min-[914px]:items-start min-[914px]:gap-6">
                  {article.data.thumbnail?.url && (
                    <div className="shrink-0 min-[914px]:w-75">
                      <Image
                        src={article.data.thumbnail.url}
                        alt={
                          article.data.thumbnail.alt ||
                          article.data.title?.[0]?.text ||
                          ""
                        }
                        width={300}
                        height={200}
                        className="h-55 w-full rounded-lg object-cover min-[914px]:h-50"
                      />
                    </div>
                  )}

                  <Link
                    href={`/articles/${article.uid}`}
                    className="flex min-h-55 min-w-0 flex-1 flex-col justify-between transition-opacity hover:opacity-80 min-[914px]:min-h-50"
                  >
                    <div>
                      {article.data.category && (
                        <p
                          className={`${inter.className} mb-2 text-[11px] font-medium leading-3.5 text-[#1D604B] md:text-[12px] md:leading-4`}
                        >
                          {article.data.category}
                        </p>
                      )}

                      <h3
                        className={`${playfair.className} mb-2 text-[18px] font-bold leading-5.5 text-[#171D16] md:mb-3 md:text-[20px] md:leading-6`}
                      >
                        {article.data.title?.[0]?.text}
                      </h3>

                      <p
                        className={`${inter.className} text-[13px] font-light leading-5 text-[#171D16] line-clamp-6 min-[680px]:line-clamp-7 min-[914px]:line-clamp-5 md:text-[14px] md:leading-5.5`}
                      >
                        {articleText}
                      </p>
                    </div>

                    <div className="mt-3 flex items-center justify-between gap-4 md:mt-4">
                      <p
                        className={`${inter.className} text-[11px] leading-3.5 text-[#171D16] md:text-[12px] md:leading-4`}
                      >
                        {article.data.author} · {article.data.published_at}
                      </p>

                      <span
                        className={`${inter.className} inline-flex items-center gap-2 text-[12px] font-medium leading-4 text-[#1D604B] md:text-[14px] md:leading-5`}
                      >
                        Read more
                        <span aria-hidden="true">→</span>
                      </span>
                    </div>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}