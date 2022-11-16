import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';
import iconKakao from './../../assets/login/icon_kakao.png';
import iconNaver from './../../assets/login/icon_naver.png';
import iconGoogle from './../../assets/login/icon_google.png';

const Login = () => {
  // const isUserInfoGot = userId.length > 1 && userPassword.length > 1;

  return (
    <div className="container">
      {/* <div className="login-container"> */}
      <h4 className="title-login">로그인</h4>

      <div className="login-form">
        <form>
          <div className="form-wrap">
            <label htmlFor="input-email">이메일</label>
            <input
              // onChange={getUserInfo}
              id="input-email"
              name="userId"
              type="text"
              placeholder="이메일을 입력해주세요"
            />
          </div>

          <div className="form-wrap">
            <label htmlFor="input-password">비밀번호</label>
            <input
              // onChange={getUserInfo}
              id="input-password"
              name="userPassword"
              type="text"
              placeholder="비밀번호를 입력해주세요"
            />
          </div>

          <button className="login-button" type="submit">
            로그인
          </button>
        </form>

        <div className="signup">
          <Link to="/register">회원가입(최대 4000p적립)</Link>
        </div>

        <div className="social-button">
          <button className="loginButton-kakao" type="submit">
            <img src={iconKakao} />
            카카오 로그인
          </button>
          <button className="loginButton-naver" type="submit">
            <img src={iconNaver} />
            네이버 로그인
          </button>
          <button className="loginButton-google" type="submit">
            <img src={iconGoogle} />
            구글 로그인
          </button>
        </div>

        <div className="link-find">
          <Link to="/login">아이디 찾기</Link>
        </div>
        <div className="link-find">
          <Link to="/register">비밀번호 찾기</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
