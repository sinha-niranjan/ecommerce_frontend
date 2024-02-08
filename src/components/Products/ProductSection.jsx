import React from "react";
import "./Products.scss";
import { Organic, Rating } from "../Tags/Tags";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";


const ProductSection = ({products}) => {
  return (
    <div className="products-section">
      <div className="products-heading">
        <span>
          <h3>{products.heading}</h3>
          <p>{products?.details}</p>
        </span>
      </div>

      <div className="new-products">
        {products.products.map((product, ind) => (
          <div key={ind} className="new-product">
            <div className="product-image">
              <span>
                <p>75%</p>

                <CiHeart />
              </span>
              <img src={product.img} alt={"apple juice"} />
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

export default ProductSection;
