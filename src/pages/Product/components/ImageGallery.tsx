import React from "react";

const ImageGallery = () => {
  return (
    <div id="image-gallery">
      <div className="main-image bg-white aspect-square rounded-lg shadow-sm border border-gray-200 mb-4">
        <img
          id="main-product-image"
          src="https://images.pexels.com/photos/6297518/pexels-photo-6297518.jpeg"
          alt="Monstera Deliciosa in a pot"
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <div className="thumbnails grid grid-cols-4 gap-4">
        {/* THE CHANGE: Replaced h-24 with aspect-square for perfect responsiveness */}
        <button className="thumbnail-button aspect-square border-2 border-brand-green rounded-lg p-1">
          <img
            src="https://images.pexels.com/photos/6297518/pexels-photo-6297518.jpeg"
            alt="Monstera Thumbnail 1"
            className="w-full h-full object-cover rounded-md"
          />
        </button>
        <button className="thumbnail-button aspect-square border-2 border-transparent hover:border-brand-green rounded-lg p-1">
          <img
            src="https://images.pexels.com/photos/3125195/pexels-photo-3125195.jpeg"
            alt="Monstera Thumbnail 2"
            className="w-full h-full object-cover rounded-md"
          />
        </button>
        <button className="thumbnail-button aspect-square border-2 border-transparent hover:border-brand-green rounded-lg p-1">
          <img
            src="https://images.pexels.com/photos/12684656/pexels-photo-12684656.jpeg"
            alt="Monstera Thumbnail 3"
            className="w-full h-full object-cover rounded-md"
          />
        </button>
      </div>
    </div>
  );
};

export default ImageGallery;
