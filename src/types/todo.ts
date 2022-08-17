export interface TodoData {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

export interface UpdateProps {
  getTodoList: () => void;
  todos: TodoData[];
}
