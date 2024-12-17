import { newsTypes } from "@/types/types";
import Image from "next/image";
import { notFound } from "next/navigation";
import classes from "./page.module.css";
import Link from "next/link";
import { use } from "react";
import { getNewsItem } from "@/lib/news";

export default function NewsSlug({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Resolving params and the single news item with 'use' hook
  const { slug } = use(params),
    newsItem = use(getNewsItem(slug)) as newsTypes;
  console.dir("Were are on the news slug page 📃");
  console.dir({ slug });

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
