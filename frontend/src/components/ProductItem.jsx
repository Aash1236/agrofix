import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);
  return (
    <Link
      className="text-gray-700 border border-gray-200 cursor-pointer "
      to={`/product/${id}`}
    >
      <div className="overflow-hidden">
        <img
          className="transition ease-in-out hover:scale-110 h-52"
          src={image[0]}
          alt=""
        />
      </div>
      <div className="flex items-center justify-between p-2 bg-green-200">
        <p className="pt-3 pb-1 text-sm">{name}</p>
        <p className="text-sm font-medium">
          {currency}
          {price}
        </p>
      </div>
    </Link>
  );
};

export default ProductItem;
