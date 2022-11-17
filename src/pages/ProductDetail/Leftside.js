import React, { useState, useEffect } from 'react';
import ProductTab from './ProductTab';
import Review from './Review';
import './Leftside.scss';

const Leftside = () => {
  const [handleClick, sethandleClick] = useState('false');
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch('/data/PRODUCT_SAMPLE.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setProductData(data);
        console.log(data);
      });
  }, []);

  const handleToggle = () => {
    sethandleClick(!handleClick);
  };
  return (
    <div className="left-side">
      <div className="detail-box">
        <div className="detail-img">
          <img
            className="detailImg"
            src="./images/kunwooSample/sample.png"
            id="img"
          />
        </div>
        <div className="detail-string">
          <div className="sector-first">
            <div className="detail-mainString">문희 오미자 가향주</div>
          </div>
          <div className="sector-second">
            <div className="detail-secondString">
              문경 오미자가 들어간 프리미엄 탁주
            </div>
            <div className="detail-hashtag">
              #오미자 새콤달콤 #모든 과정 수제
            </div>
            <div className="rating">
              <div className="rating-star">
                <div className="rating-bg">
                  <div className="rating" style={{ width: '100%' }} />
                </div>
              </div>
              <span className="review">[4 리뷰]</span>
            </div>
            <div className="sector-third">
              <div className="flex">
                <label className="third-string">주종:</label>
                <span className="third-string">탁주</span>
              </div>
              <div className="flex">
                <label className="third-string">도수:</label>
                <span className="third-string">12%</span>
              </div>
              <div className="flex">
                <label className="third-string">용량:</label>
                <span className="third-string">500ml</span>
              </div>
              <div className="flex">
                <div className="delivery_string">
                  <label>배송기간:</label>
                  <span>월/수/금요일 출고 (2일 이내 배송)</span>
                </div>
              </div>
            </div>
            <div className="sector-fourth">
              <div className="flex-price">
                <label>판매가격:</label>
              </div>
              <div className="flex-discount">
                <div className="discountBox">
                  <span>26,000원</span>
                </div>
              </div>
              <div className="fourth-div">
                <div className="flex">
                  <label className="fourth-string">유통기한:</label>
                  <span className="fourth-string">병입일로 부터 3개월</span>
                </div>
              </div>
              <div className="fourth-div">
                <div className="flex">
                  <label className="fourth-string">보관방법:</label>
                  <span className="fourth-string"> 냉장 보관</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={handleClick ? 'image-stack' : 'image-stack active'}>
        <img className="imgStack" src="./images/kunwooSample/sampleE.png" />

        <img className="imgStack" src="./images/kunwooSample/smple.png" />
        <img className="imgStack" src="./images/kunwooSample/sssample.png" />
        <img className="imgStack" src="./images/kunwooSample/white.png" />
        <div className="foled-button-down">
          <button className="fold-btn" onClick={handleToggle}>
            {handleClick ? '상품설명 펼치기' : '상품설명 접기'}
          </button>
        </div>
      </div>

      <div className="recommend">
        <div className="recommend-string">
          <label className="main-label">
            이 양조장의 다른 제품도 구경해보세요
          </label>
          <label className="sub-label">
            분명히 이 양조장의 팬이 되실 거에요
          </label>
        </div>
        <div className="recommend-slide">
          <button />
          <div className="recommend-slide-content">
            <div className="slide-next-content"></div>
            <div className="slide-next-content"></div>
            <div className="slide-content"></div>
          </div>
          <button />
        </div>
      </div>
      <ProductTab />

      <Review />
    </div>
  );
};

export default Leftside;
