// src/Flipbook.js
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './Flipbook.css'; // Import CSS for styling

const Flipbook = ({ pages }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const isFlipping = useSpring({ opacity: currentPage ? 1 : 0 });

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flipbook-container">
      <animated.div className="flipbook" style={isFlipping}>
        <div className="page front">{pages[currentPage]}</div>
        <div className="page back">{pages[currentPage + 1] || ""}</div>
      </animated.div>
      <div className="controls">
        <button onClick={prevPage} disabled={currentPage === 0}>
          Previous
        </button>
        <button onClick={nextPage} disabled={currentPage === pages.length - 1}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Flipbook;
