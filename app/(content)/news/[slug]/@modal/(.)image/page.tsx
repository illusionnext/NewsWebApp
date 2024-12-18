import { getNewsItem } from "@/lib/news";
import { notFound } from "next/navigation";
import InterceptedImagePageClient from "@/components/CSR/intercepted-image-page/Intercepted-image-page";
import { use } from "react";
import classes from "./page.module.css";
import Image from "next/image";

export default function InterceptedImagePage({
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
      <>
        <InterceptedImagePageClient />
        <dialog className={classes.modal} open>
          <section className={classes["fullscreen-image"]}>
            <Image
              width={800}
              height={600}
              src={`/images/news/${newsItem.image}`}
              alt={newsItem.title}
            />
          </section>
        </dialog>
      </>
    );
  }
}
