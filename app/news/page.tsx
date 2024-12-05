import Link from "next/link";
import { dummyNews } from "@/components/SSG/dummy-data/dummyNews";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <h1>News Page</h1>
      <ul className="news-list">
        {dummyNews.map((news) => (
          <li key={news.id}>
            <Link href={`/news/${news.slug}`}>
              <Image
                width={300}
                height={200}
                src={`/images/news/${news.image}`}
                alt={news.content}
              />
            </Link>
            <span>{news.title}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
