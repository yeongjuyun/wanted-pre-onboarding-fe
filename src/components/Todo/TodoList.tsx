import { Outlet, Link, useNavigate, useOutletContext } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getTodos, deleteTodo, updateTodo } from 'apis/todoApi';
import AddTodo from './AddTodo';
import * as SC from './TodoStyle';
import type { TodoData } from 'types/todo';

export default function TodoList() {
  const [todos, setTodos] = useState<TodoData[]>([]);

  const getTodoList = async () => {
    try {
      const data = await getTodos();
      setTodos(data);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
      }
    }
  };
  useEffect(() => {
    getTodoList();
  }, []);

  const hadleDelete = async (id: number) => {
    try {
      await deleteTodo(id);
      getTodoList();
      console.log('삭제되었습니다.');
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
      }
    }
  };

  const onChangeCheckbox = async (id: number) => {
    const todo = todos.find((todo) => todo.id === id);
    try {
      if (todo) {
        const data = await updateTodo(id, todo.todo, !todo.isCompleted);
        setTodos(
          todos.map((todo) =>
            todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
          )
        );
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
      }
    }
  };

  return (
    <SC.TodoContainer>
      <AddTodo getTodoList={getTodoList} />
      <SC.Wrapper>
        <SC.ListContainer>
          {todos.map((todo) => (
            <SC.List key={todo.id} id={`todo-${String(todo.id)}`}>
              <input
                type='checkbox'
                name='isCompleted'
                onClick={() => onChangeCheckbox(todo.id)}
                defaultChecked={todo.isCompleted}
              />
              <span
                style={{
                  textDecoration: todo.isCompleted ? 'line-through' : '',
                }}
              >
                {todo.todo}
              </span>
              <Link to={`/todo/${todo.id}/update`}>
                <SC.Button>수정</SC.Button>
              </Link>
              <SC.Button onClick={() => hadleDelete(todo.id)}>삭제</SC.Button>
            </SC.List>
          ))}
        </SC.ListContainer>
      </SC.Wrapper>
      <Outlet context={{ getTodoList, todos }} />
    </SC.TodoContainer>
  );
}
