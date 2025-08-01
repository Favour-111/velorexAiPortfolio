import React, { useEffect, useState } from "react";
import "./Nav.css";
import { GiArtificialHive } from "react-icons/gi";
import { Link } from "react-router";
import { PiCirclesThreePlusLight } from "react-icons/pi";
import { GoArrowUpRight } from "react-icons/go";
import { FaBarsStaggered } from "react-icons/fa6";
import { TbMenuDeep } from "react-icons/tb";
import { MdClose, MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
const Nav = () => {
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
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="navbar-content">
          <div className="Nav-Logo">
            <div>
              <GiArtificialHive className="mb-1" />
            </div>
            <div>Velorex</div>
          </div>
          <div className="Nav-items">
            <ul className="nav-list">
              <li>
                <Link className="Nav-Links">Home</Link>
              </li>
              <li>
                <Link className="Nav-Links">About</Link>
              </li>
              <li>
                <Link className="Nav-Links">Contact</Link>
              </li>
              <li>
                <Link className="Nav-Links">Gallery</Link>
              </li>
            </ul>
          </div>
          <div className="Nav-Buttons">
            <div
              style={{ cursor: "pointer" }}
              onClick={() => setBarIsOpened(true)}
            >
              <TbMenuDeep size={23} />
            </div>
            <button>
              <div>Get in touch</div>
              <div>
                <GoArrowUpRight size={13} />
              </div>
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
              <div className="contact-nav-Text">+234 806 998 9705</div>
            </div>
            <div className="contact-item">
              <div className="contact-nav-icon">
                <IoMail size={20} color="black" />
              </div>
              <div className="contact-nav-Text">Velorex@gmail.com</div>
            </div>
            <div className="contact-item">
              <div className="contact-nav-icon">
                <MdLocationOn color="black" size={20} />
              </div>
              <div className="contact-nav-Text">
                No 80 igba otun sango
                <br /> ota ogun state
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
