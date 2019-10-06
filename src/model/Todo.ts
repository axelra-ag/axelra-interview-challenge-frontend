// Example of a simple type
export type Todo = {
  userId: string;
  _id: string;
  title: string;
  completed: boolean;
};

export type TodoAdd = {
  userId: string;
  title: string;
  completed: boolean;
};

export type ToggleTodo = (selectedTodo: Todo) => void;
export type AddTodo = (newTodo: TodoAdd) => void;
export type DeleteTodo = (todoId: string) => void;