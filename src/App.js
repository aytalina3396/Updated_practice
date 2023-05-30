//Для @reduxjs/toolkit
import "./App.css";
import Header from "./containers/Headers";
import ProductPage from "./containers/ProductPage";
function App() {
  return (
    <div className="App">
      <Header />
      <ProductPage />
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
