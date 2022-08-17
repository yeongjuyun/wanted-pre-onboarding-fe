import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import * as SC from './AuthStyle';
import { signupValidator } from 'utils/validator';
import { signup } from 'apis/authApi';

export default function SignupForm() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [validations, setValidations] = useState({
    isValidEmail: false,
    isValidPassword: false,
    isValidConfirmPassword: false,
    isSamePassword: false,
  });

  const buttonDisabled =
    !validations.isValidEmail ||
    !validations.isValidPassword ||
    !validations.isValidConfirmPassword ||
    !validations.isSamePassword;

  const onChangeInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
    setValidations(signupValidator({ ...inputs, [name]: value }));
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      console.log('이미 로그인되어 있습니다.');
      navigate('/todo');
    }
  }, []);

  const onSubmitButton = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = inputs;
    try {
      const res = await signup(email, password);
      console.log('회원가입완료', res);
      alert('회원가입이 완료되었습니다.');
      navigate('/login');
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>회원가입</h1>
      <SC.Form onSubmit={(e) => onSubmitButton(e)}>
        <input
          type='text'
          name='email'
          placeholder='email'
          onChange={onChangeInputs}
        />
        <input
          type='password'
          name='password'
          placeholder='password'
          onChange={onChangeInputs}
        />
        <input
          type='password'
          name='confirmPassword'
          placeholder='confirmPassword'
          onChange={onChangeInputs}
        />
        <button type='submit' disabled={buttonDisabled}>
          가입하기
        </button>
      </SC.Form>
      <span>
        아이디가 있으신가요?
        <Link to='/login'>로그인하기</Link>
      </span>
    </div>
  );
}
