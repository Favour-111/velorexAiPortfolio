import React, { useState } from "react";
import "./Testimonial.css";
const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = [
    {
      name: "Sarah Johnson",
      testimonial:
        "Working with this team to build my fashion e-commerce website was the best decision I made. From layout to functionality, everything was customized to suit my brand. They didn’t just build a website — they brought my vision to life, and even now, they help manage updates, ensuring my customers always have the best experience.",
      image:
        "https://images.unsplash.com/photo-1507152832244-10d45c7eda57?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "David Kim",
      testimonial:
        "Our education platform needed a major revamp. These guys stepped in and totally transformed our site into a modern, responsive, and fully functional learning hub. They're proactive, reliable, and really understand design with purpose. Highly recommend.",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg",
    },
    {
      name: "Linda Garcia",
      testimonial:
        "They didn’t just create a website  they created an experience. From animations to structure, the final product was beyond our expectations. Plus, their responsiveness and ability to interpret vague ideas into clear interfaces is amazing.",
      image:
        "https://images.unsplash.com/photo-1495490140452-5a226aef25d4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Michael Smith",
      testimonial:
        "The mobile app they developed for us was clean, intuitive, and reliable. It reflects our values and makes onboarding our users much easier. The team didn’t stop after launch their ongoing support has been outstanding, keeping everything secure and up to date.",
      image:
        "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Amina Bello",
      testimonial:
        "I needed a website that not only displayed my menu but also allowed for real-time ordering and customer interaction. This team delivered exactly that. Their continued support and maintenance help me focus more on my food while they handle the tech side professionally.",
      image:
        "https://images.unsplash.com/photo-1507152927179-bc4ebfef7103?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "John Adeyemi",
      testimonial:
        "Our education platform needed a major revamp. These guys stepped in and totally transformed our site into a modern, responsive, and fully functional learning hub. They're proactive, reliable, and really understand design with purpose. Highly recommend.",
      image:
        "https://images.unsplash.com/photo-1614890085618-0e1054da74f8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <div>
      <div className="testimonial-container">
        <div className="testimonial-sub-head">OUR CLIENTS TESTIMONIALS</div>
        <div className="testimonial-head">
          Trusted by
          <br /> leading experts
        </div>
        <div className="testimonial-images">
          {testimonials.map((t, index) => (
            <img
              key={index}
              src={t.image}
              alt={t.name}
              className={`testimonial-img ${
                activeIndex === index ? "active" : ""
              }`}
              onMouseOver={() => setActiveIndex(index)}
            />
          ))}
        </div>
        <div className="testimonial-content fade-in">
          <p>{testimonials[activeIndex].testimonial}</p>
          <h3>{testimonials[activeIndex].name}</h3>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
