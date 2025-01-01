"use cache";
import Logo from "@/assets/logo.jpg";
import Link from "next/link";
import Image from "next/image";
import classes from "./page.module.css";

export default async function Home() {
  return (
    <div id={classes.home}>
      <Image width={200} height={200} src={Logo} alt="A newspaper" priority />
      <h1>
        A News Site For The{" "}
        <strong
          style={{
            background: "linear-gradient(to right, gold, gold)", // Makes gold color
            WebkitBackgroundClip: "text", // Clips background to text
            WebkitTextFillColor: "transparent", // Ensures text is transparent
            textShadow: "0 0 10px #fff", // White glow around the text
          }}
        >
          Next Generations!
        </strong>
      </h1>
      <p>
        Next News is here to deliver you all the latest news - concise &
        unbiased!
      </p>

      <p>
        NextNews aims to provide you with the latest news in a concise and
        unbiased manner. We strive to deliver the news in a way that is easy to
        understand and to the point. We want to keep you informed without
        overwhelming you with unnecessary information.
      </p>

      <p>
        We employ a team of dedicated journalists who are committed to
        delivering the news in a fair and unbiased manner. Our team is
        passionate about keeping you informed and up to date with the latest
        news.
      </p>

      <p>
        <Link href="/news">Read the latest news</Link>
      </p>
    </div>
  );
}
