import React, { useEffect, useState } from "react";
import "./FilterProducts.scss";
import FillterProductsMain from "./FillterProductsMain";

const categroies = [
  { text: "Fruit & Vegtables" },
  { text: "Baby & Pregnancy" },
  { text: "Beverages" },
  { text: "Meat & Seafood" },
  { text: "Biscuits & Snacks" },
  { text: "Bread & Bakery" },
  { text: "Breakfast & Dairy" },
  { text: "Frozen Foods" },
  { text: "Grocery  & Staples" },
  { text: "Healthcare" },
  { text: "Household Needs" },
];

const FilterProducts = () => {
  const [categories, setCategories] = useState([]);
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(100000);
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  console.log(categories);
  return (
    <div className="filter-products">
      <div className="filter-products-sidebar">
        <div className="price-filter">
          <h3>Widget price filter</h3>
          <div className="price-inputs">
            <div className="price-input">
              <p>Min-price</p>
              <input type="number" value={minValue} onChange={(e) => {setMinValue(e.target.value)}} />
            </div>
            <div className="diff">-</div>
            <div className="price-input">
              {" "}
              <p>Max-price</p>
              <input type="number" value={maxValue} onChange={(e) => {setMaxValue(e.target.value)}} />
            </div>
          </div>
          <div className="price-range">
            {/* <input type="range" min={0} max={100000} /> */}
          </div>
          <div className="filter-btn">
            <p>Filter</p>
          </div>
        </div>
        <div className="category-filter">
          <h3>Product Categories</h3>
          <div className="categories-checkbox">
            {categroies.map((category, ind) => (
              <div
                key={ind}
                className="category-checkbox"
                onClick={() => {
                  if (categories.indexOf(category) === -1)
                    setCategories((prev) => [...prev, category]);
                  else
                    setCategories((prev) =>
                      prev.filter((item) => item !== category)
                    );
                }}
              >
                <div
                  className="checkbox"
                  style={{
                    backgroundColor:
                      categories.indexOf(category) !== -1 ? "#634C9F  " : "",
                  }}
                ></div>
                <p
                  style={{
                    color:
                      categories.indexOf(category) !== -1 ? "#634C9F  " : "",
                  }}
                >
                  {" "}
                  {category.text}
                </p>
              </div>
            ))}
          </div>
          <div className="categories-resest">
            <p>Reset Categories</p>
          </div>
        </div>
        <div className="filter-color"></div>
        <div className="filter-status"></div>
      </div>
      <FillterProductsMain />
    </div>
  );
};

export default FilterProducts;
