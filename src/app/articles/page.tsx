import Link from "next/link";
import Image from "next/image";
import { createClient } from "@/prismicio";
import { playfair, inter } from "@/fonts";

export default async function ArticlesPage() {
  const client = createClient();

  const articles = await client.getAllByType("article", {
    orderings: [{ field: "my.article.published_at", direction: "desc" }],
  });

  return (
    <main className="border-y border-[#7FA091]">
      <div className="container-main">
        <section className="py-3 text-center md:py-4">
          <h1
            className={`${playfair.className} text-[14px] font-bold leading-[18px] text-[#171D16] md:text-[18px] md:leading-[22px]`}
          >
            All Articles
          </h1>
        </section>

        <div className="border-t border-[#7FA091]">
          {articles.map((article) => {
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
                    <div className="shrink-0 min-[914px]:w-[300px]">
                      <Image
                        src={article.data.thumbnail.url}
                        alt={
                          article.data.thumbnail.alt ||
                          article.data.title?.[0]?.text ||
                          ""
                        }
                        width={300}
                        height={200}
                        className="h-[220px] w-full rounded-lg object-cover min-[914px]:h-[200px]"
                      />
                    </div>
                  )}

                  <Link
                    href={`/articles/${article.uid}`}
                    className="flex min-h-[220px] min-w-0 flex-1 flex-col justify-between transition-opacity hover:opacity-80 min-[914px]:min-h-[200px]"
                  >
                    <div>
                      <h2
                        className={`${playfair.className} mb-2 text-[18px] font-bold leading-[22px] text-[#171D16] md:mb-3 md:text-[20px] md:leading-[24px]`}
                      >
                        {article.data.title?.[0]?.text}
                      </h2>

                      <p
                        className={`${inter.className} text-[13px] font-light leading-[20px] text-[#171D16] line-clamp-6 min-[680px]:line-clamp-7 min-[914px]:line-clamp-5 md:text-[14px] md:leading-[22px]`}
                      >
                        {articleText}
                      </p>
                    </div>

                    <div className="mt-3 flex items-center justify-between gap-4 md:mt-4">
                      <p
                        className={`${inter.className} text-[11px] leading-[14px] text-[#171D16] md:text-[12px] md:leading-[16px]`}
                      >
                        {article.data.author} · {article.data.published_at}
                      </p>

                      <span
                        className={`${inter.className} inline-flex items-center gap-2 text-[12px] font-medium leading-[16px] text-[#1D604B] md:text-[14px] md:leading-[20px]`}
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
    </main>
  );
}