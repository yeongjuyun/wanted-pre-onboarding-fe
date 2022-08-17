import styled from 'styled-components';

export const Container = styled.div`
  width: 380px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 40px 30px;
  background-color: white;
`;

export const Title = styled.h2`
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.div`
  margin-top: 20px;
  font-weight: 400;
`;

export const Label = styled.label`
  padding: 5px;
  font-weight: 500;
`;

export const Input = styled.input`
  /* width: 28px; */
  height: 38px;
  padding: 0 10px;
  margin-bottom: 10px;
  font-size: 16px;
`;

export const Button = styled.button`
  height: 38px;
  border: 0;
  border-radius: 8px;
  outline: 0;
  background-color: black;
  color: white;
  margin-top: 10px;
`;
