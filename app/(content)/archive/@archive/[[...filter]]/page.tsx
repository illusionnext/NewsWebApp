import {
  getAvailableNewsYears,
  getNewsForYear,
  getAvailableNewsMonths,
  getNewsForYearAndMonth,
} from "@/lib/news";
import NewsList from "@/components/SSG/news-list/news-list";
import Link from "next/link";
import { newsTypes } from "@/types/types";
import { Suspense, use } from "react";

export default function FilteredNewsPage({
  params,
}: {
  params: Promise<{ filter?: string[] }>;
}) {
  const { filter } = use(params);
  console.dir("filter?:string[] 👇");
  console.dir(filter);

  const filterLength = filter?.length || 0;

  // Validate the filter structure
  if (filterLength > 2) {
    throw new Error("Invalid filter: Too many segments");
  }

  // Parse and validate year and month strictly as numbers
  const selectedYear: number | null =
    filter?.[0] && /^\d+$/.test(filter[0]) ? Number(filter[0]) : null;
  const selectedMonth: number | null =
    filter?.[1] && /^\d+$/.test(filter[1]) ? Number(filter[1]) : null;

  if (filter?.[0] && selectedYear === null) {
    throw new Error("Invalid year: Must be a positive integer");
  }

  if (
    filter?.[1] &&
    (selectedMonth === null || selectedMonth < 1 || selectedMonth > 12)
  ) {
    throw new Error(
      "Invalid month: Must be a positive integer between 1 and 12",
    );
  }

  // Validate year and month against available data
  const availableYears = use(getAvailableNewsYears());
  if (selectedYear !== null && !availableYears.includes(selectedYear)) {
    throw new Error("Invalid year: Not found in available years");
  }

  if (
    selectedYear !== null &&
    selectedMonth !== null &&
    !use(getAvailableNewsMonths(selectedYear)).includes(selectedMonth)
  ) {
    throw new Error("Invalid month: Not found in available months");
  }

  // Fetch news and links
  let news: newsTypes[] | null = null;
  let links: number[] = [];
  if (selectedYear === null) {
    links = availableYears;
  } else if (selectedMonth === null) {
    news = use(getNewsForYear(selectedYear));
    links = use(getAvailableNewsMonths(selectedYear));
  } else {
    news = use(getNewsForYearAndMonth(selectedYear, selectedMonth));
  }

  // Render news content
  const newsContent =
    news && news.length > 0 ? (
      <NewsList news={news} />
    ) : (
      <p>No News found for the selected period</p>
    );

  return (
    <Suspense
      fallback={
        <p style={{ textAlign: "center", marginTop: "2rem" }}>
          Archive Files By Years Are Being Loaded...
        </p>
      }
    >
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
    </Suspense>
  );
}
