import React, { useState } from 'react';

const EmailInput = ({ isValid, getUserInfo }) => {
  return (
    <div className="register-content">
      <label htmlFor="email">이메일</label>
      <input
        onChange={getUserInfo}
        className={isValid.useremail ? '' : 'error'}
        name="useremail"
        type="text"
        placeholder="이메일을 입력해주세요"
        autoComplete="off"
      />
      <p className="alert-txt">올바른 이메일을 입력해주세요</p>
    </div>
  );
};

export default EmailInput;
