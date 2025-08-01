import React from "react";
import Nav from "../../components/Nav/Nav";
import "./Home.css";
import NavSm from "../../components/NavSm/NavSm";
const Home = () => {
  return (
    <div>
      <div className="Banner">
        <Nav />
        <NavSm />
        <div></div>
      </div>
      <div style={{ paddingTop: "100px", height: "2000px" }}>
        <h2>Scroll down and watch the navbar background change.</h2>
      </div>
    </div>
  );
};

export default Home;
