"use client";
import { useLocale } from "@/libs/LocaleProvider";
import { useSectionInView } from "@/libs/hooks";
import ImageGallery from "@/components/elements/Images/ImageGallery";

const activities = [
  {
    title: "Charity",
    description: "A few moments from community activities and volunteering.",
    featured: ["6.png", "7.jpg", "9.jpg", "13.jpg"],
  },
  {
    title: "Chess",
    description: "A few memories from my chess journey, including the chance to play against Anatoly Karpov.",
    featured: ["2.jpg", "10.jpg", "1.jpg", "4.jpg"],
  },
];

export default function Life({ galleries }) {
  const { locale, t } = useLocale();
  const { ref } = useSectionInView("life", 0.1);
  return (
    <section id="life" ref={ref} className="life-section portfolio-section">
      <h2 className="section-title">{t("Beyond the projects")}</h2>
      <div className="activity-list">
        {activities.map(({ title, description, featured }) => {
          const photos = galleries[title] || [];
          const isFeatured = (photo) => featured.includes(photo.src.split("/").pop());
          const selection = featured.flatMap((filename) => photos.filter((photo) => photo.src.endsWith(`/${filename}`)));
          const archive = photos.filter((photo) => !isFeatured(photo));
          return <article className="activity-card" key={title}>
            <h3>{t(title)}</h3>
            <p className="activity-description">{t(description)}</p>
            <ImageGallery galleries={{ [title]: selection }} showCategoryTitles={false} showCaptions className="activity-gallery" />
            {archive.length > 0 && <details className="activity-archive">
              <summary>{t(`More from my ${title.toLowerCase()} archive`)} <span>{archive.length} {t("photos")}</span></summary>
              <ImageGallery galleries={{ [title]: archive }} showCategoryTitles={false} showCaptions className="activity-gallery" />
            </details>}
          </article>;
        })}
      </div>
    </section>
  );
}
