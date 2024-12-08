import { dummyNews } from "@/components/SSG/dummy-data/dummyNews";

export function getAllNews() {
  return dummyNews;
}

export function getLatestNews() {
  return dummyNews.slice(0, 3);
}

export function getAvailableNewsYears() {
  return dummyNews
    .reduce((years: number[], news) => {
      const year = new Date(news.date).getFullYear();
      if (!years.includes(year)) {
        years.push(year);
      }
      return years;
    }, [])
    .sort((a, b) => b - a);
}

export function getAvailableNewsMonths(year: number) {
  return dummyNews
    .reduce((months: number[], news) => {
      const newsYear = new Date(news.date).getFullYear();
      if (newsYear === +year) {
        const month = new Date(news.date).getMonth();
        if (!months.includes(month + 1)) {
          months.push(month + 1);
        }
      }
      return months;
    }, [])
    .sort((a, b) => b - a);
}

export function getNewsForYear(year: number) {
  return dummyNews.filter(
    (news) => new Date(news.date).getFullYear() === +year,
  );
}

export function getNewsForYearAndMonth(year: number, month: number) {
  return dummyNews.filter((news) => {
    const newsYear = new Date(news.date).getFullYear();
    const newsMonth = new Date(news.date).getMonth() + 1;
    return newsYear === +year && newsMonth === +month;
  });
}
