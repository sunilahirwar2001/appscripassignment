import React from "react";
import "./Footer.css";
import { FaGooglePay } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import applepay from "../../assets/images/applepay.png";
import flag from "../../assets/images/flag.png";
import mastercard from "../../assets/images/Group 136190.png";
import paypal from "../../assets/images/Group 136192.png";
import gpay from "../../assets/images/Group 136188.png";
import gstore from "../../assets/images/Group 136195.png";
import amax from "../../assets/images/Group 136193.png";

const Footer = () => {
  return (
    <div>
      <section class="newsletter-section">
        <div class="newsletter-content">
          <h2>BE THE FIRST TO KNOW</h2>
          <form class="newsletter-form">
            <input type="email" placeholder="Enter your e-mail..." />
            <button type="submit">SUBSCRIBE</button>
          </form>
        </div>

        <div class="currency-info">
          <span>Contact Us</span>
          <span>+44 221 133 5360</span>
          <span>customercare@mettamuse.com</span>
          <span>CURRENCY</span>
          <span style={{ display: "inline-flex", alignItems: "center" }}>
            <img
              src={flag}
              style={{ height: "27px", width: "50px", borderRadius: "50%" }}
              alt="Flag"
            />
            <span
              style={{
                marginLeft: "5px",
                width: "10px",
                height: "10px",
                backgroundColor: "white",
                borderRadius: "50%",
              }}
            ></span>
            <span style={{ marginLeft: "5px" }}>USD</span>
          </span>

          <span>
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </span>
        </div>
      </section>
      <hr />
      <footer class="footer">
        <div class="footer-content">
          <div class="footer-links">
            <h1> mettā muse</h1>
            <a href="#">About Us</a>
            <a href="#">Stories</a>
            <a href="#">Artisans</a>
            <a href="#">Boutiques</a>
            <a href="#">Contact Us</a>
            <a href="#">EU Compliances Docs</a>
          </div>

          <div class="footer-links">
            <h2>QUICK LINKS</h2>

            <a href="#">Orders & Shipping</a>
            <a href="#">Join/Login as a Seller</a>
            <a href="#">Payment & Pricing</a>
            <a href="#">Return & Refunds</a>
            <a href="#">FAQs</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
          <div className="footer-link">
            <h1>FOLLOW US</h1>
            <div className="icons-logo">
              <span>
                {" "}
                <CiInstagram />
              </span>
              <span>
                {" "}
                <CiLinkedin />
              </span>
            </div>
            <div className="third-data">
              <h2>metta muse ACCEPTS</h2>
              <img src={gpay} style={{ height: "27px", width: "50px" }} />

              <img src={mastercard} style={{ height: "27px", width: "50px" }} />

              <img src={paypal} style={{ height: "27px", width: "50px" }} />
              <img src={amax} style={{ height: "27px", width: "50px" }} />

              <img src={applepay} style={{ height: "27px", width: "50px" }} />
              <img src={gstore} style={{ height: "27px", width: "50px" }} />
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <span>Copyright © 2023 mettamuse. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
