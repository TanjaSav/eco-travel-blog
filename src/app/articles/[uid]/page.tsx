import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { createClient } from "@/prismicio";
import { playfair, inter } from "@/fonts";

type PageProps = {
  params: Promise<{
    uid: string;
  }>;
};

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
    const article = await client.getByUID("article", uid);

    return (
      <main className="border-y border-[#7FA091]">
        <div className="container-main py-3 md:py-4">
          <div className="mx-auto max-w-[1200px]">
            <Link
              href="/articles"
              className={`${inter.className} inline-flex items-center gap-2 text-[14px] leading-[18px] text-[#374151] transition-opacity hover:opacity-80`}
            >
              <span aria-hidden="true">←</span>
              Back
            </Link>

            <div className="my-3 border-b border-[#7FA091] md:my-4" />
          </div>
        </div>

        <div className="container-main">
          <article className="mx-auto max-w-[780px] pb-5 md:pb-6">
            {article.data.category && (
              <p
                className={`${inter.className} mb-6 inline-flex rounded-full bg-[#D9EEE7] px-3 py-1 text-[12px] font-medium leading-[16px] text-[#1D604B] md:mb-7`}
              >
                {article.data.category}
              </p>
            )}

            <h1
              className={`${playfair.className} mb-5 max-w-[900px] text-[22px] font-bold leading-[26px] text-[#171D16] md:mb-6 md:text-[36px] md:leading-[38px]`}
            >
              {article.data.title?.[0]?.text}
            </h1>

            <p
              className={`${playfair.className} mb-6 max-w-[900px] text-[14px] font-bold leading-[18px] text-[#374151] md:mb-8 md:text-[17px] md:leading-[21px]`}
            >
              {article.data.summary?.[0]?.text}
            </p>

            {article.data.featured_image?.url && (
              <Image
                src={article.data.featured_image.url}
                alt={
                  article.data.featured_image.alt ||
                  article.data.title?.[0]?.text ||
                  ""
                }
                width={780}
                height={420}
                className="mb-6 h-auto w-full rounded-lg object-cover md:mb-10"
              />
            )}

            <div className="flex flex-col gap-4 md:gap-6">
              {article.data.body?.map((item: any, index: number) => {
                if (item.type === "heading2") {
                  return (
                    <h2
                      key={index}
                      className={`${playfair.className} pt-1 text-[18px] font-bold leading-[22px] text-[#171D16] md:pt-2 md:text-[22px] md:leading-[26px]`}
                    >
                      {item.text}
                    </h2>
                  );
                }

                if (item.type === "heading3") {
                  return (
                    <h3
                      key={index}
                      className={`${playfair.className} text-[16px] font-bold leading-[20px] text-[#171D16] md:pt-1 md:text-[20px] md:leading-[24px]`}
                    >
                      {item.text}
                    </h3>
                  );
                }

                return (
                  <p
                    key={index}
                    className={`${inter.className} text-[14px] font-light leading-[22px] text-[#171D16] md:text-[16px] md:leading-[26px]`}
                  >
                    {item.text}
                  </p>
                );
              })}
            </div>
          </article>
        </div>

        <div className="container-main">
          <div className="mx-auto max-w-[1200px] border-t border-[#7FA091] pt-4 pb-5 md:pt-6 md:pb-6">
            <p
              className={`${inter.className} text-[12px] leading-[16px] text-[#171D16] md:text-[14px] md:leading-[20px] text-right`}
            >
              {article.data.author} · {article.data.published_at}
            </p>
          </div>
        </div>
      </main>
    );
  } catch {
    notFound();
  }
}