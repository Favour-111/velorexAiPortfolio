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
import toast, { Toaster } from "react-hot-toast";
const Footer = () => {
  const handleClick = () => {
    toast("Link is currently unavailable");
  };
  return (
    <div>
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-top-over-lay">
            <div
              className="footer-top-head"
              data-aos="fade-in"
              data-aos-duration="1500"
            >
              LETS BRING YOUR VISION TO LIFE
            </div>
            <div
              className="footer-top-content"
              data-aos="fade-in"
              data-aos-duration="1500"
            >
              Our team is passionate about creating designs that not only look
              great but also drive results.
            </div>
            <a
              href="tel:+2347069961314"
              className="contact-btn"
              data-aos="fade-in"
              data-aos-duration="1500"
            >
              <span>Contact us</span>
            </a>
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
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=fluxsites@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  fluxsites@gmail.com
                </a>
                <a href="tel:+2347069961314">+234 706 996 1314</a>
                <a href="tel:+2348069989705">+234 806 998 9705</a>
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
            <div className="footer-social-item" onClick={handleClick}>
              <FaInstagram />
            </div>
            <div className="footer-social-item" onClick={handleClick}>
              <FaFacebookF />
            </div>
            <div className="footer-social-item " onClick={handleClick}>
              <BsTwitterX />
            </div>
            <div className="footer-social-item" onClick={handleClick}>
              <FaTiktok />
            </div>
            <div className="footer-social-item">
              <FaDiscord />
            </div>
          </div>
          <div className="copyright">2025 © Pine Horbah's tech</div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Footer;
