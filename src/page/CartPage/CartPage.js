import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ItemInCart from "../../containers/ItemInCart/ItemInCart";
import "./CartPage.css";
import { calcTotalPrice } from "../../containers/TotalPrice";

const CartPage = () => {
  const items = useSelector((state) => state.cart.cartItems);
  if (items.length === 0) {
    return <h1>The cart is empty</h1>;
  }
  return (
    <React.Fragment>
      <div className="ui fixed menu">
        <div className="ui container center">
          <div className="main_title">Cart</div>
        </div>
      </div>
      <div className="ui grid container">
        {items.map((product) => (
          <ItemInCart
            title={product.title}
            image={product.image}
            key={product.id}
            price={product.price}
            id={product.id}
          />
        ))}
      </div>
      <div className="order-page__right">
        <div className="order-page__total-price">
          <span>Total: {calcTotalPrice(items)} $.</span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CartPage;
