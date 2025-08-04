import React, { useState } from "react";
import "./Blog.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoClose } from "react-icons/io5";
const Blog = () => {
  const blogs = [
    {
      image:
        "https://images.unsplash.com/photo-1594904351111-a072f80b1a71?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Mastering React: Hooks, Context & Performance Tips",
      blogcontent: "React has become the go‑to library for modern web apps...",
      date: "August 1, 2025",
      author: "Obaloluwa Omojola",
    },
    {
      image:
        "https://media.istockphoto.com/id/1317706831/photo/api-application-programming-interface-software-development-tool-business-modern-technology.jpg?s=1024x1024&w=is&k=20&c=L3b3Yi5MhR--0Y4O_AaFl6ARfDeM9BWfwvsGqECf6hw=",
      name: "Backend Battle: Node.js vs. Django for Modern APIs",
      blogcontent: "Choosing the right backend framework is critical...",
      date: "July 28, 2025",
      author: "Adaeze Nwosu",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1685086785013-acc71c40e5fe?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Top 10 VS Code Extensions Every Developer Should Use",
      blogcontent:
        "VS Code is famous for its extensibility—and paired with the right tools...",
      date: "July 25, 2025",
      author: "David Akinyemi",
    },
    {
      image:
        "https://images.unsplash.com/photo-1563206767-5b18f218e8de?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Designing for Devs: UI/UX Basics Every Coder Should Know",
      blogcontent:
        "You don't need formal design training to build interfaces that look professional...",
      date: "July 20, 2025",
      author: "Zainab Sule",
    },
    {
      image:
        "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Building Scalable Apps with MongoDB and Mongoose",
      blogcontent:
        "MongoDB offers schema flexibility and horizontal scaling—perfect for modern development...",
      date: "July 15, 2025",
      author: "Uche Eze",
    },
    {
      image:
        "https://images.unsplash.com/photo-1607743386830-f198fbd7f9c4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Understanding Git the Right Way: From Beginner to Pro",
      blogcontent:
        "Git is a must‑know skill for every developer but many only scratch the surface...",
      date: "July 10, 2025",
      author: "Chinedu Obi",
    },
  ];

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // ✅ Enable auto-scrolling
    autoplaySpeed: 3000, // ✅ Wait for 3 seconds before scrolling
    pauseOnHover: true, // ✅ Pause if user hovers
    pauseOnFocus: true, // ✅ Pause if user interacts

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: false,
          className: "center",
          centerPadding: "0",
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [blogOpen, setBlogOpen] = useState(false);
  return (
    <div>
      <div className="blog-container">
        <div className="blog-sub-head">Latest News</div>
        <div className="blog-head">
          Latest from <br />
          our blog
        </div>

        <div className="watching">
          <Slider {...settings}>
            {blogs.map((item) => {
              return (
                <div
                  className="blog-container-item"
                  onClick={() => {
                    setBlogOpen(true);
                  }}
                >
                  <div className="blog-image">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="blog-title">{item.name}</div>
                  <div className="Read-more">Read more</div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      {blogOpen ? (
        <div className="blog-overlay">
          <div className="blog-large-container">
            <div
              className="cancel-btn"
              onClick={() => {
                setBlogOpen(false);
              }}
            >
              <IoClose size={20} />
            </div>
            <div className="blog-large-image">
              <img
                src="https://images.unsplash.com/photo-1563206767-5b18f218e8de?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <div className="blog-large-title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur, laudantium!
            </div>
            <div className="blog-large-Date">3/5/2030</div>
            <div className="blog-large-Author">Obaloluwa</div>
            <div className="blog-large-content">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab
              aspernatur, vel incidunt, amet quod perferendis molestias impedit
              magnam ipsam harum, eligendi in? Ad corporis ex voluptatem
              veritatis, saepe dolorem quo excepturi adipisci laboriosam et!
              Accusamus cumque, unde vel exercitationem quisquam veniam
              obcaecati dolore adipisci maxime voluptates mollitia saepe. Natus
              commodi blanditiis nulla ipsa magnam vel quasi, necessitatibus
              explicabo molestiae, nemo facilis voluptatibus! Excepturi maxime
              commodi, natus possimus, non optio consequatur voluptates
              repellendus minus perspiciatis blanditiis accusamus deleniti.
              Nostrum autem perferendis exercitationem est facilis debitis
              consequuntur labore voluptas ut odio repudiandae, nulla quia nemo
              laborum voluptatem expedita natus, doloribus facere assumenda?
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Blog;
