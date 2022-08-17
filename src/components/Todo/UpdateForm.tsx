import { useParams, useOutletContext, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { updateTodo } from 'apis/todoApi';
import { Link } from 'react-router-dom';
import * as SC from './TodoStyle';
import type { UpdateProps } from 'types/todo';

export const UpdateForm = (props: any) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { getTodoList, todos }: UpdateProps = useOutletContext();
  const todo = todos.find((todo) => todo.id === Number(id));

  if (!todo) {
    navigate('/todo');
    throw new Error('해당 목록을 불러오지 못했습니다.');
  }

  const [inputs, setInputs] = useState({
    todo: todo.todo,
    isCompleted: false,
  });

  const onChangeInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(name, value);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (inputs.todo) {
        const data = await updateTodo(
          Number(id),
          inputs.todo,
          todo.isCompleted
        );
        console.log('수정되었습니다.', data);
      }
      getTodoList();
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
