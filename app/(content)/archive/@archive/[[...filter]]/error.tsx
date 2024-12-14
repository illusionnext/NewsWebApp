"use client";

export default function FilterErrorPage({ error }: { error: Error }) {
  return (
    <section id="error">
      <h1>An Error occurred </h1>
      <p>{error.message}</p>
    </section>
  );
}
