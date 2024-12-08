import { getNewsForYear } from "@/lib/newsDate";
import NewsList from "@/components/SSG/news-list/news-list";

export default async function PageByYears({
  params,
}: {
  params: Promise<{ years: string }>;
}) {
  const { years } = await params,
    news = getNewsForYear(Number(years));

  return <NewsList news={news} />;
}
