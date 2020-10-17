import React, { useState, ChangeEvent, FormEvent } from "react";
import { AddTodo } from "../model/Todo";
import styled from "styled-components";

interface AddTodoFormProps {
    addTodo: AddTodo;
}

const CenteredDiv = styled.div`
    text-align: center;
    `;

export const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
    const [newTodo, setNewTodo] = useState<string>("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value);
    };

    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addTodo({
            userId: "manuelgr",
            title: newTodo,
            completed: false,
        });
        setNewTodo("");
    };

    return <CenteredDiv>
        <form>
            <input type="text" value={newTodo} onChange={handleChange} />
            <button type="submit" onClick={handleSubmit}>Add Todo</button>
        </form>
    </CenteredDiv>
}