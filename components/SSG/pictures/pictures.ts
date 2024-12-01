import aiRobot from "@/public/images/news/ai-robot.jpg";
import beaver from "@/public/images/news/beaver.jpg";
import coupleCooking from "@/public/images/news/couple-cooking.jpg";
import hiking from "@/public/images/news/hiking.jpg";
import landscape from "@/public/images/news/landscape.jpg";
import { pictureTypes } from "@/app/types/types";

export const newsPictures: pictureTypes[] = [
  { name: "aiRobot", src: aiRobot, alt: "AI Robot" },
  { name: "beaver", src: beaver, alt: "Beaver" },
  { name: "coupleCooking", src: coupleCooking, alt: "Couple Cooking" },
  { name: "hiking", src: hiking, alt: "Hiking" },
  { name: "landscape", src: landscape, alt: "Landscape" },
];
