import React, { FormEvent } from "react";
import { Todo, ToggleTodo, DeleteTodo, ChangeStatus } from '../model/Todo'

interface TodoListItemProps {
    todo: Todo;
    toggleTodo: ToggleTodo;
    deleteTodo: DeleteTodo;
    changeStatus: ChangeStatus;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({
    todo,
    deleteTodo,
    changeStatus,
}) => {
    const handleSubmitChange = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        changeStatus(todo._id);
    };

    const handleSubmitDelete = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        deleteTodo(todo._id);
    };

    return (
        <li>
            <label
                style={{ textDecoration: todo.completed ? "line-through" : "none" }}
            >
                <button type="submit" onClick={handleSubmitChange}>Change Status</button>
                &emsp;&emsp;
                <button type="submit" onClick={handleSubmitDelete}>Delete Item</button>
                &emsp;&emsp;
                {todo.title}
            </label>
        </li>
    );
};