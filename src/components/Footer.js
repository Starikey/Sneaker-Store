import React, {useContext} from "react";
import { Link } from "react-router-dom";
import CartContext from "../contexts/CartContext";

const Footer = () => {

  const { cart } = useContext(CartContext);

  return (
    <footer>
      <article className="container">
        <Link to="/"><p className="logo-text"> <span>Sneaker</span> Store</p></Link>
          <ul>
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
              <Link to="cart">Cart <span style={{color: "white"}}>({cart.length})</span></Link>
            </li>
          </ul>
        
        <div className="icons">
          <span>
            <a href="/">
              <i className="fab fa-facebook-square"></i>
            </a>
          </span>
          <span>
            <a href="/">
              <i className="fab fa-instagram"></i>
            </a>
          </span>
          <span>
            <a href="/">
              <i className="fab fa-twitter"></i>
            </a>
          </span>
          <span>
            <a href="/">
              <i className="fab fa-pinterest"></i>
            </a>
          </span>
        </div>
      </article>
      <article>
        <p>&copy; Fashion 2022 </p>
      </article>
    </footer>
  );
};

export default Footer;
