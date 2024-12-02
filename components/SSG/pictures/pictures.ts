import aiRobot from "@/public/images/news/aiRobot.jpg";
import beaverPlague from "@/public/images/news/beaverPlague.jpg";
import coupleCooking from "@/public/images/news/coupleCooking.jpg";
import hiking from "@/public/images/news/hiking.jpg";
import landscape from "@/public/images/news/landscape.jpg";
import { pictureTypes } from "@/app/types/types";

export const newsPictures: pictureTypes[] = [
  { name: "aiRobot", src: aiRobot, alt: "AI Robot" },
  { name: "beaverPlague", src: beaverPlague, alt: "Beaver Plague" },
  { name: "coupleCooking", src: coupleCooking, alt: "Couple Cooking" },
  { name: "hiking", src: hiking, alt: "Hiking" },
  { name: "landscape", src: landscape, alt: "Landscape" },
];
