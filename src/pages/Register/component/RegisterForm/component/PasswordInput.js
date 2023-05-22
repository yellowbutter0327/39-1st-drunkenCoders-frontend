import React, { useState } from 'react';

const PasswordInput = ({ isValid, getUserInfo }) => {
  return (
    <div className="register-content">
      <label htmlFor="password">비밀번호</label>
      <input
        onChange={getUserInfo}
        className={isValid.userpassword ? '' : 'error'}
        name="userpassword"
        type="password"
        placeholder="영문, 숫자, 특수문자를 포함해서 8자 이상으로 입력해주세요"
      />
      <p className="alert-txt">비밀번호를 입력해주세요</p>
    </div>
  );
};

export default PasswordInput;
