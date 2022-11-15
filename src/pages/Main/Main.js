import React from 'react';
import { Link } from 'react-router-dom';

import './Main.scss';

const Main = () => {
  return (
    <div className="container">
      <div className="main-wrap">
        <div className="main-slider">
          <div className="slider-box">
            <div className="slide">
              <img />
            </div>
            <div className="slide">
              <img />
            </div>
            <div className="slide">
              <img />
            </div>
          </div>
          <div className="slide-btn">
            <button type="button">prev</button>
            <button type="button">next</button>
          </div>
        </div>

        <div className="main-link-area">
          <Link to="/">
            <img />
            <span>탁주</span>
          </Link>
          <Link to="/">
            <img />
            <span>약·청주</span>
          </Link>
          <Link to="/">
            <img />
            <span>과실주</span>
          </Link>
          <Link to="/">
            <img />
            <span>증류주</span>
          </Link>
          <Link to="/">
            <img />
            <span>선물세트</span>
          </Link>
          <Link to="/">
            <img />
            <span>ONLY 술담화</span>
          </Link>
          <Link to="/">
            <img />
            <span>이벤트</span>
          </Link>
          <Link to="/">
            <img />
            <span>기업구매</span>
          </Link>
        </div>

        <div className="main-section">
          <div className="section-tit">
            <div className="icon">
              <img />
            </div>
            <h3 className="tit">
              <strong>이번주 술담화 PICK</strong>
              <span>이 술은 어때요?</span>
            </h3>
            <Link to="/productList" className="btn-txt">
              더보기
            </Link>
          </div>
          <div className="product-list" />
        </div>

        <div className="main-section">
          <div className="section-tit">
            <div className="icon">
              <img />
            </div>
            <h3 className="tit">
              <strong>이번주 술담화 PICK</strong>
              <span className="time">45 : 45 : 45</span>
              <span className="sub-txt">남았어요</span>
            </h3>
          </div>
          <div className="main-banner" />
        </div>

        <div className="main-section">
          <div className="section-tit">
            <div className="icon">
              <img />
            </div>
            <h3 className="tit">
              <strong>오미자가 들어간 우리술</strong>
              <span>오미자/복분자로 피로 회복해요!</span>
            </h3>
            <Link to="/productList" className="btn-txt">
              더보기
            </Link>
          </div>
          <div className="product-list" />
        </div>

        <div className="main-section">
          <div className="section-tit">
            <div className="icon">
              <img />
            </div>
            <h3 className="tit">
              <strong>담화박스에 담긴 술!</strong>
              <span>나만의 인생술을 경험하셨나요?</span>
            </h3>
            <Link to="/productList" className="btn-txt">
              더보기
            </Link>
          </div>
          <div className="product-list" />
        </div>

        <div className="main-section type-center">
          <div className="section-tit">
            <div className="icon">
              <img />
            </div>
            <h3 className="tit">
              <span>"이 순간 다른 분들은"</span>
              <strong>실시간 후기</strong>
            </h3>
            <Link to="/productList" className="btn-txt">
              더보기
            </Link>
          </div>
          <div className="product-list" />
        </div>
      </div>
    </div>
  );
};

export default Main;
