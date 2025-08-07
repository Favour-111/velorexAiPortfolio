import React from "react";
import "./About.css";
import Footer from "../../components/Footer/Footer";
import AboutNav from "../../components/AboutNav/AboutNav";
import NavSm from "../../components/NavSm/NavSm";
import AboutNavSm from "../../components/AboutNavSm/AboutNavSm";
import { GoGraph, GoLightBulb } from "react-icons/go";
import { IoConstructOutline } from "react-icons/io5";
import Client from "../../components/Client/Client";
import BackToTop from "../../components/BackToTop/BackToTop";
const About = () => {
  return (
    <div>
      <div className="about-banner">
        <AboutNav />
        <AboutNavSm />
        <BackToTop />
        <div className="bar-item">
          <div className="bar-sub-head">about our agency</div>
          <div className="about-head">
            YOUR{"  "} PARTNERS {"  "} IN {"  "} DIGITAL
            <br /> {"  "} SUCCESS
          </div>
          <div className="about-head-sm-text">
            We are a team of passionate creatives and innovative thinkers.
          </div>
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
      <div className="percentage-background">
        <div className="percentage-overlay">
          <div>
            <div
              className="development-head"
              data-aos="fade-in"
              data-aos-duration="1500"
            >
              Development Skill
            </div>
            <div className="development-p-itm-body">
              <div
                className="development-itm"
                data-aos="fade-in"
                data-aos-duration="1500"
              >
                <div className="development-percentage-bar">
                  <div className="development-bar">
                    <div className="development-name-cont">
                      <div className="development-type">Development</div>
                      <div className="percentage">95%</div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="development-itm"
                data-aos="fade-in"
                data-aos-duration="1500"
              >
                <div className="development-percentage-bar">
                  <div className="development-bar2">
                    <div className="development-name-cont">
                      <div className="development-type">DeSign</div>
                      <div className="percentage">85%</div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="development-itm"
                data-aos="fade-in"
                data-aos-duration="1500"
              >
                <div className="development-percentage-bar">
                  <div className="development-bar3">
                    <div className="development-name-cont">
                      <div className="development-type">Print</div>
                      <div className="percentage">80%</div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="development-itm"
                data-aos="fade-in"
                data-aos-duration="1500"
              >
                <div className="development-percentage-bar">
                  <div className="development-bar4">
                    <div className="development-name-cont">
                      <div className="development-type">Marketing</div>
                      <div className="percentage">70%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Client />
      </div>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default About;
