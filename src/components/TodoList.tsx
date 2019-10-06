import React from "react"
import { TodoListItem } from "./TodoListItem"
import { Todo, ToggleTodo, DeleteTodo } from "../model/Todo"

interface TodoListProps {
    todos: Array<Todo>;
    toggleTodo: ToggleTodo;
    deleteTodo: DeleteTodo;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo, deleteTodo }) => {
    return <ul>
        {todos.map(todo => {
            return <TodoListItem key={todo._id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        })}
    </ul>
}