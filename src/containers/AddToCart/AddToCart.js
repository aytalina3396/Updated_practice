import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemInCart, deleteItemFromCart } from "../../slice/cartSlice";
import PropTypes from "prop-types";
import "./AddToCart.css";

const AddToCart = ({ product, id }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.cartItems);
  const isItemInCart = items.some((item) => item.id === id);

  const handleClick = (e) => {
    e.stopPropagation();
    if (isItemInCart) {
      dispatch(deleteItemFromCart(id));
    } else {
      dispatch(addItemInCart(product));
    }
  };
  return (
    <div>
      <span onClick={handleClick}>
        {isItemInCart ? "Delete from cart" : "Add to cart"}
      </span>
    </div>
  );
};
AddToCart.propTypes = {
  product: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
};
export default AddToCart;
