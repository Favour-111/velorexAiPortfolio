import React from "react";
import "./Footer.css";
import { GiArtificialHive } from "react-icons/gi";
import { Link } from "react-router";
import {
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-top-over-lay">
            <div className="footer-top-head">
              LETS BRING YOUR VISION TO LIFE
            </div>
            <div className="footer-top-content">
              Our team is passionate about creating designs that not only look
              great but also drive results.
            </div>
            <button className="contact-btn">
              <span>Contact us</span>
            </button>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-container">
            <div className="footer-itm">
              <div className="Footer-Logo">
                <div className="logo">
                  <GiArtificialHive className="mb-1" />
                </div>
                <div>Velorex</div>
              </div>
            </div>

            <div className="footer-itm">
              <div className="footer-itm-head">Contact</div>
              <div className="address-itm">
                <div className="address">
                  PO Box 16122 Collins Street West Victoria 8007 Australia
                </div>
                <div>geral@example.com</div>
                <div>(+23) 345 322 233</div>
              </div>
            </div>
            <div className="footer-itm">
              <div className="footer-itm-head">Quick Link</div>
              <ul>
                <li>
                  <Link className="footer-link-itm">Home</Link>
                </li>
                <li>
                  <Link className="footer-link-itm">About</Link>
                </li>
                <li>
                  <Link className="footer-link-itm">Contact</Link>
                </li>
                <li>
                  <Link className="footer-link-itm">Gallery</Link>
                </li>
              </ul>
            </div>
            <div className="footer-itm">
              <div className="footer-itm-head">Legal and Press</div>
              <ul>
                <li>
                  <Link className="footer-link-itm">Privacy Policy</Link>
                </li>
                <li>
                  <Link className="footer-link-itm">Terms & Condition</Link>
                </li>
                <li>
                  <Link className="footer-link-itm">PressKit</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-social-container">
            <div className="footer-social-item">
              <FaInstagram />
            </div>
            <div className="footer-social-item">
              <FaFacebookF />
            </div>
            <div className="footer-social-item">
              <BsTwitterX />
            </div>
            <div className="footer-social-item">
              <FaTiktok />
            </div>
            <div className="footer-social-item">
              <FaDiscord />
            </div>
          </div>
          <div className="copyright">2025 © Pine Horbah's tech</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
