const ImageModal = ({ image, closeModal }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80" onClick={closeModal}>
      <div className="max-w-3xl max-h-3xl overflow-hidden">
        <img src={image.src} alt={`Image ${image.id}`} className="w-full h-auto" />
        <button className="absolute bg-black text-center text-white text-md  bottom-5  opacity-70 w-full left-1 " onClick={closeModal}> 
          CLOSE PREVIEW
        </button> 
      </div>
    </div>
  );
};

export default ImageModal;
