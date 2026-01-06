import React, { useState, useEffect, useRef } from 'react';
import './VideoGallery.css';

const CustomVideoCard = ({ video, category, onClick }) => {
  const [maxHeight, setMaxHeight] = useState(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const updateHeight = () => {
      if (cardRef.current) {
        const windowHeight = window.innerHeight;
        const calculatedHeight = windowHeight * 0.4; // 40% of window height
        setMaxHeight(calculatedHeight);
      }
    };

    // Update the height on initial render and when window is resized
    updateHeight();
    window.addEventListener('resize', updateHeight);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateHeight);
    };
  }, []);

  return (
    <div className="video-gallery_item" ref={cardRef} onClick={() => onClick(video)} style={{ maxHeight }}>
      <a href="#" className={`video-gallery-item_link cardContainer ${category}-bg`}>
        <div className={`video-gallery-item_bg ${category}-bg`}></div>
        <div className="video-gallery-item_title">{video.title}</div>
        <div className="video-gallery-item_duration-box">
          Duration: <span className="video-gallery-item_duration">{video.duration}</span>
        </div>
        <div>
          <p className="video-gallery-item_description">{video.description.slice(0, 120)}</p>
        </div>
      </a>
    </div>
  );
};

export default CustomVideoCard;
