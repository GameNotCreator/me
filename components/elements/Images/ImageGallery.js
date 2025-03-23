// components/elements/Images/ImageGallery.js
'use client'
import { Suspense } from "react";
import SubGallery from "./SubGallery";
import Title from "../Title";
const ImageGallery = ({ galleries }) => {
  return (
    <div className="mt-20 justify-center">
      {Object.keys(galleries).map((category, index) => (
        <div key={index} className="flex flex-col mt-2">
          <Title attribute="text-center align-center justify-center pt-10" id="life" >{category}</Title>
          <Suspense fallback={<div>Chargement...</div>}>
            <SubGallery images={galleries[category]} category={category} />
          </Suspense>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
