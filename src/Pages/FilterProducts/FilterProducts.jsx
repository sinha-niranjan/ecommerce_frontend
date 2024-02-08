import React, { useEffect } from "react";
import "./FilterProducts.scss";

const FilterProducts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="filter-products">
      <div className="filter-products-sidebar"></div>
      <div className="filter-products-main"></div>
    </div>
  );
};

export default FilterProducts;
