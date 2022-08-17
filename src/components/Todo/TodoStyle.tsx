import styled from 'styled-components';

export const Container = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  margin: 20px;
  background-color: white;
`;

export const TodoContainer = styled.div`
  margin: 20px;
`;

export const Wrapper = styled.div`
  border: 1px solid black;
  margin: 20px;
`;

export const InputBox = styled.div`
  display: flex;
  margin: 20px;
`;

export const Input = styled.input`
  flex: 1;
  height: 32px;
  margin-right: 5px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid black;
  font-size: 18px;
  padding: 0 10px;
`;
export const Form = styled.form`
  display: flex;
  margin: 20px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
  padding: 10px;
  color: white;
  background-color: black;
`;

export const Title = styled.h2`
  margin: 20px;
`;

export const Button = styled.button`
  height: 24px;
  border: 0;
  border-radius: 10px;
  outline: 0;
  background-color: black;
  color: white;
  padding: 0 10px;
  margin-left: 5px;
  font-weight: 500;

  cursor: pointer;
  :hover {
    background-color: #000000bd;
  }
`;

export const ControlButton = styled(Button)`
  margin: auto 0;
  margin-left: 5px;
  height: 38px;
  padding: 0 18px;
  @media screen and (max-width: 580px) {
  }
`;

export const ListContainer = styled.ul`
  padding: 10px;
  height: 360px;
  overflow-y: scroll;
`;

export const List = styled.li`
  display: flex;
  padding: 10px;
  span {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 25px;
    margin-left: 18px;
    font-size: 18px;
  }
`;
