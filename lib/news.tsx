import sql from "better-sqlite3";
import { newsTypes } from "@/types/types";
const db = sql("data.db");

export async function getAllNews(): Promise<newsTypes[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // Query all news from the database
  return db.prepare("SELECT * FROM news").all() as newsTypes[];
}

export async function getNewsItem(slug: string): Promise<newsTypes> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // Query a single news item by its slug
  return db.prepare("SELECT * FROM news WHERE slug = ?").get(slug) as newsTypes;
}

export async function getLatestNews(): Promise<newsTypes[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // Query the 3 latest news items, ordered by date descending
  return db
    .prepare("SELECT * FROM news ORDER BY date DESC LIMIT 3")
    .all() as newsTypes[];
}

export async function getAvailableNewsYears(): Promise<number[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // Get distinct years from the date field
  const rows = db
    .prepare("SELECT DISTINCT strftime('%Y', date) as year FROM news")
    .all() as { year: string }[];

  // Convert year strings to numbers and sort descending
  return rows.map((row) => parseInt(row.year, 10)).sort((a, b) => b - a);
}

export function getAvailableNewsMonths(year: number) {
  // Get distinct months for a given year
  const rows = db
    .prepare(
      "SELECT DISTINCT strftime('%m', date) as month FROM news WHERE strftime('%Y', date) = ?",
    )
    .all(year.toString()) as { month: string }[];

  // Convert month strings to numbers and sort descending
  return rows.map((row) => parseInt(row.month, 10)).sort((a, b) => b - a);
}

export async function getNewsForYear(year: number): Promise<newsTypes[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // Get all news for a specific year
  return db
    .prepare(
      "SELECT * FROM news WHERE strftime('%Y', date) = ? ORDER BY date DESC",
    )
    .all(year.toString()) as newsTypes[];
}

export async function getNewsForYearAndMonth(
  year: number,
  month: number,
): Promise<newsTypes[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // Get all news for a specific year and month
  const monthStr = month.toString().padStart(2, "0"); // Ensure month is 2 digits
  return db
    .prepare(
      "SELECT * FROM news WHERE strftime('%Y', date) = ? AND strftime('%m', date) = ? ORDER BY date DESC",
    )
    .all(year.toString(), monthStr) as newsTypes[];
}
