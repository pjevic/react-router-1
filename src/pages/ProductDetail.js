import React from "react";
import { useParams, Link } from "react-router-dom";

const PRODUCTS = [
  { id: "p1", title: "Product 1" },
  { id: "p2", title: "Product 2" },
  { id: "p3", title: "Product 3" },
];

const ProductDetailPage = () => {
  const params = useParams();

  return (
    <>
      <h1>Product Details</h1>
      <p>{params.id}</p>

      <ul>
        {PRODUCTS.map((product) => {
          return (
            <li key={product.id}>
              <Link to={`/products/${product.id}`}>{product.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ProductDetailPage;
