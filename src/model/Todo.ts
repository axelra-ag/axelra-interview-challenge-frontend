// Example of a simple type
export type Todo = {
  userId: string;
  id: string;
  title: string;
  completed: boolean;
};

export type ToggleTodo = (selectedTodo: Todo) => void;

export type AddTodo = (newTodo: string) => void;