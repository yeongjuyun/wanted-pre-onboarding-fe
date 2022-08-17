import { useState } from 'react';
import { createTodo } from 'apis/todoApi';
import * as SC from './TodoStyle';

interface IProps {
  getTodoList: () => Promise<void>;
}

export default function AddTodo({ getTodoList }: IProps) {
  const [todo, setTodo] = useState('');

  const onClickAddButton = async () => {
    try {
      await createTodo(todo);
      getTodoList();
      setTodo('');
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
      }
    }
  };

  return (
    <SC.InputBox>
      <SC.Input
        type='text'
        name='todo'
        placeholder='오늘 할 일을 입력하세요.'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <SC.ControlButton onClick={onClickAddButton}>추가</SC.ControlButton>
    </SC.InputBox>
  );
}
