import React from 'react';
import './Sns.scss';
import iconInstagram from './../../../assets/footer/icon_instagram.png';
import iconYoutube from './../../../assets/footer/icon_youtube.png';
import iconKakao from './../../../assets/footer/icon_kakao.png';
import iconFacebook from './../../../assets/footer/icon_facebook.png';
import iconNaver from './../../../assets/footer/icon_naver.png';

const Sns = () => {
  const snsLink = [
    {
      id: 1,
      name: '인스타그램',
      icon: iconInstagram,
      url: 'https://www.instagram.com/sooldamhwa/?hl=ko',
    },
    {
      id: 2,
      name: '유튜브',
      icon: iconYoutube,
      url: 'https://www.youtube.com/channel/UCuhTvdO3VD-S3md_CkWYtbw',
    },
    {
      id: 3,
      name: '카카오',
      icon: iconKakao,
      url: 'http://pf.kakao.com/_xktAgj',
    },
    {
      id: 4,
      name: '페이스북',
      icon: iconFacebook,
      url: 'https://www.facebook.com/sooldamhwa/',
    },
    {
      id: 5,
      name: '네이버',
      icon: iconNaver,
      url: 'https://blog.naver.com/sooldamhwa',
    },
  ];
  return (
    <div className="sns-box">
      {snsLink.map(ele => {
        return (
          <a href={ele.url} target="_blank" rel="noreferrer" key={ele.id}>
            <img src={ele.icon} alt={ele.name} />
          </a>
        );
      })}
    </div>
  );
};

export default Sns;
