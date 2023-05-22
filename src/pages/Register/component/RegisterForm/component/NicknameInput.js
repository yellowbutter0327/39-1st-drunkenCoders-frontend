import React, { useState } from 'react';

const NicknameInput = ({
  isNicknameChecked,
  isDuplicate,
  getUserInfo,
  checkIsDuplicate,
}) => {
  return (
    <div className="register-content">
      <div className="nickname-repeat">
        <label htmlFor="nickname">닉네임</label>
        <input
          onChange={getUserInfo}
          className={isNicknameChecked && isDuplicate ? 'error' : ''}
          name="usernickname"
          type="text"
          placeholder="닉네임"
          autoComplete="off"
        />
        <button className="check-repeat" onClick={checkIsDuplicate}>
          중복확인
        </button>
        {isNicknameChecked && isDuplicate && (
          <p className="alert-nickname-repeat">닉네임이 중복되었습니다.</p>
        )}
      </div>
      <p className="alert-nickname-empty">
        닉네임을 설정하지 않을 시,
        <br /> 성함이 가운데 부분이 * 처리된 상태로 노출됩니다. <br />
        <span> 예시 홍*동 </span>
      </p>
    </div>
  );
};

export default NicknameInput;
