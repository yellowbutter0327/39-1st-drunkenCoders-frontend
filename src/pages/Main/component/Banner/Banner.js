import React, { useState, useEffect } from 'react';
import './Banner.scss';

const Banner = () => {
  const [count, setCount] = useState(0);
  const [xValue, setXValue] = useState({
    transform: `translateX(-${count}00%)`,
  });

  const moveSlide = i => {
    let idx = count + i;

    if (idx >= bannerList.length) {
      idx = 0;
    } else if (idx < 0) {
      idx = bannerList.length - 1;
    }

    setCount(idx);
  };

  useEffect(() => {
    setXValue({ transform: `translateX(-${count}00%)` });

    const interval = setTimeout(() => {
      moveSlide(1);
    }, 3000);

    return () => clearTimeout(interval);
  }, [count]);

  return (
    <div className="banner-slider">
      <div className="slider-box" style={xValue}>
        {bannerList.map(img => {
          return (
            <div className="slide" key={img.id}>
              <img src={img.src} alt="샘플 배너" />
            </div>
          );
        })}
      </div>
      <div className="slide-btn">
        <button
          type="button"
          className="btn-prev"
          onClick={() => {
            moveSlide(-1);
          }}
        >
          prev
        </button>
        <button
          type="button"
          className="btn-next"
          onClick={() => {
            moveSlide(1);
          }}
        >
          next
        </button>
      </div>
      <div className="slide-pagination">
        <span className="count">{count + 1}</span>/
        <span>{bannerList.length}</span>
      </div>
    </div>
  );
};

export default Banner;

const bannerList = [
  { id: 1, src: '/images/visual_1.jpg' },
  { id: 2, src: '/images/visual_2.jpg' },
  { id: 3, src: '/images/visual_3.jpg' },
  { id: 4, src: '/images/visual_4.jpg' },
];
