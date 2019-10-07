import React from "react"
import { TodoListItem } from "./TodoListItem"
import { Todo, ToggleTodo, DeleteTodo, ChangeStatus } from "../model/Todo"

interface TodoListProps {
    todos: Array<Todo>;
    toggleTodo: ToggleTodo;
    deleteTodo: DeleteTodo;
    changeStatus: ChangeStatus;
    todoscompleted: boolean;
}

export const TodoList: React.FC<TodoListProps> = ({
    todos,
    toggleTodo,
    deleteTodo,
    changeStatus,
    todoscompleted
}) => {
    return <ul>
        {todos.map(todo => {
            if (todo.completed === todoscompleted) {
                return <TodoListItem
                    key={todo._id}
                    todo={todo}
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                    changeStatus={changeStatus}
                    todoscompleted={todoscompleted}
                />
            }
        })}
    </ul>
}