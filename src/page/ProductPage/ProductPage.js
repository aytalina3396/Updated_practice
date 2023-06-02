import React from "react";
import ProductDetail from "../../containers/ProductDetail";
import Header from "../../containers/Headers";

const ProdactPage = () => {
  return (
    <React.Fragment>
      <div className="ui fixed menu">
        <div className="ui container center">
          <Header />
        </div>
      </div>
      <ProductDetail />;
    </React.Fragment>
  );
};

export default ProdactPage;
