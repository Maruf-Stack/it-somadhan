import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { animateScroll as scroll } from "react-scroll";
function Top() {
  const handleClick = (event) => {
    event.preventDefault();
    scroll.scrollToTop({ duration: 0 });
  };
  return (
    <div className="mt-20">
      <div className="text-center">
        <button onClick={handleClick} className="top-btn">
          Go to top
          <AiOutlineArrowUp className="inline ml-1"></AiOutlineArrowUp>
        </button>
      </div>
    </div>
  );
}

export default Top;
