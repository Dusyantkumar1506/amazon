import React from "react";
import "../components/header.scss";
import BusinessIcon from "@mui/icons-material/Business";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

const Header = () => {
  const { myReducer } = useStateValue();
  const [data] = myReducer;
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <BusinessIcon fontSize="large" />
          <span className="header__logoName">Psy-Shop</span>
        </Link>
      </div>
      <div className="header__search">
        <input />
      </div>
      <div className="header__nav">
        <div className="header__nav__user">
          <span className="header__nav__lineOne">
          {data.authInfo.user ? data.authInfo.user.email:'Hello Guest'}
          </span>
          <span className="header__nav__lineTwo">Sign In</span>
        </div>
        <div className="header__nav__basket">
          <Link to="/checkout">
            <ShoppingCartIcon fontSize="small" />
            {data.cartList.length} &nbsp; Cart
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
