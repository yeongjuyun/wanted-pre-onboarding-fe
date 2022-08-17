import { TodoList, Header } from './index';
import * as SC from './TodoStyle';

export default function TodoContainer() {
  return (
    <SC.Container>
      <Header />
      <TodoList />
    </SC.Container>
  );
}
