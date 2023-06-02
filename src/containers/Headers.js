// import React from "react";

// const Header = () => {
//   return (
//     <div className="ui fixed menu">
//       <div className="ui container center">
//         <h2>Product Shop</h2>
//       </div>
//     </div>
//   );
// };

// export default Header;

import React from "react";
// import { Link } from "react-router-dom";
import { CartBlock } from "./CartBlock/CartBlock";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <NavLink to="/" className="main_title">
          Product Shop
        </NavLink>
      </div>
      <div className="button">
        <CartBlock />
      </div>
    </div>
  );
};

export default Header;
