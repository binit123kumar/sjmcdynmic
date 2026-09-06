import React, { useState, useEffect } from 'react';

const BlinkingNews = ({ news }) => {
  const [isBlinking, setIsBlinking] = useState(true);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(prevState => !prevState);
    }, 500); // Adjust blinking speed as needed

    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <div>
      {isBlinking && (
        <marquee>
          <span>{news}</span>
        </marquee>
      )}
    </div>
  );
};

export default BlinkingNews;