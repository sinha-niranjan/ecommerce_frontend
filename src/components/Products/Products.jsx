import React from "react";
import "./Products.scss";
import AppleJuice from "../../assets/images/newProducts/AppleJuice.png";
import { Organic, Rating } from "../Tags/Tags";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { newProducts } from "../../data/bannerProducts";

const Products = () => {
  return (
    <div className="products-section">
      <div className="products-heading">
        <span>
          <h3>NEW PRODUCTS</h3>
          <p>Some of the new products arriving this week</p>
        </span>
      </div>

      <div className="new-products">
        {newProducts.map((product,ind) => (
          <div key={ind} className="new-product">
            <div className="product-image">
              <span>
                <p>75%</p>

                <CiHeart />
              </span>
              <img src={AppleJuice} alt={"apple juice"} />
              <Organic />
            </div>
            <div className="product-details">
              <div className="product-name">
                <p> 100 Percent Apple Juice – 64 frozen bottle</p>
              </div>
              <div className="product-rating">
                <Rating rating={3} />
                <p>{3}</p>
              </div>
              <div className="product-price">₹ 200</div>
              <div className="product-stock">
                <CiShoppingCart />
                <p>IN STOCK</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
