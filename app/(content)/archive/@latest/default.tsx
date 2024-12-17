import { getLatestNews } from "@/lib/news";
import NewsList from "@/components/SSG/news-list/news-list";
import { use } from "react";

export default function LatestNewsPage() {
  const latestNews = use(getLatestNews());

  return (
    <>
      <h1>Latest News Page</h1>
      <NewsList news={latestNews} />
    </>
  );
}
