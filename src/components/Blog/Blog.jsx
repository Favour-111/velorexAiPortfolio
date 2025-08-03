import React from "react";
import "./Blog.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Blog = () => {
  const blogs = [
    {
      image: "https://source.unsplash.com/featured/?reactjs,coding",
      name: "Mastering React: Hooks, Context & Performance Tips",
      blogcontent:
        "React has become the go-to library for building modern web apps, but optimizing performance and managing state efficiently remains a challenge. In this comprehensive guide, we break down advanced React concepts including `useEffect`, `useMemo`, `useCallback`, and Context API to help you reduce unnecessary renders, avoid prop‑drilling, and maintain clean, scalable code. We also delve into practical performance strategies—lazy loading, code splitting with `React.lazy` and `Suspense`, memoization best practices, and using React Profiler to catch performance bottlenecks early. By the end of this post, you'll be equipped with actionable techniques to build faster, smarter React applications suited for both small-scale UI and complex enterprise projects.",
      date: "August 1, 2025",
      author: "Obaloluwa Omojola",
    },
    {
      image: "https://source.unsplash.com/featured/?backend,programming",
      name: "Backend Battle: Node.js vs. Django for Modern APIs",
      blogcontent:
        "Choosing the right backend framework is critical for project success, especially when building RESTful APIs or full-stack apps. In this deep dive, we compare Node.js (JavaScript) and Django (Python) across essential criteria: request handling, middleware architecture, ORM capabilities, scalability, community support, and developer productivity. Node.js excels in event-driven real-time applications, while Django offers an integrated admin interface, authentication, and security out-of-the-box. We provide real-world use cases, pros/cons of each stack, and guidelines to help you make a decision based on team expertise, project scale, and long-term maintenance considerations.",
      date: "July 28, 2025",
      author: "Adaeze Nwosu",
    },
    {
      image: "https://source.unsplash.com/featured/?developer,workspace",
      name: "Top 10 VS Code Extensions Every Developer Should Use",
      blogcontent:
        "VS Code is famous for its extensibility—and when paired with the right tools, it becomes a productivity powerhouse. In this post, we highlight ten must-have extensions: Prettier for consistent formatting, ESLint for error catching, GitLens for deeper Git insights, Live Server for real-time feedback, TabNine (AI‑powered autocomplete), REST Client for quick API testing, Docker support, IntelliSense enhancements, Markdown preview tools, and dark/light theme switchers for accessibility. Each extension includes setup tips, use‑cases, and how they integrate into everyday workflows—from front‑end development to full-stack automation.",
      date: "July 25, 2025",
      author: "David Akinyemi",
    },
    {
      image: "https://source.unsplash.com/featured/?ux,web",
      name: "Designing for Devs: UI/UX Basics Every Coder Should Know",
      blogcontent:
        "You don't need formal design training to build interfaces that look professional and function intuitively. This article covers foundational UI/UX principles every developer should understand: layout and spacing with whitespace, visual hierarchy, accessible color palettes, button feedback, typographic clarity, navigation patterns, mobile-first responsiveness, and user flows. We also offer guidelines on collaborating with designers, preparing design tokens, and contributing to wireframes. By the end, you’ll be better equipped to integrate usability into your code, improving both user satisfaction and design-developer communication.",
      date: "July 20, 2025",
      author: "Zainab Sule",
    },
    {
      image: "https://source.unsplash.com/featured/?database,code",
      name: "Building Scalable Apps with MongoDB and Mongoose",
      blogcontent:
        "MongoDB offers schema flexibility, high performance, and horizontal scaling—perfect for agile application development. In this guide, we cover setting up a MongoDB cluster, designing effective document models, and incorporating Mongoose in a Node.js stack. Topics include schema definitions, validation, population for relations, pagination, aggregation pipelines, indexing, and performance tuning. You'll also learn best practices for error handling, versioning documents, and structuring schema migrations. This article equips developers to build robust backends with MongoDB and Mongoose that scale, remain maintainable, and adapt to changing data needs.",
      date: "July 15, 2025",
      author: "Uche Eze",
    },
    {
      image: "https://source.unsplash.com/featured/?git,programming",
      name: "Understanding Git the Right Way: From Beginner to Pro",
      blogcontent:
        "Git is an indispensable tool for developers but many rely only on basic commands. In this detailed tutorial, we begin with concepts like repositories, branching, merging, and commits, then advance to techniques such as interactive rebasing, resolving complex merge conflicts, cherry‑picking changes, stashing work, managing remote branches, and using Git hooks. We'll also explore branching strategies like Git Flow and trunk-based workflows, common pitfalls, and collaborative Git etiquette. With real code examples and troubleshooting tips, this guide helps elevate your version control skills, whether you're working solo or collaborating on large projects.",
      date: "July 10, 2025",
      author: "Chinedu Obi",
    },
  ];

  var settings = {
    dots: true,
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
                <div className="blog-container-item">
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
    </div>
  );
};

export default Blog;
