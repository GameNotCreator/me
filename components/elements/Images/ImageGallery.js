"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

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
            const { src, caption, fit } = typeof photo === "string" ? { src: photo } : photo;
            const alt = caption || `${category}, photo ${index + 1}`;
            return <figure key={src} className="photo-item">
              <motion.button
                className="photo-button"
                type="button"
                aria-label={`Open photo: ${alt}`}
                whileHover={reduceMotion ? undefined : { scale: 1.025 }}
                whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                transition={{ duration: 0.12, ease: "easeOut" }}
                onClick={(event) => {
                  openerRef.current = event.currentTarget;
                  setSelected({ src, alt, caption });
                }}
              >
                <Image src={src} alt={alt} width={600} height={600} sizes="(min-width: 640px) 224px, 128px" style={fit ? { objectFit: fit } : undefined} />
              </motion.button>
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
        {selected && <motion.div
          key={selected.src}
          initial={{ opacity: reduceMotion ? 0.6 : 0, scale: reduceMotion ? 1 : 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: reduceMotion ? 0.1 : 0.22, ease: [0.16, 1, 0.3, 1] }}
        >
          <img src={selected.src} alt={selected.alt} />
          {selected.caption && <p className="photo-caption">{selected.caption}</p>}
          <button type="button" className="button button-primary" autoFocus onClick={() => setSelected(null)}>CLOSE PREVIEW</button>
        </motion.div>}
      </dialog>
    </div>
  );
}
