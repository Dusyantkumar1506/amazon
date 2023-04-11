import "./App.css";
import Banner from "./components/Banner";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import ShoppingBasket from "./components/ShoppingBasket";
import CheckoutAd from "./components/CheckoutAd";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Banner />
              <ProductList />
            </>
          }
        />
        <Route
          exact
          path="/checkout"
          element={
            <>
              <CheckoutAd />
              <ShoppingBasket />
            </>
          }
        />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
