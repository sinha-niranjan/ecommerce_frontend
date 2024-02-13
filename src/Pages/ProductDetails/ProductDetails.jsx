import React from "react";
import { Organic, Rating } from "../../components/Tags/Tags";
import "./ProductDetails.scss";
import image from "../../assets/images/newProducts/banana.png";
import { RiSubtractFill } from "react-icons/ri";
import { MdAdd } from "react-icons/md";
import { CiShoppingBasket } from "react-icons/ci";
import { CiCreditCard1 } from "react-icons/ci";
import { MdSecurity } from "react-icons/md";

const ProductDetails = () => {
  return (
    <div className="product-details">
      <div className="product-details-right">
        <div className="product-details-offer">
          <p>75%</p>
          <Organic />
        </div>
        <div className="product-details-image">
          <img src={image} alt="product-image" />
        </div>
      </div>
      <div className="product-details-left">
        <div className="products-details-heading">
          <h3>Marketside Fresh Organic Banana and Bunch </h3>
          <div className="product-details-rating">
            <Rating rating={3} />
            <p>{"3.00"}</p>
          </div>
        </div>
        <div className="product-details-price">
          <h4>₹ 200 </h4>
          <div className="product-details-options">
            <div className="product-number">
              <RiSubtractFill />
              <p>1</p>
              <MdAdd />
            </div>
            <div className="addtocart">
              <CiShoppingBasket />
              <p>Add to cart </p>
            </div>
            <div className="buybuttom">
              <CiShoppingBasket />
              <p>Buy Now</p>
            </div>
          </div>
          <div className="product-payment-offers">
            <div className="payment">
              <CiCreditCard1 />
              <span>
                <strong>Payment.</strong> Payment upon reciept of goods,payment
                by card in department, Google Pay, Online card, -5% discount in
                case of payment
              </span>
            </div>
            <div className="warranty">
              <MdSecurity />
              <span>
                <strong>Warranty.</strong>
                The Consumer Protection Act does not provide for the return of
                this product of proper quality.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
