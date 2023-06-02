//HomePage

import React from "react";
import ProductList from "../../containers/ProductList";
import "./HomePage.css";
import Header from "../../containers/Headers";

const HomePage = () => {
  return (
    <React.Fragment>
      <div className="ui fixed menu">
        <div className="ui container center">
          <Header />
        </div>
      </div>
      <div className="ui grid container">
        <ProductList />
      </div>
    </React.Fragment>
  );
};

export default HomePage;
