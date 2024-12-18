"use client";
import { useRouter } from "next/navigation";
import classes from "./intercepted-image-page.module.css";

export default function InterceptedImagePageClient() {
  const router = useRouter();

  return (
    <section className={classes["modal-backdrop"]} onClick={router.back} />
  );
}
