import NavLinks from "@/components/CSR/nav-links/nav-links";
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
            <NavLinks href="/news">News</NavLinks>
          </li>
          <li>
            <NavLinks href="/archive">Archive</NavLinks>
          </li>
        </ul>
      </nav>
    </header>
  );
}
