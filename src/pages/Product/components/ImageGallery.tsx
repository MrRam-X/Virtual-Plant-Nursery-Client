import React, { useState } from "react";

export type ImageGalleryProps = {
  imageUrl: string[];
  name: string;
};

const ImageGallery: React.FC<ImageGalleryProps> = ({ imageUrl, name }) => {
  const [selectedImageUrl, setSelectedImageUrl] = useState(imageUrl[0]);
  return (
    <div id="image-gallery">
      <div className="main-image bg-white aspect-square rounded-lg shadow-sm border border-gray-200 mb-4">
        <img
          id="main-product-image"
          src={selectedImageUrl}
          alt={`An image of ${name}`}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <div className="thumbnails grid grid-cols-4 gap-4">
        {imageUrl.map((imageItem, index) => {
          return (
            <button
              key={imageItem}
              onClick={() => setSelectedImageUrl(imageItem)}
              className={`thumbnail-button aspect-square border-2 rounded-lg p-1 ${imageItem === selectedImageUrl ? "border-brand-green" : "border-transparent hover:border-brand-green"} `}
            >
              <img
                src={imageItem}
                alt={`${name}-thumbnail-${index + 1}`}
                className="w-full h-full object-cover rounded-md"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ImageGallery;
