import Link from "next/link";

export default function News() {
  return (
    <ul>
      <li>
        <Link href="/news/first-data">First Dummy Data</Link>
      </li>
      <li>
        <Link href="/news/second-data">Second Dummy Data</Link>
      </li>
      <li>
        <Link href="/news/third-data">Third Dummy Data</Link>
      </li>
    </ul>
  );
}
