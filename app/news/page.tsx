import { dummyNews } from "@/components/SSG/dummy-data/dummyNews";
import NewsList from "@/components/SSG/news-list/news-list";

export default function NewsPage() {
  return (
    <>
      <h1>News Page</h1>
      <NewsList news={dummyNews} />
    </>
  );
}
