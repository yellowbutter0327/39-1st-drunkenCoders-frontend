import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import signupicon from '../../assets/Register/signup.png';
import './Register.scss';
import RegisterForm from './component/RegisterForm/RegisterForm';
import DiscoveryMethod from './component/DiscoveryMethod/DiscoveryMethod';
import RegisterTerms from './component/RegisterTerms/RegisterTerms';

const reg =
  /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;

const validationRules = {
  useremail: email => email.includes('@' && '.'),
  userpassword: password => password.length >= 8 && reg.test(password),
  passwordcheck: (password2, password) => password2 === password,
};

const API_URL = 'http://10.58.52.65:3000/users';

const Register = () => {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    useremail: '',
    userpassword: '',
    passwordcheck: '',
    usernickname: '',
  });

  const [isDuplicate, setIsDuplicate] = useState(true);
  const [isNicknameChecked, setIsNicknameChecked] = useState(false);
  const [isAgreementChecked, setIsAgreementChecked] = useState(false);
  const [isValid, setIsValid] = useState({
    useremail: true,
    userpassword: true,
    passwordcheck: true,
    usernickname: true,
  });

  const handleFirstCheckboxChange = event => {
    setIsAgreementChecked(prevState => {
      return { ...prevState, firstCheckbox: !prevState.firstCheckbox };
    });
  };

  const handleSecondCheckboxChange = event => {
    setIsAgreementChecked(prevState => {
      return { ...prevState, secondCheckbox: !prevState.secondCheckbox };
    });
  };

  const getUserInfo = e => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
    if (validationRules.hasOwnProperty(name)) {
      setIsValid({
        ...isValid,
        [name]: validationRules[name](value, userInfo.userpassword),
      });
    }
  };

  const isEmailValid = userInfo.useremail.includes('@' && '.');
  const isPasswordValid =
    userInfo.userpassword.length >= 8 && reg.test(userInfo.userpassword);
  const isPasswordRepeatValid =
    userInfo.userpassword === userInfo.passwordcheck;
  const isButtonActive =
    isEmailValid &&
    isPasswordValid &&
    isPasswordRepeatValid &&
    !isDuplicate &&
    isAgreementChecked.firstCheckbox &&
    isAgreementChecked.secondCheckbox;

  const handleSignup = () => {
    fetch(`${API_URL}/register`, {
      method: 'POST',
      body: JSON.stringify({
        email: userInfo.useremail,
        password: userInfo.userpassword,
        nickname: userInfo.usernickname,
      }),
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(res => res.json())
      .then(data => {
        if (data.message === 'user create') {
          alert('회원가입이 완료되었습니다.');
          navigate('/login');
        } else if (data.message === 'duplicated email') {
          alert('이미 가입된 이메일입니다.');
        } else {
          alert('다시 시도해주세요!');
        }
      });
  };

  const checkIsDuplicate = () => {
    if (!userInfo.usernickname) {
      alert('닉네임을 입력해주세요!');
      return;
    }
    fetch(`http://10.58.52.65:3000/users/${userInfo.usernickname}`, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(res => res.json())
      .then(data => {
        if (data.message === 'Available nickname') {
          alert('사용 가능한 닉네임입니다.');
          setIsDuplicate(false);
        } else {
          alert('이미 존재하는 닉네임입니다.');
          setIsNicknameChecked(true);
          setIsDuplicate(true);
        }
      });
  };

  return (
    <div className="container">
      <h4 className="register-title">회원가입</h4>
      <img className="register-icon" src={signupicon} alt="회원가입 아이콘" />
      <div className="register-content-wrap">
        <RegisterForm
          userInfo={userInfo}
          isValid={isValid}
          getUserInfo={getUserInfo}
          handleSignup={handleSignup}
          checkIsDuplicate={checkIsDuplicate}
        />
        <button className="check-adult">휴대폰으로 성인인증하기</button>
      </div>

      <DiscoveryMethod />

      <RegisterTerms
        isAgreementChecked={isAgreementChecked}
        handleFirstCheckboxChange={handleFirstCheckboxChange}
        handleSecondCheckboxChange={handleSecondCheckboxChange}
        handleSignup={handleSignup}
        isButtonActive={isButtonActive}
      />
    </div>
  );
};

export default Register;
