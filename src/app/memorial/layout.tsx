import React from "react";

export default function MemorialLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <h2>Memorial Layout</h2>
    </>
  );
}
