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
      blogcontent:
        "React has become the go‑to library for modern web apps, but mastering it means understanding more than just components. In this deep dive, we explore how to effectively use React hooks like useEffect and useReducer to manage state and side effects. We also unpack how Context API can be used for state sharing without prop drilling. Finally, we’ll look at performance optimization techniques like memoization, lazy loading, and code splitting to ensure your React apps run smoothly under heavy user loads.",
      date: "August 1, 2025",
      author: "Obaloluwa Omojola",
    },
    {
      image:
        "https://media.istockphoto.com/id/1317706831/photo/api-application-programming-interface-software-development-tool-business-modern-technology.jpg?s=1024x1024&w=is&k=20&c=L3b3Yi5MhR--0Y4O_AaFl6ARfDeM9BWfwvsGqECf6hw=",
      name: "Backend Battle: Node.js vs. Django for Modern APIs",
      blogcontent:
        "Choosing the right backend framework is critical for any modern application. Node.js offers speed and scalability with its non-blocking I/O, making it ideal for real-time apps. Django, on the other hand, provides a more structured approach with built-in admin, ORM, and security features. In this article, we compare both from development speed, community support, scalability, and ease of learning to help you decide which framework best suits your project needs.",
      date: "July 28, 2025",
      author: "Adaeze Nwosu",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1685086785013-acc71c40e5fe?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Top 10 VS Code Extensions Every Developer Should Use",
      blogcontent:
        "VS Code is famous for its extensibility—and paired with the right tools, it becomes a superpower for developers. In this blog, we reveal our top 10 VS Code extensions that can improve your productivity, debugging, and code quality. From Prettier and ESLint for cleaner code to GitLens for powerful Git insights, each tool serves a specific purpose. We also introduce some hidden gems like REST Client and TabNine that can significantly enhance your workflow.",
      date: "July 25, 2025",
      author: "David Akinyemi",
    },
    {
      image:
        "https://images.unsplash.com/photo-1563206767-5b18f218e8de?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Designing for Devs: UI/UX Basics Every Coder Should Know",
      blogcontent:
        "You don't need formal design training to build interfaces that look professional and feel intuitive. In this post, we explore essential UI/UX principles every developer should know—from layout and visual hierarchy to color theory and accessibility. Learn how to use whitespace effectively, ensure consistency, and create responsive designs that adapt across screen sizes. Whether you're building a portfolio site or a complex dashboard, good design can make your app more usable and enjoyable.",
      date: "July 20, 2025",
      author: "Zainab Sule",
    },
    {
      image:
        "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Building Scalable Apps with MongoDB and Mongoose",
      blogcontent:
        "MongoDB offers schema flexibility and horizontal scaling—perfect for modern development. In this article, we break down how to design scalable data models using MongoDB’s document-based structure. We also demonstrate how Mongoose can simplify interactions with MongoDB using schemas, validations, and middleware. If you're building a large application with high traffic, understanding connection pooling, indexing, and aggregation pipelines is key—and we cover them all right here.",
      date: "July 15, 2025",
      author: "Uche Eze",
    },
    {
      image:
        "https://images.unsplash.com/photo-1607743386830-f198fbd7f9c4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Understanding Git the Right Way: From Beginner to Pro",
      blogcontent:
        "Git is a must‑know skill for every developer but many only scratch the surface. This blog post walks you through Git from the ground up—understanding commits, branches, merges, and rebases. We'll explore advanced concepts like stash, cherry-pick, bisect, and hooks. Learn how to resolve merge conflicts like a pro and leverage Git workflows like GitFlow and trunk-based development to streamline collaboration in teams. Whether you're a solo coder or working in a large enterprise, mastering Git will set you apart.",
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
  const [blogData, setBlogData] = useState({
    image: "",
    name: "",
    blogcontent: "",
    date: "",
    author: "",
  });
  // console.log(blogData);

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
                    setBlogData({
                      image: item.image,
                      name: item.name,
                      blogcontent: item.blogcontent,
                      date: item.date,
                      author: item.author,
                    });
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
            <div className="w-100 d-flex justify-content-end">
              <div
                className="cancel-btn shadow-sm"
                onClick={() => {
                  setBlogOpen(false);
                }}
              >
                <IoClose size={20} />
              </div>
            </div>
            <div className="blog-large-image">
              <img src={blogData.image} alt="" />
            </div>
            <div className="blog-large-title">{blogData.name}</div>
            <div className="blog-large-Date">{blogData.date}</div>
            <div className="blog-large-Author">{blogData.author}</div>
            <div className="blog-large-content">{blogData.blogcontent}</div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Blog;
