import React from "react";
import { calcTotalPrice } from "../TotalPrice";
import CartItem from "../CartItem";
import PropTypes from "prop-types";
import "./CartMenu.css";

const CartMenu = ({ items, onClick }) => {
  return (
    <div className="cart-menu">
      <div className="cart-menu__product-list">
        {items.length > 0
          ? items.map((product) => (
              <CartItem
                key={product.title}
                price={product.price}
                title={product.title}
                id={product.id}
              />
            ))
          : "The cart is empty"}
      </div>
      {items.length > 0 ? (
        <div className="cart-menu__arrange">
          <div className="cart-menu__total-price">
            <span>Total:</span>
            <span>{calcTotalPrice(items)} $</span>
          </div>
          <div className="button_in_menu">
            <button className="button" onClick={onClick}>
              Go to the cart
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};
CartMenu.propTypes = {
  onClick: PropTypes.number.isRequired,
  items: PropTypes.object.isRequired,
};
export default CartMenu;
