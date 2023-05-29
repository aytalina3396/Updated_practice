import './App.css';
import Header from './containers/Headers';
import ProductList from './containers/ProductList';


function App() {
  return (
    <div className="App">
        <Header />
        <ProductList />
    </div>
  );
}

export default App;


// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Header />
//         <Routes>
//           <Route path="/" exact component={ProductList} />
//           <Route path="/product/:productId" component={ProductDetail} />
//           <Route>404 Not Found!</Route>
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;