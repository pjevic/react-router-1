import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/products");
  };

  return (
    <>
      <h1>Home Page</h1>
      <p>
        <button onClick={navigateHandler}>Navigate to products</button>
      </p>
    </>
  );
};

export default HomePage;
