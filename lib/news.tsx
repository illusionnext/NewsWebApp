import sql from "better-sqlite3";
import { newsTypes } from "@/types/types";
const db = sql("data.db");

export function getAllNews(): newsTypes[] {
  // Query all news from the database
  return db.prepare("SELECT * FROM news").all() as newsTypes[];
}

export function getLatestNews(): newsTypes[] {
  // Query the 3 latest news items, ordered by date descending
  return db
    .prepare("SELECT * FROM news ORDER BY date DESC LIMIT 3")
    .all() as newsTypes[];
}

export function getAvailableNewsYears(): number[] {
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

export function getNewsForYear(year: number): newsTypes[] {
  // Get all news for a specific year
  return db
    .prepare("SELECT * FROM news WHERE strftime('%Y', date) = ?")
    .all(year.toString()) as newsTypes[];
}

export function getNewsForYearAndMonth(
  year: number,
  month: number,
): newsTypes[] {
  // Get all news for a specific year and month
  const monthStr = month.toString().padStart(2, "0"); // Ensure month is 2 digits
  return db
    .prepare(
      "SELECT * FROM news WHERE strftime('%Y', date) = ? AND strftime('%m', date) = ?",
    )
    .all(year.toString(), monthStr) as newsTypes[];
}
