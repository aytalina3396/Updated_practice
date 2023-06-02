import React from "react";
import { useDispatch } from "react-redux";
import "./ItemInCart.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { deleteItemFromCart } from "../../slice/cartSlice";
import PropTypes from "prop-types";

const ItemInCart = ({ title, image, price, id }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteItemFromCart(id));
  };

  return (
    <div className="ui divided items">
      <div className="item">
        <div className="image">
          <img src={image} alt={title} />
        </div>
        <div className="content">
          <div className="title">
            <span>{title}</span>
          </div>
          <div className="price">
            <span>{price} $.</span>
            <AiOutlineCloseCircle
              size={25}
              className="cart-item__delete_icon"
              onClick={handleClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
ItemInCart.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};
export default ItemInCart;
