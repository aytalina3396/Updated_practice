//Для @reduxjs/toolkit
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage/HomePage";
import CartPage from "./page/CartPage/CartPage";
import ProductPage from "./containers/ProductList";
import Header from "./containers/Headers";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          {/* <Route path="/product/:id" element={<ProductPage />} /> */}
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

//Для redux react-redux
// import "./App.css";
// import Header from "./containers/Headers";
// import ProductList from "./containers/ProductList";

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <ProductList />
//     </div>
//   );
// }

// export default App;

// export default App;
