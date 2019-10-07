import React, { FormEvent } from "react";
import { Todo, ToggleTodo, DeleteTodo, ChangeStatus } from '../model/Todo'

interface TodoListItemProps {
    todo: Todo;
    toggleTodo: ToggleTodo;
    deleteTodo: DeleteTodo;
    changeStatus: ChangeStatus;
    todoscompleted: boolean;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({
    todo,
    deleteTodo,
    changeStatus,
    todoscompleted,
}) => {
    const handleSubmitChange = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        changeStatus(todo._id);
    };

    const handleSubmitDelete = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        deleteTodo(todo._id);
    };

    const changeButtonText = todoscompleted ? "Change to In Progress" : "Change to Completed";

    return (
        <li>
            <label>
                <button type="submit" onClick={handleSubmitChange}>{changeButtonText}</button>
                &emsp;&emsp;
                <button type="submit" onClick={handleSubmitDelete}>Delete Item</button>
                &emsp;&emsp;
                {todo.title}
            </label>
        </li>

    );
};