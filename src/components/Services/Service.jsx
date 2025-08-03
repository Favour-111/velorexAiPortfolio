import React from "react";
import "./Service.css";
import { LuLaptopMinimal } from "react-icons/lu";
import { GrAppsRounded } from "react-icons/gr";
import { HiOutlineLightBulb } from "react-icons/hi";
const Service = () => {
  return (
    <div className="service">
      <div className="service-container">
        <div
          className="service-sub-cont"
          data-aos="fade-in"
          data-aos-duration="1500"
        >
          What we do
        </div>
        <div
          className="service-head"
          data-aos="fade-in"
          data-aos-duration="1500"
        >
          CREATIVE SERVICES DESIGNED TO ELEVATE YOUR BUSINESS
        </div>
        <div
          className="service-head-container-2 text-center"
          data-aos="fade-in"
          data-aos-duration="1500"
        >
          Our team takes the time to understand your business, your audience,
          and your goals.
        </div>
      </div>
      <div className="service-content">
        <div
          className="service-content-items shadow-sm"
          data-aos="fade-in"
          data-aos-duration="1500"
        >
          <div className="service-content-icon">
            <LuLaptopMinimal size={60} />
          </div>
          <div className="service-content-heading">
            Web Design & Development
          </div>
          <div className="service-content-cont">
            Our team creates responsive, visually stunning websites built to
            convert.
          </div>
        </div>
        <div
          className="service-content-items shadow-sm"
          data-aos="fade-in"
          data-aos-duration="1500"
        >
          <div className="service-content-icon">
            <HiOutlineLightBulb size={50} />
          </div>
          <div className="service-content-heading">
            Mobile App Design & Development
          </div>
          <div className="service-content-cont">
            We design and build sleek, high-performing mobile apps for iOS and
            Android.
          </div>
        </div>
        <div
          className="service-content-items shadow-sm"
          data-aos="fade-in"
          data-aos-duration="1500"
        >
          <div className="service-content-icon">
            <HiOutlineLightBulb size={50} />
          </div>
          <div className="service-content-heading">Branding & Strategy</div>
          <div className="service-content-cont">
            A strong brand is more than just a logo it’s the voice of your
            company.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
