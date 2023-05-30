import React from "react";
import { useSelector } from "react-redux";

const Product = () => {
  const products = useSelector((state) => state.products.products);
  const renderList = products.map((product) => {
    const { id, title, price, category, thumbnail, description } = product;
    return (
      <div className="four wide column" key={id}>
        <div className="ui link cards">
          <div className="card">
            <div className="image">
              <img src={thumbnail} alt={title} />
            </div>
            <div className="content">
              <div className="header">{title}</div>
              <div className="description">{description}</div>
              <div className="meta price">$ {price}</div>
              <div className="meta">{category}</div>
            </div>
            <div className="bottom">Add to card</div>
          </div>
        </div>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default Product;
