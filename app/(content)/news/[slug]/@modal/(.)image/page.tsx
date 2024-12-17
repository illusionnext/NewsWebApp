import { getNewsItem } from "@/lib/news";
import { notFound } from "next/navigation";
import InterceptedImagePageClient from "@/components/CSR/intercepted-image-page/Intercepted-image-page";
import { use } from "react";

export default function InterceptedImagePage({
  params,
}: {
  params: { slug: string };
}) {
  const newsItem = use(getNewsItem(params.slug));
  if (!newsItem) {
    notFound();
  }

  return <InterceptedImagePageClient newsItem={newsItem} />;
}
