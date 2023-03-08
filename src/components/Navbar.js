import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "../contexts/CartContext";
import menu from "../assets/icon-hamburger.svg";
import close from "../assets/icon-close.svg";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggle = () => {
    setToggleMenu((prev) => !prev);
  };

  return (
    <nav>
      <Link to="/">
        <p className="logo-text">
          <span>Sneaker</span> Store
        </p>
      </Link>

      <ul className="desktop_menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="products">Products</Link>
        </li>
        <li>
          <Link to="about">About us</Link>
        </li>
        <li>
          <Link to="contact">Contact us</Link>
        </li>
        <li>
          <Link to="cart">
            Cart <span>({cart.length})</span>
          </Link>
        </li>
      </ul>

      <img
        onClick={handleToggle}
        style={{ marginBottom: "15px" }}
        className="toggle_icon"
        src={`${toggleMenu ? close : menu}`}
        alt="icon"
      />

      <ul className={`${toggleMenu? "mobile_menu_show" : "mobile_menu_hide"}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="products">Products</Link>
        </li>
        <li>
          <Link to="about">About us</Link>
        </li>
        <li>
          <Link to="contact">Contact us</Link>
        </li>
        <li>
          <Link to="cart">
            Cart <span>({cart.length})</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
