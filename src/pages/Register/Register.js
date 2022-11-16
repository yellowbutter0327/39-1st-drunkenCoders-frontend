import React from 'react';
import { Link } from 'react-router-dom';
import iconsignup from '../../assets/register/signup.png';
import './Register.scss';

const Register = () => {
  return (
    <div className="all-container">
      <div className="container">
        <h4 className="signup">회원가입</h4>
        <img
          className="iconsignup"
          src={iconsignup}
          alt="회원가입 아이콘"
        ></img>

        <div className="signup-form">
          <div className="form-wrap">
            <label htmlFor="email">이메일</label>
            <input
              id="email"
              name="useremail"
              type="text"
              placeholder="이메일을 입력해주세요"
            />
          </div>
          <div className="form-wrap">
            <label htmlFor="pw">비밀번호</label>
            <input
              id="pw"
              name="userpassword"
              type="password"
              placeholder="비밀번호를 입력해주세요"
            />
          </div>
          <div className="form-wrap">
            <label htmlFor="pw2">비밀번호 확인</label>
            <input
              id="pw2"
              name="userpassword2"
              type="password"
              placeholder="비밀번호를 한번 더 입력해주세요"
            />
          </div>
          <div className="form-wrap">
            <label htmlFor="nickname">닉네임</label>
            <input
              id="nickname"
              name="usernickname"
              type="text"
              placeholder="닉네임을 입력해주세요"
            />
          </div>

          {/* <div className="email-signup">
            <label className="title-email">이메일</label>
            <input
              className="email-input"
              name="useremail"
              type="text"
              placeholder="이메일을 입력해주세요"
            />
          </div>

          <div className="pw-signup">
            <label className="title-pw">비밀번호</label>
            <input
              className="pw-input"
              name="userpw"
              type="text"
              placeholder="8자 이상 / 영문 / 숫자를 조합해주세요"
            />
          </div>

          <div className="check-signup">
            <label className="check-pw">비밀번호 확인</label>
            <input
              className="pwcheck-input"
              name="pwcheck-input"
              type="text"
              placeholder="비밀번호를 한번 더 입력해주세요"
            />
          </div>

          <div className="nickname-signup">
            <label className="nickname"> 닉네임 설정</label>
            <input
              className="pwcheck-input"
              name="pwcheck-input"
              type="text"
              placeholder="2-10글자"
            />
            <button className="repeat-check">중복확인</button>
          </div> */}

          <button className="certifi-adult">휴대폰으로 성인 인증하기</button>
          <div className="quesiton">
            <label className="question-route">
              술담화를 어떻게 알게 되셨나요?
            </label>
          </div>

          <div className="agreement">
            이용약관 및 개인정보처리방침 내용을 <br /> 확인 하였으며, 이에
            동의합니다.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
