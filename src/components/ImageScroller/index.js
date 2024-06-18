import React, { useState, useEffect } from 'react';
import './index.css'; // Import CSS file for styles

const ImageScroller = ({ images }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const imageWidth = 200; // Adjust as needed

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prevPosition) => (prevPosition + 1) % images.length);
    }, 3000); // Interval for updating scroll position, adjust as needed

    return () => clearInterval(interval);
  }, [images.length]);

  const containerWidth = images.length * imageWidth;

  return (
    <div className="image-scroller-container" style={{ width: '100%', overflow: 'hidden' }}>
      <div className="image-scroller-wrapper" style={{ width: containerWidth }}>
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt=""
            className={`image-slide ${scrollPosition === index ? 'active' : ''}`}
            style={{ width: imageWidth }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageScroller;