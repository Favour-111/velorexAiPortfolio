import React, { useEffect, useState } from "react";
import Nav from "../../components/Nav/Nav";
import "./Home.css";
import NavSm from "../../components/NavSm/NavSm";
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
    </div>
  );
};

export default Home;
