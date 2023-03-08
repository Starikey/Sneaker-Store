import React from "react";
import { Link } from "react-router-dom";

const HeroHeader = () => {
  return (
    <header>
      <div className="container">
        <article>
          <h1>Place where you can buy awesome sneakers ! ! !</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
            ullam error veniam. Minus ipsum neque aliquid vitae explicabo! Fugit
            ratione similique harum placeat dignissimos temporibus voluptas
            numquam, illo neque sapiente!
          </p>
          <button><Link to="products" style={{color: 'white'}}>Order now!</Link></button>
          <button style={{marginLeft: '12px', backgroundColor: 'transparent', border: '2px solid #001253',}}><Link to="contact" style={{color: 'white'}}>Contact us</Link></button>  
        </article>
        <img className="hero-img" src="img/header.png" alt="sneaker_image" />
      </div>
    </header>
  );
};

export default HeroHeader;
