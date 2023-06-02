import React from "react";
import { useSelector, useDispatch } from "react-redux";
import AddToCart from "./AddToCart/AddToCart";
import PropTypes from "prop-types";

const ProductComponent = () => {
  const products = useSelector((state) => state.products.productsdata);
  const renderList = products.map((product) => {
    const { id, title, price, category, image, description } = product;
    return (
      <div className="ui four wide column" key={id}>
        <div className="ui cards">
          <div className="card">
            <div className="image">
              <img src={image} alt={title} />
            </div>
            <div className="content">
              <div className="header">{title}</div>

              <div className="description">{description}</div>
              <div className="meta price">$ {price}</div>
              <div className="meta">{category}</div>
            </div>
            <button className="button">
              <AddToCart product={product} id={id} />
            </button>
          </div>
        </div>
      </div>
    );
  });

  return <>{renderList}</>;
};

export default ProductComponent;
