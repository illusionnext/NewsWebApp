"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/logo.jpg";
import { usePathname } from "next/navigation";

export default function HeaderLinks() {
  const path = usePathname();
  console.dir("path", path);

  return (
    <>
      <section id="logo">
        <Link href="/">
          {" "}
          <Image width={40} height={40} src={Logo} alt="Logo" />
        </Link>
      </section>
      <nav>
        <ul>
          <li>
            <Link
              href="/news"
              className={path.startsWith("/news") ? "active" : undefined}
            >
              News
            </Link>
          </li>
          <li>
            <Link
              href="/archive"
              className={path.startsWith("/archive") ? "active" : undefined}
            >
              Archive
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
