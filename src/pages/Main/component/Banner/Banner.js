import React, { useState, useEffect } from 'react';
import './Banner.scss';

const Banner = () => {
  const [current, setCurrent] = useState(0);
  const [xValue, setXValue] = useState({
    transform: `translateX(-${current}00%)`,
  });

  const moveSlide = i => {
    let idx = current + i;

    if (idx >= bannerSlider.length) {
      idx = 0;
    } else if (idx < 0) {
      idx = bannerSlider.length - 1;
    }

    setCurrent(idx);
  };

  useEffect(() => {
    setXValue({ transform: `translateX(-${current}00%)` });
  }, [current]);

  return (
    <div className="banner-slider">
      <div className="slider-box" style={xValue}>
        {bannerSlider.map(img => {
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
        <span className="current">{current + 1}</span>/
        <span>{bannerSlider.length}</span>
      </div>
    </div>
  );
};

export default Banner;

const bannerSlider = [
  { id: 1, src: '/images/visual_1.jpg' },
  { id: 2, src: '/images/visual_2.jpg' },
  { id: 3, src: '/images/visual_3.jpg' },
];
