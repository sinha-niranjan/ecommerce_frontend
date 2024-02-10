import React, { useState } from "react";
import "./Footer.scss";

const Footer = () => {
  const [email,setEmail] = useState('')
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-right">
          <h3>Join our newsletter for ₹ 100 offs</h3>
          <p>
            Register now to get latest updates on promotions & coupons.Don’t
            worry, we not spam!
          </p>
        </div>
        <div className="footer-top-left">
          <div className="footer-top-left-input-box">
            <input type="text" placeholder="Enter your email address" value={email} onChange={(e) => setEmail(e.target.value)} />
            <span>SEND</span>
          </div>
          <span>
            {" "}
            By subscribing you agree to our{" "}
            <p>Terms & Coditions and Privacy & Cookies Policy</p>{" "}
          </span>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright 2024 © Grogin WooCommerce WordPress Theme. All right reserved. Powered by KLBTheme.</p>
      </div>
    </div>
  );
};

export default Footer;
