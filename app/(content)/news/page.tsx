import NewsList from "@/components/SSG/news-list/news-list";
import { getAllNews } from "@/lib/news";
import { newsTypes } from "@/types/types";
import { use } from "react";

export default function NewsPage() {
  const news: newsTypes[] = use(getAllNews());

  return (
    <>
      <h1>News Page</h1>
      {news.length > 0 ? <NewsList news={news} /> : <p>No news available.</p>}
    </>
  );
}
