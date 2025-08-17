import React from "react";
import { Link } from "react-router-dom";
import { APP_ROUTE_NAMES } from "../../../appConstant";

interface CategoryCardProps {
  key?: string
  iconName: string;
  name: string;
  description: string;
  linkTo?: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  key,
  name,
  description,
  iconName,
}) => {
  return (
    <Link to={APP_ROUTE_NAMES.SHOP} className="group" key={key}>
      <div className="flex items-center justify-center h-20 w-20 bg-brand-green rounded-full mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
        <i className={`${iconName} text-3xl text-white`}></i>
      </div>
      <h3 className="font-serif text-xl text-brand-green mb-2 group-hover:underline">
        {name}
      </h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </Link>
  );
};

export default CategoryCard;
