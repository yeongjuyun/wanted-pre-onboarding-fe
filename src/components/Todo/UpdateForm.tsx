import { useParams, useOutletContext, useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { updateTodo } from 'apis/todoApi';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import * as SC from './TodoStyle';
import type { UpdateProps } from 'types/todo';

export const UpdateForm = (props: any) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { getTodoList, todos }: UpdateProps = useOutletContext();
  const todo = todos.find((todo) => todo.id === Number(id));

  // 이미 삭제한 목록일 경우, todo로 이동
  if (!todo) {
    console.log('이미 삭제한 목록입니다.');
    navigate('/todo');
  }

  const [inputs, setInputs] = useState({
    todo: todo?.todo,
    isCompleted: false,
  });

  const onChangeInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (inputs.todo && todo?.isCompleted) {
        const data = await updateTodo(
          Number(id),
          inputs.todo,
          todo.isCompleted
        );
      }
      getTodoList();
      console.log('수정되었습니다.');
      navigate('/todo');
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
      }
    }
  };

  return (
    <SC.Form onSubmit={onSubmit}>
      <SC.Input
        type='text'
        name='todo'
        onChange={onChangeInputs}
        value={inputs.todo}
      />
      <SC.ControlButton type='submit'>저장</SC.ControlButton>
      <Link to='/todo'>
        <SC.ControlButton type='button'>취소</SC.ControlButton>
      </Link>
    </SC.Form>
  );
};
