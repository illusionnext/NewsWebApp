import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/logo.jpg";

export default function MainHeader() {
  return (
    <header>
      <Link href="/">
        {" "}
        <Image width={50} height={50} src={Logo} alt="Logo" />
      </Link>
      <nav>
        <Link href="/news">News</Link>
      </nav>
    </header>
  );
}
