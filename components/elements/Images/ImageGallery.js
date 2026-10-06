"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function ImageGallery({ galleries, className = "", showCategoryTitles = true }) {
  const [selected, setSelected] = useState(null);
  const dialogRef = useRef(null);
  useEffect(() => {
    const dialog = dialogRef.current;
    if (selected && !dialog.open) dialog.showModal();
    if (!selected && dialog.open) dialog.close();
  }, [selected]);
  useEffect(() => {
    if (!selected) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selected]);
  return (
    <div className={`life-gallery ${className}`}>
      {Object.entries(galleries).map(([category, photos]) => <div key={category}>
        {showCategoryTitles && <h3>{category}</h3>}
        <div className="photo-grid">
          {photos.map((photo, index) => {
            const { src, caption, fit } = typeof photo === "string" ? { src: photo } : photo;
            const alt = caption || `${category}, photo ${index + 1}`;
            return <figure key={src} className="photo-item">
              <button className="photo-button" type="button" aria-label={`Open photo: ${alt}`} onClick={() => setSelected({ src, alt, caption })}>
                <Image src={src} alt={alt} width={600} height={600} sizes={className.includes("work-gallery") ? "(max-width: 700px) 50vw, 25vw" : "(max-width: 700px) 33vw, 20vw"} style={fit ? { objectFit: fit } : undefined} />
              </button>
              {caption && <figcaption>{caption}</figcaption>}
            </figure>;
          })}
        </div>
      </div>)}
      <dialog ref={dialogRef} className="photo-modal" aria-label={selected?.alt || "Photo preview"} onClose={() => setSelected(null)} onClick={(event) => {
        if (event.target !== event.currentTarget) return;
        const bounds = event.currentTarget.getBoundingClientRect();
        if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) setSelected(null);
      }}>
        {selected && <img src={selected.src} alt={selected.alt} />}
        {selected?.caption && <p className="photo-caption">{selected.caption}</p>}
        <button type="button" className="button button-primary" autoFocus onClick={() => setSelected(null)}>Close photo</button>
      </dialog>
    </div>
  );
}
