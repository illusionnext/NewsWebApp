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

  let newsYear;
  if (selectedYear && !selectedMonth) {
    newsYear = getNewsForYear(selectedYear);
  }

  let newsContentYear = <p>No News found for the selected period</p>;

  if (newsYear && newsYear.length > 0) {
    newsContentYear = <NewsList news={newsYear} />;
  }

  const links = getAvailableNewsYears();

  let newsMonth;
  if (selectedYear && selectedMonth) {
    newsMonth = getNewsForYearAndMonth(selectedYear, selectedMonth);
  }

  let newsMonthContent = <p>No News found for the selected period</p>;

  if (newsMonth && newsMonth.length > 0) {
    newsMonthContent = <NewsList news={newsMonth} />;
  }

  const months = getAvailableNewsMonths(selectedYear);

  // const news = getNewsForYear(newsYear);
  // return <NewsList news={news} />;

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((year) => (
              <li key={year}>
                <Link href={`/archive/${year}`}>{year}</Link>
              </li>
            ))}
            {months.map((month) => (
              <li key={month}>
                <Link href={`/archive/${month}`}>{month}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <section id="archive-content">{newsContentYear}</section>
      <section id="archive-content">{newsMonthContent}</section>
    </>
  );
}
