import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./Pages/Home/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: false, // whether animation should happen only once
    });
  }, []);
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<About />} path="/about-us" />
      <Route element={<Contact />} path="/contact-us" />
    </Routes>
  );
}

export default App;
