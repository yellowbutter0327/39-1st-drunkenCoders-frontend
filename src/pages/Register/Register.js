import React from 'react';
import { Link } from 'react-router-dom';
import iconsignup from '../../assets/register/signup.png';
import './Register.scss';

const Register = () => {
  return (
    <div className="container">
      <h4 className="signup">회원가입</h4>
      <img className="iconsignup" src={iconsignup} alt="회원가입 아이콘"></img>

      <div className="signup-form">
        <div className="email-signup">
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
          <label className="nickname">(옵션) 닉네임 설정</label>
          <input
            className="pwcheck-input"
            name="pwcheck-input"
            type="text"
            placeholder="2-10글자"
          />
        </div>
        <button>중복확인</button>
        <div className="nickname-alert">
          닉네임을 설정하지 않을 시,
          <br /> 성함의 가운데 부분이 *처리된 상태로 노출됩니다.
          <br /> 예시 홍*동
        </div>

        <button className="certifi-adult">휴대폰으로 성인 인증하기</button>
        <div className="quesiton">
          <label className="question-route">
            술담화를 어떻게 알게 되셨나요?
          </label>
        </div>

        <div className="d">
          <p> 추천해주신 분 있나요? </p>
          있으시다면 휴대폰 번호를 입력해주세요 :&#41;
          <br />두 분 모두 1000 포인트씩 받는답니다!
        </div>
      </div>
    </div>
  );
};

export default Register;
