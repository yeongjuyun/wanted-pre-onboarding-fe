import { useNavigate } from 'react-router-dom';
import * as SC from './TodoStyle';

export default function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };
  return (
    <SC.Header>
      <SC.Title>TodoList</SC.Title>
      <SC.ControlButton onClick={handleLogout}>로그아웃</SC.ControlButton>
    </SC.Header>
  );
}
