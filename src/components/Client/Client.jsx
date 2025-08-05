import React from "react";
import "./Client.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Client = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true, // ✅ Enable auto-scrolling
    autoplaySpeed: 3000, // ✅ Wait for 3 seconds before scrolling
    pauseOnHover: true, // ✅ Pause if user hovers
    pauseOnFocus: true, // ✅ Pause if user interacts

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  const clientReviews = [
    {
      name: "Sarah Johnson",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      businessType: "Fashion Retailer — UrbanStyles Boutique",
      review:
        "Working with this team was an absolute game-changer. They built a sleek, responsive website for my fashion store that doubled my online sales. The attention to detail and creativity exceeded all expectations!",
    },
    {
      name: "David Adebayo",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      businessType: "Food Delivery Service — Naija Bites Express",
      review:
        "Their work is top-notch! From mobile responsiveness to speed optimization, everything was smooth. Our customer feedback improved and delivery orders now flow in faster than ever.",
    },
    {
      name: "Isabella Chen",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      businessType: "Tech Startup — SmartHive Solutions",
      review:
        "Professional, efficient, and highly innovative. They understood our product vision and turned it into a fully functioning platform. Would recommend them to any startup looking for reliable tech partners.",
    },
    {
      name: "Michael Okonkwo",
      image: "https://randomuser.me/api/portraits/men/41.jpg",
      businessType: "Real Estate Agency — PrimeHome Realty",
      review:
        "They created a user-friendly and visually appealing site for my real estate listings. Clients can now book viewings online, and leads have increased significantly. Thank you for your excellent work!",
    },
  ];

  return (
    <div>
      <div className="working-section">
        <div className="working-section-overlay">
          <div className="working-sub-head">Let's work together</div>
          <div className="working-head">BUILD AN AMZING SITE TODAY!</div>
          <button className="fancy-button">Get In Touch</button>
        </div>
      </div>
      <div className="client-slider-container ">
        <div className="client-text">
          <div className="client-text-head">Our client</div>
          <div className="client-text-content">
            Get to Know the Visionaries We’re Proud to Partner With
          </div>
          <button className="fancy-button">Contact Us</button>
        </div>

        <div className="client-slider ">
          <div className="watching">
            <Slider {...settings}>
              {clientReviews.map((item) => {
                return (
                  <div className="client-container-item shadow-sm">
                    <div className="client-text">{item.review}</div>
                    <div className="client-info">
                      <div>
                        <img src={item.image} alt="" />
                      </div>
                      <div>
                        <div className="client-name">{item.name} </div>
                        <div className="client-business">
                          {item.businessType}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
