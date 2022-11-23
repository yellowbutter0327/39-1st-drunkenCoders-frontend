import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Review.scss';

const Review = ({ productData }) => {
  const { productId } = useParams();
  const [currReviewId, setCurrReviewId] = useState([]);

  useEffect(() => {
    fetch(`http://10.58.52.122:3000/comments/${productId}`, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => setCurrReviewId(data.data));
  }, []);

  return (
    <div className="Review">
      {currReviewId.map(item => (
        <div className="Review-one-wrapper" key={item.id}>
          <div className="Review-header">
            <div className="Review-header-content">
              <div className="Review-name">{item.nick_name}</div>
              <div className="Review-header-right">
                <div className="Review-text">{item.title}</div>
                <div className="rating-bg">
                  <div className="rating" style={{ width: item.rating }} />
                </div>
                <div className="time-stamp">{item.date}</div>
              </div>
            </div>
          </div>
          <div className="Review-main">
            <div className="Review-content">
              <span className="main-text">{item.text1}</span>
              <br />
              <span>{item.text2}</span>
            </div>
            <div className="Review-img">
              <img src={item.image_url} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Review;

// const reviewData = [
//   {
//     id: 0,
//     username: '킹갓도제네럴재선',
//     title: '[500ml] 문희 오미자 가향주',
//     rating: '100%',
//     date: '2022.11.17',
//     text1: '가격이 비싸서 고민했는데 갖고 싶던 술이라',
//     text2: '큰맘먹고 질렀어요!',
//     src: '/images/kunwooSample/gom.jpeg',
//   },
//   {
//     id: 1,
//     username: '빛빛빛상준',
//     title: '[500ml] 문희 오미자 가향주',
//     rating: '90%',
//     date: '2022.11.15',
//     text1: '이거먹고 취해서 눈떠보니 경찰서 였습니다',
//     text2: '정말 맛있었어요!',
//     src: '/images/kunwooSample/cat.jpg',
//   },
//   {
//     id: 2,
//     username: '갓종범',
//     title: '[500ml] 문희 오미자 가향주',
//     rating: '70%',
//     date: '2022.11.17',
//     text1: '술맛이 좋군요!!!!!!!!!!!!!',
//     text2: '마음에 듭니다!',
//     src: '/images/kunwooSample/goong.png',
//   },
//   {
//     id: 3,
//     username: '햇병아리',
//     title: '[500ml] 문희 오미자 가향주',
//     rating: '20%',
//     date: '2022.11.15',
//     text1: '먹고싶어서 샀는데 완전 맘에들어서 다시한번',
//     text2: '큰맘먹고 질렀어요!',
//     src: '/images/kunwooSample/siba.png',
//   },
// ];
