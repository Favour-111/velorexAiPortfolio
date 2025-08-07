import React, { useState } from "react";
import "./Gallery.css";
import Nav from "../../components/Nav/Nav";
import image from "../../Asset/images/icons8-unavailable-100.png";
import { IoArrowBack } from "react-icons/io5";
import AboutNav from "../../components/AboutNav/AboutNav";
import AboutNavSm from "../../components/AboutNavSm/AboutNavSm";
import Admin from "../../Asset/mockup/Peach Minimalist New Stock Online Notebook Mockup Instagram Post.png";
import Villyz from "../../Asset/mockup/Peach Minimalist New Stock Online Notebook Mockup Instagram Post (1).png";
import wosina from "../../Asset/mockup/Peach Minimalist New Stock Online Notebook Mockup Instagram Post (2).png";
import Eguy from "../../Asset/mockup/Peach Minimalist New Stock Online Notebook Mockup Instagram Post (3).png";
import Quiz from "../../Asset/mockup/Peach Minimalist New Stock Online Notebook Mockup Instagram Post (4).png";
import Review from "../../Asset/mockup/Peach Minimalist New Stock Online Notebook Mockup Instagram Post (5).png";
import Footer from "../../components/Footer/Footer";
import BackToTop from "../../components/BackToTop/BackToTop";
const Gallery = () => {
  const [CheckProject, setCheckProject] = useState(false);
  const gallertItem = [
    {
      image: Admin,
      Link: "https://villyz-admin.vercel.app/",
    },
    {
      image: Villyz,
      Link: "https://villyz-store-md6b.vercel.app/home",
    },
    {
      image: wosina,
      Link: "https://company-portfolio-seven-eosin.vercel.app/",
    },
    {
      image: Eguy,
      Link: "https://e-guys-carstore.onrender.com/Home",
    },
    {
      image: Quiz,
      Link: "https://favour-111.github.io/recommended-product-quizz/",
    },
    {
      image: Review,
      Link: "https://favour-111.github.io/review-form/",
    },
  ];
  return (
    <div>
      <div className="gallery-banner">
        <AboutNav />
        <AboutNavSm />
        <BackToTop />
        <div className="gallery-banner-text">
          <div className="gallery-sub-head">our portfolio</div>
          <div className="gallery-head">CREATIVE SOLUTIONS</div>
          <div className="gallery-content">
            From eye-catching designs to cutting-edge technology, we combine
            creativity, strategy, and innovation to deliver results that matter.
          </div>
        </div>
      </div>
      <div className="gallery-container">
        <div className="gallery-container-head">Next-Level Website Design</div>
        <div className="gallery-content-container">
          {gallertItem.map((item, index) => {
            return (
              <div
                className="gallery-item"
                onMouseOver={() => setCheckProject(true)}
                onMouseOut={() => setCheckProject(false)}
              >
                <img src={item.image} alt="" />
                <a className="bottom-open" href={item.Link} target="_blank">
                  Check project
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
