import React, { useEffect } from "react";
import Product from "./Product";
import { useSelector } from "react-redux";

const ProductList = () => {
  const products = useSelector((state) => state);

  console.log("Products :", products);
  return (
    <div className="ui grid container">
      <Product />
    </div>
  );
};

export default ProductList;
