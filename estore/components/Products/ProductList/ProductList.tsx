import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductList = () => {
  const [productData, setProductData] = useState(Object);

  const getApiData = async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    setProductData(data);
    return data;
  };

  useEffect(() => {
    getApiData();
  }, []);
  return <pre>{JSON.stringify(productData)}</pre>;
};

export default ProductList;
