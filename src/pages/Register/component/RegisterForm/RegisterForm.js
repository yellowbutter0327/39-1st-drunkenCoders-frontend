import React, { useState } from 'react';
import EmailInput from './component/EmailInput';
import PasswordInput from './component/PasswordInput';
import PasswordCheckInput from './component/PasswordCheckInput';
import NicknameInput from './component/NicknameInput';

const RegisterForm = ({ isValid, getUserInfo, checkIsDuplicate }) => {
  //비밀번호 재확인
  const [isDuplicate, setIsDuplicate] = useState(true);
  //닉네임 중복 검사
  const [isNicknameChecked, setIsNicknameChecked] = useState(false);
  return (
    <form className="register-form-container">
      {/* 이메일 입력 */}
      <EmailInput isValid={isValid} getUserInfo={getUserInfo} />

      {/* 비밀번호 입력 */}
      <PasswordInput isValid={isValid} getUserInfo={getUserInfo} />

      {/* 비밀번호 확인 입력 */}
      <PasswordCheckInput isValid={isValid} getUserInfo={getUserInfo} />

      {/* 닉네임 입력 */}
      <NicknameInput
        isNicknameChecked={isNicknameChecked}
        isDuplicate={isDuplicate}
        getUserInfo={getUserInfo}
        checkIsDuplicate={checkIsDuplicate}
      />
    </form>
  );
};

export default RegisterForm;
