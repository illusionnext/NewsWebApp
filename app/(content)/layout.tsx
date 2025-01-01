import MainHeader from "@/components/SSG/main-header/main-header";
import React from "react";

export const metadata = {
  title: "Next.js Page Routing & Rendering",
  description: "Learn how to route to different pages.",
};

export const experimental_ppr = true;

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div id="page">
      <MainHeader />
      {children}
    </div>
  );
}
