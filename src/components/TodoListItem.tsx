import React from 'react';
import { Todo, ToggleTodo } from '../model/Todo'

interface TodoListItemProps {
    todo: Todo;
    toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({
    todo,
    toggleTodo
}) => {
    return (
        <li>
            <label
                style={{ textDecoration: todo.completed ? "line-through" : "none" }}
            >
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo)}
                />
                {todo.title}
            </label>
        </li>
    );
};