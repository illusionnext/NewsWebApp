import Link from "next/link";

export default function News() {
  return (
    <ul>
      <li>
        <Link href="/news/aiRobot">AI Robot</Link>
      </li>
      <li>
        <Link href="/news/beaver">Beaver</Link>
      </li>
      <li>
        <Link href="/news/coupleCooking">Couple Cooking</Link>
      </li>
      <li>
        <Link href="/news/hiking">Hiking</Link>
      </li>
      <li>
        <Link href="/news/landscape">Landscape</Link>
      </li>
    </ul>
  );
}
