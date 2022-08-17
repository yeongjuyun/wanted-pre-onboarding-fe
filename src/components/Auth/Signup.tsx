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
    <SC.Container>
      <SC.Title>회원가입</SC.Title>
      <SC.Form onSubmit={(e) => onSubmitButton(e)}>
        <SC.Label htmlFor='email'>이메일</SC.Label>
        <SC.Input
          id='email'
          type='text'
          name='email'
          placeholder='email'
          onChange={onChangeInputs}
        />
        <SC.Label htmlFor='password'>비밀번호</SC.Label>
        <SC.Input
          id='password'
          type='password'
          name='password'
          placeholder='password'
          onChange={onChangeInputs}
        />
        <SC.Label htmlFor='confirmPassword'>비밀번호 확인</SC.Label>
        <SC.Input
          id='confirmPassword'
          type='password'
          name='confirmPassword'
          placeholder='confirmPassword'
          onChange={onChangeInputs}
        />
        <SC.Button type='submit' disabled={buttonDisabled}>
          가입하기
        </SC.Button>
      </SC.Form>
      <SC.Text>
        아이디가 있으신가요?
        <Link to='/login'>로그인하기</Link>
      </SC.Text>
    </SC.Container>
  );
}
