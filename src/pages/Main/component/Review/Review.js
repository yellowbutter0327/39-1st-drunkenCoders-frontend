import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Review.scss';

const Review = () => {
  const [count, setCount] = useState(0);

  const prev = () => {};
  const next = () => {};

  return (
    <div className="review-slider">
      <div className="review-list col3">
        <Link to="/" className="review-item">
          <div className="thumb">
            <img src="/images/cat.jpeg" alt="샘플" />
          </div>
          <div className="rating-bg">
            <div className="rating" style={{ width: '100%' }} />
          </div>
          <p className="txt">풀건우</p>
          <p className="name">풀건우</p>
        </Link>
        <Link to="/" className="review-item">
          <div className="thumb">
            <img src="/images/cat.jpeg" alt="샘플" />
          </div>
          <div className="rating-bg">
            <div className="rating" style={{ width: '80%' }} />
          </div>
          <p className="txt">
            깃상준깃상준깃상준깃상준깃상준깃상준깃상준깃상준깃상준깃상준깃상준깃상준깃상준깃상준
          </p>
          <p className="name">깃상준</p>
        </Link>
        <Link to="/" className="review-item">
          <div className="thumb">
            <img src="/images/cat.jpeg" alt="샘플" />
          </div>
          <div className="rating-bg">
            <div className="rating" style={{ width: '40%' }} />
          </div>
          <p className="txt">
            킹은혜킹은혜킹은혜킹은혜킹은혜킹은혜킹은혜킹은혜킹은혜킹은혜킹은혜킹은혜킹은혜킹은혜킹은혜킹은혜킹은혜킹은혜킹은혜킹은혜킹은혜킹은혜킹은혜
          </p>
          <p className="name">킹은혜</p>
        </Link>
        <Link to="/" className="review-item">
          <div className="thumb">
            <img src="/images/cat.jpeg" alt="샘플" />
          </div>
          <div className="rating-bg">
            <div className="rating" style={{ width: '100%' }} />
          </div>
          <p className="txt">풀건우</p>
          <p className="name">풀건우</p>
        </Link>
        <Link to="/" className="review-item">
          <div className="thumb">
            <img src="/images/cat.jpeg" alt="샘플" />
          </div>
          <div className="rating-bg">
            <div className="rating" style={{ width: '80%' }} />
          </div>
          <p className="txt">
            깃상준깃상준깃상준깃상준깃상준깃상준깃상준깃상준깃상준깃상준깃상준깃상준깃상준깃상준
          </p>
          <p className="name">깃상준</p>
        </Link>
        <Link to="/" className="review-item">
          <div className="thumb">
            <img src="/images/cat.jpeg" alt="샘플" />
          </div>
          <div className="rating-bg">
            <div className="rating" style={{ width: '40%' }} />
          </div>
          <p className="txt">
            킹은혜킹은혜킹은혜킹은혜킹은혜킹은혜킹은혜킹은혜킹은혜킹은혜킹은혜킹은혜킹은혜킹은혜킹은혜킹은혜킹은혜킹은혜킹은혜킹은혜킹은혜킹은혜킹은혜
          </p>
          <p className="name">킹은혜</p>
        </Link>
      </div>
      <div className="slide-btn">
        <button type="button" className="btn-prev">
          prev
        </button>
        <button type="button" className="btn-next">
          next
        </button>
      </div>
    </div>
  );
};

export default Review;
