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
            <p className="alert-txt">올바른 이메일을 입력해주세요</p>
          </div>

          <div className="form-wrap">
            <label htmlFor="pw">비밀번호</label>
            <input
              id="pw"
              name="userpassword"
              type="password"
              placeholder="8자 이상으로 입력해주세요"
            />
            <p className="alert-txt">비밀번호를 입력해주세요</p>
          </div>
          <div className="form-wrap">
            <label htmlFor="pw2">비밀번호 확인</label>
            <input
              id="pw2"
              name="userpassword2"
              type="password"
              placeholder="비밀번호를 한번 더 입력해주세요"
            />
            <p className="alert-txt">비밀번호가 일치하지 않습니다.</p>
          </div>
          <div className="form-wrap">
            <div className="nickname-repeat">
              <label htmlFor="nickname">닉네임</label>
              <input
                id="nickname"
                name="usernickname"
                type="text"
                placeholder="2-10글자"
              />
              <button className="check-repeat">중복확인</button>
              <p className="alert-txt">닉네임이 중복되었습니다.</p>
            </div>

            <p>
              닉네임을 설정하지 않을 시,
              <br /> 성함이 가운데 부분이 * 처리된 상태로 노출됩니다. <br />{' '}
              <span> 예시 홍*동 </span>
            </p>
            <button className="check-adult">휴대폰으로 성인인증하기</button>

            <div className="form-wrap">
              <label>술담화를 어떻게 알게 되셨나요?</label>
            </div>
          </div>

          <select>
            <option disabled selected>
              선택해주세요
            </option>
            <option>지인소개</option>
            <option>인스타그램</option>
            <option>페이스북</option>
            <option>유투브</option>
            <option>검색</option>
            <option>블로그</option>
            <option>기사/언론</option>
            <option>기타</option>
          </select>

          <div className="agreement">
            <span className="blue">이용약관</span> 및{' '}
            <span className="blue">개인정보처리방침</span> 내용을 <br /> 확인
            하였으며, 이에 동의합니다.
          </div>

          <div className="agreement-checkbox">
            <div className="agreement">
              <span className="blue">이용약관</span> 동의{' '}
              <span className="red">[필수] </span>{' '}
              <input type="checkbox" value="coding" checked />
            </div>
            <div className="agreement">
              <span className="blue">개인정보처리방침</span> 동의{' '}
              <span className="red">[필수] </span>
              <input type="checkbox" value="music" checked />
            </div>
          </div>

          <button className="finish-register">가입완료</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
