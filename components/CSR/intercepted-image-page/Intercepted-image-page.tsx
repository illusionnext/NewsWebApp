"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import classes from "./intercepted-image-page.module.css";

export default function InterceptedImagePageClient({
  newsItem,
}: {
  newsItem: { title: string; image: string };
}) {
  const router = useRouter();

  return (
    <section className={classes["modal-backdrop"]} onClick={router.back}>
      <dialog className={classes.modal} open>
        <section className={classes["fullscreen-image"]}>
          <Image
            width={900}
            height={700}
            src={`/images/news/${newsItem.image}`}
            alt={newsItem.title}
          />
        </section>
      </dialog>
    </section>
  );
}
