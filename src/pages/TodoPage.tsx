import styled from 'styled-components';
import { TodoContainer } from 'components/Todo';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function TodoPage() {
  return (
    <Container>
      <TodoContainer />
    </Container>
  );
}
