import React, { FormEvent } from "react";
import { Todo, ToggleTodo, DeleteTodo, ChangeStatus } from '../model/Todo'
import styled from "styled-components";

interface TodoListItemProps {
    todo: Todo;
    toggleTodo: ToggleTodo;
    deleteTodo: DeleteTodo;
    changeStatus: ChangeStatus;
}

const DeleteButton = styled.button`
    background-image: url('https://cdn2.iconfinder.com/data/icons/round-interface-1/217/50-512.png');
    background-size: 16px 16px;
    height: 16px;  
    width: 16px;
    border-radius: 50%;
    border: 0;
`;

const ChangeButtonUpDown = styled.button`
    background-image: url('https://cdn3.iconfinder.com/data/icons/pyconic-icons-1-2/512/arrow-up-down-2-512.png');
    background-size: 16px 16px;
    height: 16px;  
    width: 16px;
    border-radius: 50%;
    border: 0;
`;

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
            <label>
                <ChangeButtonUpDown type="submit" onClick={handleSubmitChange}></ChangeButtonUpDown>
                &emsp;
                <DeleteButton type="submit" onClick={handleSubmitDelete}></DeleteButton>
                &emsp;
                {todo.title}
            </label>
        </li>

    );
};