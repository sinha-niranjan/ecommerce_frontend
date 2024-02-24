import React, { useEffect } from "react";
import Carousel from "../../components/Carousel/Carousel";
import Products from "../../components/Products/Products";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  
  return (
    <>
      <Carousel />
      <Products />
    </>
  );
};

export default Home;
