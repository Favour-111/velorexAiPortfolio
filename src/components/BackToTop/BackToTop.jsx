import React from "react";
import "./BackToTop.css";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
const BackToTop = () => {
  return (
    <div>
      <div
        className="backtoTop-container shadow"
        onClick={() => window.scrollTo(0, 0)}
      >
        <MdKeyboardDoubleArrowUp size={20} />
      </div>
    </div>
  );
};

export default BackToTop;
