import React, { useState } from 'react';

const PasswordCheckInput = ({ isValid, getUserInfo }) => {
  return (
    <div className="register-content">
      <label htmlFor="password-check">비밀번호 확인</label>
      <input
        onChange={getUserInfo}
        className={isValid.passwordcheck ? '' : 'error'}
        name="passwordcheck"
        type="password"
        placeholder="비밀번호를 한번 더 입력해주세요"
      />
      <p className="alert-txt">비밀번호가 일치하지 않습니다.</p>
    </div>
  );
};

export default PasswordCheckInput;
