import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import iconKakao from 'assets/Login/icon_kakao.png';
import iconNaver from 'assets/Login/icon_naver.png';
import iconGoogle from 'assets/Login/icon_google.png';
import './Login.scss';

const PW_REG_EXP =
  /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,}$/;

const Login = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    userId: '',
    userPassword: '',
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleLogin = async e => {
    e.preventDefault();

    try {
      const response = await fetch('http://10.58.52.65:3000/users/login', {
        method: 'POST',
        body: JSON.stringify({
          email: userInfo.userId,
          password: userInfo.userPassword,
        }),
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
      });

      const data = await response.json();

      if (data.accessToken) {
        localStorage.setItem('token', data.accessToken);
        navigate('/main');
      } else {
        alert('아이디와 비밀번호를 확인해주세요!');
      }
    } catch (error) {
      console.log('로그인 에러:', error);
    }
  };

  const { userId, userPassword } = userInfo;

  const isInputValid = userId.includes('@') && PW_REG_EXP.test(userPassword);

  return (
    <div className="container">
      <h4 className="title-login">로그인</h4>
      <div className="login-form">
        <form onSubmit={handleLogin}>
          <div className="form-wrap">
            <label htmlFor="input-email">이메일</label>
            <input
              onChange={handleInputChange}
              id="input-email"
              name="userId"
              type="text"
              placeholder="이메일을 입력해주세요"
            />
          </div>

          <div className="form-wrap">
            <label htmlFor="input-password">비밀번호</label>
            <input
              onChange={handleInputChange}
              name="userPassword"
              type="password"
              placeholder="비밀번호를 입력해주세요"
            />
          </div>

          <button className="login-button" disabled={!isInputValid}>
            로그인
          </button>
        </form>

        <Link to="/register" className="signup">
          회원가입(최대 4000p적립)
        </Link>

        <div className="social-button-wrap">
          {SOCIALBUTTONS.map((button, index) => (
            <button
              key={index}
              className={`social-login-button ${button.style}`}
              type="submit"
            >
              <img src={button.icon} alt={button.text} />
              {button.text}
            </button>
          ))}
        </div>

        <div className="find-link-wrap">
          <Link to="/login" className="find-link">
            아이디 찾기
          </Link>
          <Link to="/register" className="find-link">
            비밀번호 찾기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

const SOCIALBUTTONS = [
  { id: 1, icon: iconKakao, text: '카카오 로그인', style: 'kakao' },
  { id: 2, icon: iconNaver, text: '네이버 로그인', style: 'naver' },
  { id: 3, icon: iconGoogle, text: '구글 로그인', style: 'google' },
];
