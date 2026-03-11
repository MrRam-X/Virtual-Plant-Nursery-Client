import React from "react";

const YourWishlistTab: React.FC = () => {
  return (
    <div id="wishlist-panel">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm border">
        <h2 className="font-serif text-2xl text-brand-green">Your Wishlist</h2>
        <p>This section will show a grid of your wishlisted items.</p>
      </div>
    </div>
  );
};

export default YourWishlistTab;
