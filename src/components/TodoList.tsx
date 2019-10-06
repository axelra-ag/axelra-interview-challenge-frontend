import React from "react"
import { TodoListItem } from "./TodoListItem"
import { Todo, ToggleTodo } from "../model/Todo"

interface TodoListProps {
    todos: Array<Todo>;
    toggleTodo: ToggleTodo;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
    return <ul>
        {todos.map(todo => {
            return <TodoListItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
        })}
    </ul>
}