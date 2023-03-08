import React, { useContext } from "react";

import { Link } from "react-router-dom";
import ProductsContext from "../contexts/ProductsContext";

const Products = () => {
  const { products, setProducts } = useContext(ProductsContext);

  return (
    <section className="products container">
      <h2>Check out our products!</h2>
      <article>
        {products.map((p,idx) => {
          return (
            <div key={p.id} className="item">
              <Link to={`/single/${p.id}`}>
                <img src={products[idx].img} alt="" />
                <h3>{p.name}</h3>
                <p style={{color: "#282626"}}>${p.price}</p>
              </Link>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default Products;
