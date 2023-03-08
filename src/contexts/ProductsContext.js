import { createContext, useState, useEffect } from "react";

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    fetch('https://zany-gray-kitten-sock.cyclic.app/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => console.log(err));
  }, [products]);
  
  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
