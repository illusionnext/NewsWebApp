import { Suspense } from "react";
import Link from "next/link";
import {
  getAvailableNewsYears,
  getNewsForYear,
  getAvailableNewsMonths,
  getNewsForYearAndMonth,
} from "@/lib/news";
import NewsList from "@/components/SSG/news-list/news-list";
import { newsTypes } from "@/types/types";

async function FilteredNews({
  selectedYear,
  selectedMonth,
}: {
  selectedYear: number | null;
  selectedMonth: number | null;
}) {
  // Fetch news and links
  let news: newsTypes[] | null = null;

  if (selectedYear && !selectedMonth) {
    news = await getNewsForYear(selectedYear);
  } else if (selectedYear && selectedMonth) {
    news = await getNewsForYearAndMonth(selectedYear, selectedMonth);
  }

  // Render news content
  return news && news.length > 0 ? (
    <NewsList news={news} />
  ) : (
    <p>No News found for the selected period</p>
  );
}

async function FilterHeader({
  selectedYear,
  selectedMonth,
}: {
  selectedYear: number | null;
  selectedMonth: number | null;
}) {
  // Validate year and month against available data
  const availableYears = await getAvailableNewsYears();
  if (selectedYear !== null && !availableYears.includes(selectedYear)) {
    throw new Error("Invalid year: Not found in available years");
  }

  if (
    selectedYear !== null &&
    selectedMonth !== null &&
    !getAvailableNewsMonths(selectedYear).includes(selectedMonth)
  ) {
    throw new Error("Invalid month: Not found in available months");
  }

  // Fetch links
  let links: number[] = [];
  if (selectedYear === null) {
    links = availableYears;
  } else if (selectedMonth === null) {
    links = getAvailableNewsMonths(selectedYear);
  }

  return (
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
  );
}

export default async function FilteredNewsPage({
  params,
}: {
  params: Promise<{ filter?: string[] }>;
}) {
  const { filter } = await params,
    filterLength = filter?.length || 0;
  console.dir("filter?:string[] 👇");
  console.dir(filter);

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

  return (
    <>
      <Suspense
        fallback={
          <p style={{ textAlign: "left" }}>Dates Are Being Loaded...</p>
        }
      >
        <FilterHeader
          selectedYear={selectedYear}
          selectedMonth={selectedMonth}
        />
      </Suspense>

      <Suspense fallback={<p>Archive Files By Years Are Being Loaded...</p>}>
        <section id="archive-content">
          <FilteredNews
            selectedYear={selectedYear}
            selectedMonth={selectedMonth}
          />
        </section>
      </Suspense>
    </>
  );
}
