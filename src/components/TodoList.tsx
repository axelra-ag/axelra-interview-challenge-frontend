import React from "react"
import { TodoListItem } from "./TodoListItem"
import { Todo, ToggleTodo, DeleteTodo, ChangeStatus } from "../model/Todo"
import styled from "styled-components";

interface TodoListProps {
    todos: Array<Todo>;
    toggleTodo: ToggleTodo;
    deleteTodo: DeleteTodo;
    changeStatus: ChangeStatus;
    todoscompleted: boolean;
}

const TodoUnorderedList = styled.ul`
    font-size: 100%;
    list-style: none;
    width: 100%;
    overflow-x: hidden;
    margin-top: 2rem;
    `;

export const TodoList: React.FC<TodoListProps> = ({
    todos,
    toggleTodo,
    deleteTodo,
    changeStatus,
    todoscompleted
}) => {
    return <TodoUnorderedList>
        {todos
            .filter(todo => todo.completed === todoscompleted)
            .map(todo => {
                return <TodoListItem
                    key={todo._id}
                    todo={todo}
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                    changeStatus={changeStatus}
                    todoscompleted={todoscompleted}
                />
            })}
    </TodoUnorderedList>
}