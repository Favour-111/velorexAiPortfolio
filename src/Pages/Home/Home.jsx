import React, { useEffect, useState } from "react";
import Nav from "../../components/Nav/Nav";
import "./Home.css";
import NavSm from "../../components/NavSm/NavSm";
import { GoGraph, GoLightBulb } from "react-icons/go";
import { IoConstructOutline } from "react-icons/io5";
const Home = () => {
  const baseText = "In ";
  const words = [
    "Web Development",
    "App Development",
    "UI/UX",
    "Web Management",
  ];
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    const currentWord = words[wordIndex];

    let typingSpeed = isDeleting ? 100 : 150;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        setText(currentWord.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 1000); // wait before deleting
        }
      } else {
        // Deleting
        setText(currentWord.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <div>
      <div className="Banner">
        <Nav />
        <NavSm />
        <div className="banner-text-container">
          <div className="banner-text-1">Full-stack Agency</div>
          <div className="Written-Text">
            {baseText}
            <span>{text}</span>
            <span className="blinking-cursor">|</span>
          </div>
          <div className="company-name">Velorex AI</div>
        </div>
      </div>
      <div className="short-content-container">
        <div
          data-aos="fade-in"
          data-aos-duration="1500"
          className="short-content-item"
        >
          <div>
            <GoLightBulb className="short-content-icon" />
          </div>
          <div className="short-content-head">INNOVATORS</div>
          <div className="short-content-content">
            Shaping the future with bold ideas. We blend technology and
            creativity to build lasting impact.
          </div>
        </div>
        <div
          data-aos="fade-in"
          data-aos-duration="1500"
          className="short-content-item"
        >
          <div>
            <GoGraph className="short-content-icon" />
          </div>
          <div className="short-content-head">STRATEGISTS</div>
          <div className="short-content-content">
            Turning insights into action. We design smart, data-driven solutions
            that drive real results.
          </div>
        </div>
        <div
          data-aos="fade-in"
          data-aos-duration="1500"
          className="short-content-item"
        >
          <div>
            <IoConstructOutline className="short-content-icon" />
          </div>
          <div className="short-content-head">BUILDERS</div>
          <div className="short-content-content">
            From concept to completion. We bring your vision to life with
            precision and passion.
          </div>
        </div>
      </div>

      <div className="who-section">
        <div className="who-left">
          <img
            src="https://images.unsplash.com/photo-1595074475099-633660478a7a?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Team Working"
            className="team-img"
          />
          <img
            src=" https://media.istockphoto.com/id/160057270/photo/bulb-in-hand.jpg?s=612x612&w=0&k=20&c=9fWWNG6sdUxotWqRD4LG7T7-2hkmm55ZXrquyjo7u9I="
            alt="Bulb"
            className="bulb-img"
          />
        </div>
        <div className="who-right">
          <p className="who-label" data-aos="fade-in" data-aos-duration="1500">
            WHO WE ARE
          </p>
          <div className="who-head" data-aos="fade-in" data-aos-duration="1500">
            PASSIONATE
            <br />
            THINKERS
          </div>
          <p className="who-text" data-aos="fade-in" data-aos-duration="1500">
            We are driven by creativity and a clear sense of purpose, bringing
            ideas to life through thoughtful design and innovation. Our mission
            is to create solutions that not only look great but also make a real
            impact. Together, let's turn your vision into something remarkable.
          </p>
          <button
            className="who-button"
            data-aos="fade-in"
            data-aos-duration="1500"
          >
            MORE ABOUT US
          </button>
        </div>
      </div>
      <div className="stand-for-cont">What we stand for</div>
    </div>
  );
};

export default Home;
