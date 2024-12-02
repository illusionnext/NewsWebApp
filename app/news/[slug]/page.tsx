import { newsPictures } from "@/components/SSG/pictures/pictures";
import { pictureTypes } from "@/app/types/types";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function NewsSlug({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  console.log({ slug });

  // Find the picture that matches the slug
  const newsPicture: pictureTypes | undefined = newsPictures.find(
    (picture) => picture.name === slug,
  );

  if (!newsPicture) {
    notFound();
  } else {
    return (
      <section>
        <h1>{newsPicture.name}</h1>
        <Image
          width={400}
          height={300}
          src={newsPicture.src}
          alt={newsPicture.alt}
          priority
        />
      </section>
    );
  }
}
