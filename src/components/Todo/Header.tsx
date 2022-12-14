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
      <SC.ControlButton onClick={handleLogout}>๋ก๊ทธ์์</SC.ControlButton>
    </SC.Header>
  );
}
