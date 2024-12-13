import { newsTypes } from "@/types/types";
import Image from "next/image";
import { notFound } from "next/navigation";
import classes from "./page.module.css";
import { dummyNews } from "@/components/SSG/dummy-data/dummyNews";
import Link from "next/link";
import { use } from "react";

export default function NewsSlug({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params); // I used 'use' hook to resolve the promise without added await and async. It is a new feature in React 19.
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
          <Link href={`/news/${newsItem.slug}/image`}>
            <Image
              width={700}
              height={400}
              src={`/images/news/${newsItem.image}`}
              alt={newsItem.title}
              priority
            />
          </Link>
          <h1>{newsItem.title}</h1>
          <time dateTime={newsItem.date}>{newsItem.date}</time>
        </header>
        <p>{newsItem.content}</p>
      </article>
    );
  }
}
