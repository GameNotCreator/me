"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import * as m from "framer-motion/m";
import { useReducedMotion } from "framer-motion";

export default function ImageGallery({ galleries, className = "", showCategoryTitles = true }) {
  const [selected, setSelected] = useState(null);
  const dialogRef = useRef(null);
  const openerRef = useRef(null);
  const reduceMotion = useReducedMotion();
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
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
            const { src, alt: description, caption, fit } = typeof photo === "string" ? { src: photo } : photo;
            const alt = description || caption || `${category}, photo ${index + 1}`;
            return <figure key={src} className="photo-item">
              <m.button
                className="photo-button"
                type="button"
                aria-label={`Open photo: ${alt}`}
                whileHover={reduceMotion ? undefined : { scale: 1.025 }}
                whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                transition={{ duration: 0.12, ease: "easeOut" }}
                onClick={(event) => {
                  openerRef.current = event.currentTarget;
                  const thumbnail = event.currentTarget.querySelector("img");
                  const aspectRatio = thumbnail?.naturalWidth && thumbnail?.naturalHeight
                    ? thumbnail.naturalWidth / thumbnail.naturalHeight
                    : 1;
                  setSelected({ src, alt, caption, aspectRatio });
                }}
              >
                <Image src={src} alt={alt} width={600} height={600} sizes="(min-width: 640px) 224px, 128px" style={fit ? { objectFit: fit } : undefined} />
              </m.button>
            </figure>;
          })}
        </div>
      </div>)}
      <dialog ref={dialogRef} className="photo-modal" aria-label={selected?.alt || "Photo preview"} onClose={() => {
        setSelected(null);
        openerRef.current?.focus({ preventScroll: true });
      }} onClick={(event) => {
        if (event.target !== event.currentTarget) return;
        const bounds = event.currentTarget.getBoundingClientRect();
        if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) setSelected(null);
      }}>
        {selected && <m.div
          key={selected.src}
          initial={{ opacity: reduceMotion ? 0.6 : 0, scale: reduceMotion ? 1 : 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: reduceMotion ? 0.1 : 0.22, ease: [0.16, 1, 0.3, 1] }}
        >
          <div style={{ position: "relative", width: `min(100%, ${selected.previewWidth || 860}px, calc(65svh * ${selected.aspectRatio}))`, aspectRatio: selected.aspectRatio, marginInline: "auto" }}>
            <Image
              src={selected.src}
              alt={selected.alt}
              fill
              sizes="(min-width: 932px) 860px, calc(100vw - 72px)"
              loading="eager"
              style={{ objectFit: "contain" }}
              onLoad={(event) => {
                const { naturalWidth, naturalHeight } = event.currentTarget;
                if (!naturalWidth || !naturalHeight) return;
                setSelected((current) => current?.src === selected.src ? {
                  ...current,
                  aspectRatio: naturalWidth / naturalHeight,
                  previewWidth: naturalWidth,
                } : current);
              }}
            />
          </div>
          {selected.caption && <p className="photo-caption">{selected.caption}</p>}
          <button type="button" className="button button-primary" autoFocus onClick={() => setSelected(null)}>CLOSE PREVIEW</button>
        </m.div>}
      </dialog>
    </div>
  );
}
