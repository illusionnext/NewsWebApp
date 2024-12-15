// import { use } from "react";
import NewsList from "@/components/SSG/news-list/news-list";
import { getAllNews } from "@/lib/news";
import { newsTypes } from "@/types/types";

export default function NewsPage() {
  // const response = use(fetch("http://localhost:8080/news"));
  // if (!response.ok) {
  //   throw new Error("Failed to fetch news.");
  // }
  // const news = use(response.json());

  const news: newsTypes[] = getAllNews();

  return (
    <>
      <h1>News Page</h1>
      {news.length > 0 ? <NewsList news={news} /> : <p>No news available.</p>}
    </>
  );
}
