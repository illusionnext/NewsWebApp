"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function NavLinks({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const path = usePathname();
  console.dir("path", path);

  return (
    <>
      <Link
        href={href}
        className={path.startsWith(href) ? "active" : undefined}
      >
        {children}
      </Link>
    </>
  );
}
