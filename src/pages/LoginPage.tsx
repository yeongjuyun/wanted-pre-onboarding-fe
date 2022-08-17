import styled from 'styled-components';
import LoginForm from 'components/Auth/Login';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function LoginPage() {
  return (
    <Container>
      <LoginForm />
    </Container>
  );
}
