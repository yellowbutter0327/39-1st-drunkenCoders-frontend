import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductTab from './ProductTab';
import Review from './Review';
import './Leftside.scss';

const Leftside = () => {
  const params = useParams();
  const productId = params.id;

  const [slideClick, setSlideClick] = useState(false);
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch('/data/PRODUCT_SAMPLE.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setProductData(data[0]);
      });
  }, [productId]);

  const handleToggle = () => {
    setSlideClick(!slideClick);
  };
  return (
    <div className="left-side">
      <div className="detail-box">
        <div className="detail-img">
          <img className="detailImg" src="./images/kunwooSample/sample.png" />
        </div>
        <div className="detail-string">
          <div className="sector-first">
            <div className="detail-mainString">{productData.productName}</div>
          </div>
          <div className="sector-second">
            <div className="detail-secondString">{productData.productSub}</div>
            <div className="detail-hashtag">{productData.hashTag}</div>
            <div className="rating">
              <div className="rating-star">
                <div className="rating-bg">
                  <div
                    className="rating"
                    style={{ width: productData.width }}
                  />
                </div>
              </div>
              <span className="review">{productData.review}</span>
            </div>
            <div className="sector-third">
              <div className="flex">
                <label className="third-string">주종:</label>
                <span className="third-string">{productData.kind}</span>
              </div>
              <div className="flex">
                <label className="third-string">도수:</label>
                <span className="third-string">{productData.alchol}</span>
              </div>
              <div className="flex">
                <label className="third-string">용량:</label>
                <span className="third-string">{productData.ml}</span>
              </div>
              <div className="flex">
                <div className="delivery_string">
                  <label>배송기간:</label>
                  <span>{productData.delivery}</span>
                </div>
              </div>
            </div>
            <div className="sector-fourth">
              <div className="flex-price">
                <label>판매가격:</label>
              </div>
              <div className="flex-discount">
                <div className="discountBox">
                  <span>{productData.price}원</span>
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
      <div className={!slideClick ? 'image-stack' : 'image-stack active'}>
        <img className="imgStack" src={productData.detail_img1} />

        <img className="imgStack" src={productData.detail_img2} />
        <img className="imgStack" src={productData.detail_img3} />
        <img className="imgStack" src={productData.detail_img4} />
        <div className="foled-button-down">
          <button className="fold-btn" onClick={handleToggle}>
            {slideClick ? '상품설명 펼치기' : '상품설명 접기'}
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
