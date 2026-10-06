"use client";
import { useSectionInView } from "@/libs/hooks";
import ImageGallery from "@/components/elements/Images/ImageGallery";

export default function Life({ galleries }) {
  const { ref } = useSectionInView("life", 0.1);
  return (
    <section id="life" ref={ref} className="life-section portfolio-section">
      <h2 className="section-title">Get to know more about my life</h2>
      <ImageGallery galleries={galleries} />
    </section>
  );
}
