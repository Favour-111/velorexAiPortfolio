import React from "react";
import "./Gallery.css";
import Nav from "../../components/Nav/Nav";
import image from "../../Asset/images/icons8-unavailable-100.png";
import { IoArrowBack } from "react-icons/io5";
const Gallery = () => {
  return (
    <div>
      <div className="gallery-container">
        <div className="icon">
          <img src={image} alt="" />
        </div>
        <div className="text">This page is currently unavailable</div>
        <div className="text2">check back later</div>
        <button
          class="cssbuttons-io-button"
          onClick={() => window.location.replace("/")}
        >
          Go Back
          <div class="icon">
            <IoArrowBack />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Gallery;
