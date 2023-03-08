import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProductsContext from "../contexts/ProductsContext";
import CartContext from "../contexts/CartContext";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Tooltip from "@mui/material/Tooltip";


const Single = () => {
  const { products, setProducts } = useContext(ProductsContext);
  const { cart, setCart } = useContext(CartContext);

  const params = useParams();
  const navigate = useNavigate();

  let product = products.filter((prod) => {
    if (prod.id == params.id) {
      return prod;
    }
  })[0];

  let option = [];
  for (let i = 1; i <= product.qty; i++) {
    option.push(
      <option key={i} value={`${i}`}>
        {i}
      </option>
    );
  }

  const addToCart = (event) => {
    event.preventDefault();

    let tempIdx;

    let tempProd = cart.filter((item, idx) => {
      if (item.id == params.id) {
        tempIdx = idx;
        return item;
      }
    });

    if (tempProd.length > 0) {
      setCart((prev) => {
        prev[tempIdx].qty =
          Number(prev[tempIdx].qty) + Number(event.target.selectQty.value);
        return [...prev];
      });
    } else {
      let newCartItem = {
        id: params.id,
        name: product.name,
        price: product.price,
        img: product.img,
        desc: product.desc,
        category: product.category,
        qty: event.target.selectQty.value,
      };

      setCart((cart) => [...cart, newCartItem]);
    }

    navigate("/products");
  };

  return (
    <section className="single container">
      <h2>Product overview</h2>

      <article>
        <div>
          <img src={product.img} alt="BootsPhoto" />
        </div>
        <div>
          <h3>{product.name}</h3>
          <div className="price">${product.price}</div>
          <p>{product.desc}</p>
          <form onSubmit={addToCart}>
            <label>Quantity</label>
            <select name="selectQty">{option}</select>
            <button type="submit">
              <Tooltip title="Add to cart">
                <AddShoppingCartIcon></AddShoppingCartIcon>
              </Tooltip>
            </button>
          </form>
          <hr />
          <span>Category: </span>
          <span>{product.category}</span>
          <hr />
          <span>Share:</span>
          <span>
            <a href=".">
              <i className="fab fa-facebook-square"></i>
            </a>
          </span>
          <span>
            <a href=".">
              <i className="fab fa-instagram"></i>
            </a>
          </span>
          <span>
            <a href=".">
              <i className="fab fa-twitter"></i>
            </a>
          </span>
          <span>
            <a href=".">
              <i className="fab fa-pinterest"></i>
            </a>
          </span>
        </div>
      </article>
    </section>
  );
};

export default Single;
