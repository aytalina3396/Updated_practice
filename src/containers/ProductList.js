// import React, { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import ProductComponent from "./ProductComponent";
// import { getAllProducts } from "../slice/productSlice";

// const ProductPage = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getAllProducts());
//   }, []);
//   return (
//     <div className="ui grid container">
//       <ProductComponent />
//     </div>
//   );
// };

// export default ProductPage;

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import AddToCart from "./AddToCart/AddToCart";
import { getAllProducts } from "../slice/productSlice";
import PropTypes from "prop-types";
import ProductComponent from "./ProductComponent";
// import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};
export default ProductList;
