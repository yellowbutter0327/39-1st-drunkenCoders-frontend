import { React, useState } from 'react';
import './ProductDetail.scss';
import ProductTab from './ProductTab';

const ProductDetail = () => {
  const [isActive, setActive] = useState('false');

  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <>
      <div className="container">
        <div className="detail-main">
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
                      <span>
                        <img src="./images/kunwooSample/icon-star-score.png"></img>
                      </span>
                      <span className="review">[4 리뷰]</span>
                    </div>
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
                        <span className="fourth-string">
                          병입일로 부터 3개월
                        </span>
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
            <div className={isActive ? 'image-stack' : 'image-stack active'}>
              <img
                className="imgStack"
                src="./images/kunwooSample/sampleE.png"
              />

              <img className="imgStack" src="./images/kunwooSample/smple.png" />
              <img
                className="imgStack"
                src="./images/kunwooSample/sssample.png"
              />
              <img className="imgStack" src="./images/kunwooSample/white.png" />
              <div className="foled-button-down">
                <button className="fold-btn" onClick={handleToggle}>
                  {isActive ? '상품설명 펼치기' : '상품설명 접기'}
                </button>
              </div>
              <div className="foled-button-up"></div>
            </div>
            <div className="image-detail">
              <img src="./" />
              <div className="image-detail-string">
                양조장 이야기가 궁금하다면?
              </div>
            </div>
            <div className="image-href">
              <img src="./" />
              <button>더 알아보기</button>
            </div>
            <div className="line">-------------------------</div>
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
            <div className="kakao">
              <img src="./"></img>
            </div>
            <ProductTab />
          </div>
          <div className="right-side">
            <div className="detail-sideBar">
              <div className="label">
                <label>옵션</label>
              </div>
              <div className="select-wrapper">
                <div className="select">
                  <select>
                    <option value disabled className="placeholder">
                      어떤 옵션을 원하시나요?
                    </option>
                    <option value="202">[500ml] 문희 오지마 가향주</option>
                    <option value="203">
                      [500ml] 문희 오지마 가향주 X 2병 (+20,000원)
                    </option>
                    <option value="204">
                      [500ml] 문희 오지마 가향주 X 4병 (+53,000원)
                    </option>
                  </select>
                  {/* <svg>
                  <path></path>
                </svg> */}
                </div>
              </div>
              <div className="label">
                <label>수량</label>
              </div>
              <div className="select-wrapper-count">
                <div className="select-minus">
                  <img
                    className="img-minus"
                    src="./images/kunwooSample/minus.png"
                  />
                </div>
                <div className="countDiv">1</div>
                {/* <input>number</input> */}
                <div className="select-plus">
                  <img
                    className="img-plus"
                    src="./images/kunwooSample/plus.png"
                  />
                </div>
              </div>
              <div className="label">
                <label>총 상품가격</label>
              </div>
              <div className="select-wrapper">
                <span>0원</span>
              </div>
              <div className="delivery">
                <div className="delivery-icon">
                  <img
                    className="iconTruck"
                    src="./images/kunwooSample/icon_truck.png"
                  />
                </div>
                <div className="delivery-info">
                  <div>
                    <label>(전국택배)</label>
                    <label className="price-blue-font">무료</label>
                  </div>
                  <div>
                    <label>(제주도 및 도서산간)</label>
                    <label className="price">4,000원</label>
                  </div>
                </div>
              </div>
              <div className="btn-wrapper">
                <div className="btn-left">
                  <button className="cart-btn">
                    <img
                      className="icon-img"
                      src="./images/kunwooSample/icon_cart.png"
                    />
                    장바구니
                  </button>
                </div>
                <div className="btn-right">
                  <div open className="open-btn">
                    여러 명도 가능해요
                    <div className="close-btn">
                      <img src="./images/kunwooSample/tooltip_close.png" />
                    </div>
                  </div>
                  <button className="present-btn">
                    <img
                      className="icon-img"
                      src="./images/kunwooSample/icon_gift_box.png"
                    />
                    선물하기
                  </button>
                </div>
                <button className="purchase-btn">바로 구매하기</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
