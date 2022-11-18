import React from 'react';
import { Link } from 'react-router-dom';
import Banner from './../Main/component/Banner/Banner';
import Review from './../Main/component/Review/Review';
import iconPick from './../../assets/main/icon_pick.png';
import iconClock from './../../assets/main/icon_clock.png';
import iconOmija from './../../assets/main/icon_omija.png';
import iconBox from './../../assets/main/icon_box.png';
import iconSpeaker from './../../assets/main/icon_speaker.png';
import iconStar from './../../assets/main/icon_star.png';
import './Main.scss';

const Main = () => {
  return (
    <div className="container">
      <div className="main-wrap">
        <Banner />

        <div className="main-link-area">
          <Link to="/productList" className="icon1">
            <span>탁주</span>
          </Link>
          <Link to="/productList" className="icon2">
            <span>약·청주</span>
          </Link>
          <Link to="/productList" className="icon3">
            <span>과실주</span>
          </Link>
          <Link to="/productList" className="icon4">
            <span>증류주</span>
          </Link>
          <Link to="/productList" className="icon5">
            <span>선물세트</span>
          </Link>
          <Link to="/productList" className="icon6">
            <span>ONLY 술담화</span>
          </Link>
          <Link to="/productList" className="icon7">
            <span>이벤트</span>
          </Link>
          <Link to="/productList" className="icon8">
            <span>기업구매</span>
          </Link>
        </div>

        <div className="main-section">
          <div className="section-tit">
            <div className="icon">
              <img src={iconPick} />
            </div>
            <h3 className="tit">
              <strong>이번 주 술담화 PICK</strong>
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
              <img src={iconClock} />
            </div>
            <h3 className="tit">
              <strong>릴레이 특가</strong>
              <div className="time">
                <span>45 : 45 : 45</span>
                <span className="sub-txt">남았어요</span>
              </div>
            </h3>
          </div>
          <Link to="/productDetail" className="main-banner">
            <div className="thumb">
              <img src="/images/cat.jpeg" alt="샘플" />
            </div>
            <div className="info-area">
              <div className="product">
                <span className="tag red">특가</span>
                <p className="txt">
                  국내외 다양한 수상으로 인정받은 고앵이에요!
                </p>
                <p className="tit">[신상품] 귀여운 떼껄룩</p>
                <div className="info">
                  <ul className="review-area">
                    <li>
                      <img src={iconStar} />
                      <span>0</span>
                    </li>
                    <li>
                      리뷰 <span>0</span>
                    </li>
                  </ul>
                  <div className="price-area">
                    <p className="price">
                      <span>18,000</span>원
                    </p>
                    <p className="discount-price">
                      <span>16,200</span>원
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="main-section">
          <div className="section-tit">
            <div className="icon">
              <img src={iconOmija} />
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
              <img src={iconBox} />
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
              <img src={iconSpeaker} />
            </div>
            <h3 className="tit">
              <span>"이 순간 다른 분들은"</span>
              <strong>실시간 후기</strong>
            </h3>
          </div>
          <Review />
        </div>
      </div>
    </div>
  );
};

export default Main;
