import React, { useEffect, useState } from "react";
import "./AboutNav.css";
import { GiArtificialHive } from "react-icons/gi";
import { Link } from "react-router";
import { PiCirclesThreePlusLight } from "react-icons/pi";
import { GoArrowUpRight } from "react-icons/go";
import { FaBarsStaggered } from "react-icons/fa6";
import { TbMenuDeep } from "react-icons/tb";
import { MdClose, MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { useNavigate } from "react-router";
const AboutNav = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [barIsOpened, setBarIsOpened] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // change to true if scrollY > 10px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <nav className={`navbar ${isScrolled ? "scrolled2" : ""}`}>
        <div className="navbar-content">
          <div
            className="Nav-Logo2"
            onClick={() => {
              navigate("/");
            }}
          >
            <div className={barIsOpened ? "OpenedLogo" : ""}>
              <GiArtificialHive className="mb-1" />
            </div>
            <div>Velorex</div>
          </div>
          <div className="Nav-items">
            <ul className="nav-list d-flex">
              <li onClick={() => window.scrollTo(0, 0)}>
                <Link to="/" className="Nav-Links2">
                  Home
                </Link>
              </li>
              <li onClick={() => window.scrollTo(0, 0)}>
                <Link to="/about-us" className="Nav-Links2">
                  About
                </Link>
              </li>
              <li onClick={() => window.scrollTo(0, 0)}>
                <Link className="Nav-Links2" to="/contact-us">
                  Contact
                </Link>
              </li>
              <li onClick={() => window.scrollTo(0, 0)}>
                <Link className="Nav-Links2" to="/gallery">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>
          <div className="Nav-Buttons2">
            <div
              style={{ cursor: "pointer" }}
              onClick={() => setBarIsOpened(true)}
            >
              <TbMenuDeep size={23} />
            </div>
            <button href="#" class="button">
              Get in touch
              <span class="button__icon-wrapper">
                <svg
                  viewBox="0 0 14 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="button__icon-svg"
                  width="10"
                >
                  <path
                    d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                    fill="currentColor"
                  ></path>
                </svg>

                <svg
                  viewBox="0 0 14 15"
                  fill="none"
                  width="10"
                  xmlns="http://www.w3.org/2000/svg"
                  class="button__icon-svg button__icon-svg--copy"
                >
                  <path
                    d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </nav>
      <div
        className={`Contact-side-Bar-container ${barIsOpened ? "opened" : ""}`}
      >
        <div className="contact-item-bar">
          <div className="cancel-button" onClick={() => setBarIsOpened(false)}>
            <MdClose color="white" />
          </div>
          <div className="contact-items-container">
            <div className="contact-item">
              <div className="contact-nav-icon">
                <FaPhoneAlt size={20} color="black" />
              </div>
              <a href="tel:+2348069989705" className="contact-nav-Text">
                +234 806 998 9705
              </a>
            </div>
            <div className="contact-item">
              <div className="contact-nav-icon">
                <FaPhoneAlt size={20} color="black" />
              </div>
              <a href="tel:+2347069961314" className="contact-nav-Text">
                +234 706 996 1314
              </a>
            </div>
            <a className="contact-item">
              <div className="contact-nav-icon">
                <IoMail size={20} color="black" />
              </div>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=fluxsites@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-nav-Text"
              >
                fluxsites@gmail.com
              </a>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutNav;
