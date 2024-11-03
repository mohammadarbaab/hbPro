import React from "react";
import "./Footer.css";
import logo2 from "../assets/HABOT.png";
import instagram from "../assets/Item → Link - Instagram.png";
import fb from "../assets/Item → Link - Facebook.png";
import x from "../assets/Item → Link - Twitter.png";
import linkdln from "../assets/Item → Link - LinkedIn.png";
function Footer() {
  return (
    <div className="footer-container">
      <footer
        className="footer-main"
        style={{
          boxShadow: "0 -5px 6px -8px #ffffff, 0 5px 6px -8px #ffffff",
          borderTop: "1px solid rgba(255, 255, 255, 0.2)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
        }}
      >
        <div className="footer-left">
          <div className="footer-col-img">
            <img src={logo2} alt="Logo" />
            <p>© R Singhania</p>
          </div>
          <div className="footer-columns">
            <div class="footer-col">
              <h4>Company</h4>
              <a href="#">
                <p>About</p>
              </a>
              <a href="#">
                <p>FAQ</p>
              </a>
            </div>

            <div class="footer-col">
              <h4>Terms</h4>
              <a href="#">
                <p>Data privacy</p>
              </a>
              <a href="#">
                <p>Terms</p>
              </a>
              <a href="#">
                <p>Accessibility</p>
              </a>
            </div>

            <div class="footer-col">
              <h4>Related</h4>
              <a href="#">
                <p>Find Buyer</p>
              </a>
              <a href="#">
                <p>Feedback</p>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-right">
          <div className="icons">
            <a href="#">
              <img src={linkdln} />
            </a>
            <a href="#">
              <img src={x} />
            </a>
            <a href="#">
              <img src={fb} />
            </a>
            <a href="#">
              <img src={instagram} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
