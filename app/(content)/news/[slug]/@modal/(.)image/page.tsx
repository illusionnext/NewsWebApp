"use client";
import { dummyNews } from "@/components/SSG/dummy-data/dummyNews";
import { newsTypes } from "@/types/types";
import Image from "next/image";
import { notFound, useRouter } from "next/navigation";
import classes from "./page.module.css";
import { use } from "react";

export default function InterceptedImagePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  console.dir("Intercepted Image Page");
  const router = useRouter();

  // Use the `use` API to resolve the params promise
  const { slug } = use(params); // I used 'use' hook to resolve the promise without added await and async. It is a new feature in React 19.

  const newsItem: newsTypes | undefined = dummyNews.find(
    (item) => item.slug === slug,
  );

  if (!newsItem) {
    notFound();
  } else {
    return (
      <>
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
      </>
    );
  }
}

//When you call use(params), React reads the resolved value of the params promise.
// If the promise is still pending, React suspends the rendering of the component and shows a Suspense fallback (if defined in a parent component).
// Once the promise is resolved, React automatically resumes rendering the component with the resolved data.
// If the promise is rejected, the nearest error boundary will handle the error.
