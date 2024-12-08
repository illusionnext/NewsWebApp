import Link from "next/link";
import Image from "next/image";
import { newsTypes } from "@/types/types";

export default function NewsList({ news }: { news: newsTypes[] }) {
  return (
    <>
      <ul className="news-list">
        {news.map((news) => (
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
