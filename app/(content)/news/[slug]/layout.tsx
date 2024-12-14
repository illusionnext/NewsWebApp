import React from "react";

export default function NewsDetailLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <>
      {modal}
      {children}
    </>
  );
}

//instead of using an extra @default  or @details parallel route we added as a children here
