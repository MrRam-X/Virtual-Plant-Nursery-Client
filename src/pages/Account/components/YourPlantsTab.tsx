import React from "react";

const YourPlantsTab: React.FC = () => {
  return (
    <div id="plants-panel">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm border">
        <h2 className="font-serif text-2xl text-brand-green">Your Plants</h2>
        <p>This section will show a grid of plants you've purchased.</p>
      </div>
    </div>
  );
};

export default YourPlantsTab;
