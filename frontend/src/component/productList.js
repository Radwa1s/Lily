import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState();
  useEffect(() => {
    GetProducts();
  }, []);
  const GetProducts = async () => {
    const response = await axios.get("http://localhost:3001/products");
    setProducts(response.data);
    console.log(response.data);
  };

  return (
    <div>
      {products &&
        products.map((product) => (
          <div key={product._id}>
            <h1>{product.name}</h1>
            <p>{product.price}</p>

            <p>{product.description}</p>
            <img src={product.ImageURL} />
          </div>
        ))}
    </div>
  );
};

export default ProductList;
