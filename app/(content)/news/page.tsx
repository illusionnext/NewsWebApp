"use client";

import { useState, useEffect } from "react";
import NewsList from "@/components/SSG/news-list/news-list";

export default function NewsPage() {
  const [state, setState] = useState({
    loading: false,
    error: "",
    news: [],
  });

  useEffect(() => {
    const fetchNews = async () => {
      setState((prev) => ({ ...prev, loading: true }));

      try {
        const response = await fetch("http://localhost:8080/news");
        if (!response.ok) {
          throw new Error("Failed to fetch news!");
        }

        const news = await response.json();
        setState({ loading: false, error: "", news });
      } catch (error) {
        setState({ loading: false, error: error.message, news: [] });
      }
    };

    fetchNews();
  }, []);

  const { loading, error, news } = state;

  if (loading) {
    return <p>News is Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <h1>News Page</h1>
      {news.length > 0 ? <NewsList news={news} /> : <p>No news available.</p>}
    </>
  );
}
