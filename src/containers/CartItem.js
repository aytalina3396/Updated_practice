import React from "react";
import PropTypes from "prop-types";

const CartItem = ({ price, title }) => {
  return (
    <div className="cart-item">
      <span>{title}</span>
      <div className="cart-item__price">
        <span>{price} $.</span>
      </div>
    </div>
  );
};
CartItem.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
export default CartItem;
