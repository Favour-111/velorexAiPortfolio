import React, { useState } from "react";
import "./WebsiteExpert.css";
const WebsiteExpert = () => {
  const Faq = [
    {
      name: "CUSTOM WEB & APP DESIGN",
      content:
        "Tailored, creative designs that represent your unique brand and captivate your audience.",
    },
    {
      name: "RESPONSIVE DEVELOPMENT",
      content:
        "Websites that look great and work seamlessly on any device—mobile, tablet, or desktop.",
    },
    {
      name: "E-COMMERCE SOLUTIONS",
      content:
        "Fully integrated e-commerce websites that allow you to sell products online with ease.",
    },
    {
      name: "UI/UX DESIGN",
      content:
        "Focusing on user experience and interface design, we ensure visitors have an intuitive and engaging experience.",
    },
    {
      name: "ON GOING WEBSITE MAINTENANCE",
      content:
        "We offer continued support to keep your website up-to-date, secure, and performing at its best.",
    },
  ];
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div>
      <div
        className="WebsiteExpert-container"
        data-aos="fade-in"
        data-aos-duration="1500"
      >
        <div className="expert-left">
          <div className="expert-heading">Websites Experts</div>
          <div className="expert-content">
            A great website is essential for capturing attention and converting
            visitors into customers. Our web design services focus on creating
            responsive, visually appealing, and user-friendly websites that are
            optimized for performance across all devices.
          </div>
          <div className="expert-numbers-cont">
            <div className="expert-itm">
              <div className="exprt-num">48+</div>
              <div className="exprt-name">Project done</div>
            </div>
            <div className="expert-itm">
              <div className="exprt-num">90+</div>
              <div className="exprt-name">Happy Client</div>
            </div>
          </div>
        </div>
        <div className="FAQ">
          <div className="faq-container">
            {Faq.map((item, index) => (
              <div className="faq-item" key={index}>
                <div className="faq-question" onClick={() => toggleFAQ(index)}>
                  {item.name}
                  <span className="faq-toggle">
                    {openIndex === index ? "-" : "+"}
                  </span>
                </div>
                <div
                  className={`faq-answer ${openIndex === index ? "open" : ""}`}
                >
                  {item.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteExpert;
