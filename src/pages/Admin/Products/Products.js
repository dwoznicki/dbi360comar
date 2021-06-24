import React, { useState, useEffect } from "react";
import Product from "../../../components/Product/Product";
import { getProductsByUserId } from "../../../services/api";
import { getUrlParams } from "../../../services";
const Products = ({ location }) => {
  const [products, getProducts] = useState([]);

  const handleGetProducts = async (user_id) => {
    const productArray = await getProductsByUserId(user_id);
    getProducts(productArray);
  };

  useEffect(() => {
    handleGetProducts(getUrlParams(location).user_id);
  }, []);
  return (
    <>
      {products.map((product) => (
        <Product productData={product} />
      ))}
    </>
  );
};

export default Products;
