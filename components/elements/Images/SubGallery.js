// components/elements/Images/SubGallery.js
"use client";
import { useState } from "react";
import ImageModal from "./ImageModal";
import ImageContainer from "./ImageContainer";

const SubGallery = ({ images, category }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (src, index) => {
    setSelectedImage({ id: index, src });
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="mt-15 flex flex-wrap justify-center">
      {images.map((src, index) => (
        <button key={index} onClick={() => handleClick(src, index)}>
          <ImageContainer src={src} alt={`Image ${index + 1}`} />
        </button>
      ))}

      {selectedImage && (
        <ImageModal image={selectedImage} closeModal={closeModal} />
      )}
    </div>
  );
};

export default SubGallery;
