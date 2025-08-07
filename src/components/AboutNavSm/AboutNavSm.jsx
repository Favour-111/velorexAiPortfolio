import React, { useEffect, useState } from "react";
import "./AboutNavSm.css";
import { GiArtificialHive } from "react-icons/gi";
import { Link } from "react-router";
import { PiCirclesThreePlusLight } from "react-icons/pi";
import { GoArrowUpRight } from "react-icons/go";
import { FaBarsStaggered } from "react-icons/fa6";
import { TbMenuDeep } from "react-icons/tb";
import { MdClose, MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoClose, IoMail } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from "react-router";
const AboutNavSm = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [navIsOpened, setNavIsOpened] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // change to true if scrollY > 10px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <nav className={`navbar-sm2 ${isScrolled ? "scrolled" : ""}`}>
        <div className="navbar-sm-content">
          <div
            className="Nav-Logo-sm"
            onClick={() => {
              navigate("/");
            }}
          >
            <div>
              <GiArtificialHive className="mb-1" />
            </div>
            <div>Velorex</div>
          </div>

          <div className="Nav-Buttons-sm2">
            <button>
              <div>Get in touch</div>
              <div>
                <GoArrowUpRight size={12} />
              </div>
            </button>
            {navIsOpened ? (
              <div onClick={() => setNavIsOpened(false)}>
                <IoClose color={isScrolled ? "white" : "black"} size={20} />
              </div>
            ) : (
              <div onClick={() => setNavIsOpened(true)}>
                <RxHamburgerMenu
                  color={isScrolled ? "white" : "black"}
                  size={20}
                />
              </div>
            )}
          </div>
        </div>

        <div className={`Nav-items-sm ${navIsOpened ? "opened" : ""}`}>
          <ul className="nav-list-sm">
            <li className="d-flex align-items-center bg-dark">
              <Link className="Nav-Links" to="/">
                Home
              </Link>
            </li>
            <li
              onClick={() => window.scrollTo(0, 0)}
              className="d-flex align-items-center"
            >
              <Link className="Nav-Links" to="/about-us">
                About
              </Link>
            </li>
            <li
              onClick={() => window.scrollTo(0, 0)}
              className="d-flex align-items-center"
            >
              <Link className="Nav-Links" to="/contact-us">
                Contact
              </Link>
            </li>
            <li
              onClick={() => window.scrollTo(0, 0)}
              className="d-flex align-items-center"
            >
              <Link className="Nav-Links" to="/gallery">
                Gallery
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default AboutNavSm;
