import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/logo.jpg";

export default function MainHeader() {
  return (
    <header id="main-header">
      <section id="logo">
        <Link href="/">
          {" "}
          <Image width={40} height={40} src={Logo} alt="Logo" />
        </Link>
      </section>
      <nav>
        <ul>
          <li>
            <Link href="/news">News</Link>
          </li>
          <li>
            <Link href="/archive">Archive</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
