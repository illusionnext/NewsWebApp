import {
  getAvailableNewsYears,
  getNewsForYear,
  getAvailableNewsMonths,
  getNewsForYearAndMonth,
} from "@/lib/newsDate";
import NewsList from "@/components/SSG/news-list/news-list";
import Link from "next/link";

export default async function FilteredNewsPage({
  params,
}: {
  params: Promise<{ filter?: string | string[] }>;
}) {
  // filter => /archive , /archive/2024 , /archive/2024/november
  // [[...filter]] can catch all the segments after comes /archive. So no need to declare extra page.tsx after @archive 😉

  const { filter } = await params;
  console.warn("filter[] 👇");
  console.dir(filter);

  const selectedYear = Number(filter?.[0]),
    selectedMonth = Number(filter?.[1]);

  let news,
    links = getAvailableNewsYears();

  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(selectedYear);
  }

  if (selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(selectedYear, selectedMonth);
    links = [];
  }

  let newsContent = <p>No News found for the selected period</p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => {
              const href = selectedYear
                ? `/archive/${selectedYear}/${link}`
                : `/archive/${link}`;
              return (
                <li key={link}>
                  <Link href={href}>{link}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      <section id="archive-content">{newsContent}</section>
    </>
  );
}
