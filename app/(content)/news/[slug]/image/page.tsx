import Image from "next/image";
import { notFound } from "next/navigation";
import classes from "./page.module.css";
import { use } from "react";
import { getNewsItem } from "@/lib/news";

export default function ImagePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params),
    newsItem = use(getNewsItem(slug));

  if (!newsItem) {
    notFound();
  } else {
    return (
      <section className={classes["fullscreen-image"]}>
        <Image
          width={800}
          height={600}
          src={`/images/news/${newsItem.image}`}
          alt={newsItem.title}
        />
      </section>
    );
  }
}
