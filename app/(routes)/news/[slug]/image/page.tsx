import { dummyNews } from "@/components/SSG/dummy-data/dummyNews";
import { newsTypes } from "@/types/types";
import Image from "next/image";
import { notFound } from "next/navigation";
import classes from "./page.module.css";

export default async function ImagePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  console.dir(slug);

  const newsItem: newsTypes | undefined = dummyNews.find(
    (item) => item.slug === slug,
  );

  if (!newsItem) {
    notFound();
  } else {
    return (
      <section className={classes["fullscreen-image"]}>
        <Image
          width={900}
          height={700}
          src={`/images/news/${newsItem.image}`}
          alt={newsItem.title}
        />
      </section>
    );
  }
}
