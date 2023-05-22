import React from 'react';
import './RegisterTerms.scss';

const RegisterTerms = ({
  isAgreementChecked,
  handleFirstCheckboxChange,
  handleSecondCheckboxChange,
  handleSignup,
  isButtonActive,
}) => {
  return (
    <div className="register-terms-wrap">
      <div className="terms-agreement">
        <span className="blue">이용약관</span> 및
        <span className="blue"> 개인정보처리방침</span> 내용을 <br />
        확인하였으며, 이에 동의합니다.
      </div>

      <div className="agreement-checkbox-wrap">
        <div className="agreement-checkbox">
          <span className="blue">이용약관</span> 동의
          <span className="red"> [필수] </span>
          <input
            type="checkbox"
            checked={isAgreementChecked.firstCheckbox}
            onChange={handleFirstCheckboxChange}
          />
        </div>
        <div className="agreement-checkbox">
          <span className="blue">개인정보처리방침</span> 동의
          <span className="red"> [필수] </span>
          <input
            type="checkbox"
            checked={isAgreementChecked.secondCheckbox}
            onChange={handleSecondCheckboxChange}
          />
        </div>
      </div>

      <button
        className="submit-button"
        onClick={handleSignup}
        disabled={!isButtonActive}
      >
        가입 완료
      </button>
    </div>
  );
};

export default RegisterTerms;
