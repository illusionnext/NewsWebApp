import { StaticImageData } from "next/image";

export interface pictureTypes {
  name: string;
  src: StaticImageData;
  alt: string;
}

export interface newsTypes {
  id: number;
  slug: string;
  title: string;
  image: string;
  date: string;
  content: string;
}
