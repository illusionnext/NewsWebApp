import { newsTypes } from "@/types/types";
import Image from "next/image";
import { notFound } from "next/navigation";
import classes from "./page.module.css";
import { dummyNews } from "@/components/SSG/dummy-data/dummyNews";

export default async function NewsSlug({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  console.log({ slug });

  // Find the item that matches the slug
  const newsItem: newsTypes | undefined = dummyNews.find(
    (item) => item.slug === slug,
  );

  if (!newsItem) {
    notFound();
  } else {
    return (
      <article className={classes["news-article"]}>
        <header>
          <Image
            width={700}
            height={400}
            src={`/images/news/${newsItem.image}`}
            alt={newsItem.title}
            priority
          />
          <h1>{newsItem.title}</h1>
          <time dateTime={newsItem.date}>{newsItem.date}</time>
        </header>
        <p>{newsItem.content}</p>
      </article>
    );
  }
}
