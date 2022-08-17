import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as SC from './AuthStyle';
import { loginValidator } from 'utils/validator';
import { login } from 'apis/authApi';

export default function LoginForm() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  const [validations, setValidations] = useState({
    isValidEmail: false,
    isValidPassword: false,
  });

  const buttonDisabled =
    !validations.isValidEmail || !validations.isValidPassword;

  const onChangeInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
    setValidations(loginValidator({ ...inputs, [name]: value }));
  };

  const onSubmitButton = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = inputs;
    try {
      const { access_token } = await login(email, password);
      localStorage.setItem('token', access_token);
      navigate('/todo');
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      console.log('이미 로그인되어 있습니다.');
      navigate('/todo');
    }
  }, []);

  return (
    <div>
      <h1>로그인</h1>
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
        <button type='submit' disabled={buttonDisabled}>
          로그인
        </button>
      </SC.Form>
      <span>
        아직 회원이 아니신가요?
        <Link to='/signup'>가입하기</Link>
      </span>
    </div>
  );
}
