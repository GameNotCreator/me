"use client";
import { useSectionInView } from "@/libs/hooks";
import ImageGallery from "@/components/elements/Images/ImageGallery";

export default function Life({ galleries }) {
  const { ref } = useSectionInView("life", 0.1);
  return (
    <section id="life" ref={ref} className="life-section section-space page-width">
      <p className="eyebrow">Away from the keyboard</p>
      <h2 className="section-title">A few pieces <em>of my life.</em></h2>
      <p className="section-description">Chess, community projects, and moments along the way.</p>
      <ImageGallery galleries={galleries} />
    </section>
  );
}
