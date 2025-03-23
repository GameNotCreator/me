'use client'
import { useState, useEffect } from 'react';

const ImageContainer = ({ src, alt }) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      const aspectRatio = img.width / img.height;
      const size = Math.min(img.width, img.height);
      setDimensions({
        width: aspectRatio > 1 ? size : size * aspectRatio,
        height: aspectRatio > 1 ? size / aspectRatio : size,
      });
    };
    img.src = src;
  }, [src]);

  return (
    <>
    <div className="sm:flex hidden w-56 h-56 m-2 overflow-hidden">
      <img src={src} alt={alt} className="object-cover w-full h-full" />
    </div>
    <div className="sm:hidden  w-32 h-32 m-2 overflow-hidden">
      <img src={src} alt={alt} className="object-cover w-full h-full" />
    </div>
    </>

    
  );
};

export default ImageContainer;
