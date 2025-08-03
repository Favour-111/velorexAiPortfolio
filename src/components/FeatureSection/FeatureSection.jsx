import React, { useState } from "react";
import "./FeatureSection.css";

const content = [
  {
    title: "Creativity Without Limits",
    description: "We push boundaries to create work that stands out.",
    image:
      "https://images.unsplash.com/photo-1553341244-22630e46e42a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Strategic Excellence",
    description:
      "Every idea is rooted in a deep understanding of your goals and audience.",
    image:
      "https://images.unsplash.com/photo-1573496546471-398eacdbd679?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Client Collaboration",
    description: "Your vision is at the heart of everything we do.",
    image:
      "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const FeaturesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="features-container">
      <div className="features-left">
        <div className="features-list ">
          {content.map((item, index) => (
            <div
              key={index}
              className={`feature-item ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <div
                className={`vertical-line ${
                  activeIndex === index ? "active" : ""
                }`}
              />
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="features-right">
        <img
          key={activeIndex} // triggers transition
          src={content[activeIndex].image}
          alt={content[activeIndex].title}
          className="feature-image"
        />
      </div>
    </div>
  );
};

export default FeaturesSection;
