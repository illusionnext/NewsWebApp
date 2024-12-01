export default function NewsSlug({
  params: { slug },
}: {
  params: { slug: string };
}) {
  return (
    <section id="news-slug">
      <h1>News {slug}</h1>
    </section>
  );
}
