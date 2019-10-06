import React, { FormEvent } from "react";
import { Todo, ToggleTodo, DeleteTodo } from '../model/Todo'

interface TodoListItemProps {
    todo: Todo;
    toggleTodo: ToggleTodo;
    deleteTodo: DeleteTodo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({
    todo,
    toggleTodo,
    deleteTodo
}) => {
    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        deleteTodo(todo._id);
    };

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
                &emsp;&emsp;
                <button type="submit" onClick={handleSubmit}>Delete Item</button>
                &emsp;&emsp;
                {todo.title}
            </label>
        </li>
    );
};