import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { LoginPage, SignupPage, TodoPage, NotFound } from 'pages';
import { AddTodo, TodoList, UpdateForm } from 'components/Todo';

export function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to='/login' />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/todo' element={<TodoPage />}>
          <Route path={':id/update'} element={<UpdateForm />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}
