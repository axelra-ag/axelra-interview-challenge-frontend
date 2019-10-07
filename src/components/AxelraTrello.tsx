import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { __GRAY_SCALE } from "../layout/Theme";
import { getDomain } from "../helpers/Domain";
import { HTTP_OPTIONS, PROTOCOL_METHOD } from "../helpers/FetchOptions";
import { Todo, ToggleTodo, AddTodo, DeleteTodo, ChangeStatus } from "../model/Todo"
import { TodoList } from "./TodoList"
import { AddTodoForm } from "./AddTodoForm"

const Container = styled.div`
  border: 1px solid ${__GRAY_SCALE._200};
  padding: 1em;
  border-radius: 6px;
`;

const Title = styled.h1`
  font-size: 32px;
`;

export const AxelraTrello = () => {
  const TodoArray: Array<Todo> = [];

  const [todos, setTodos] = useState<Array<Todo>>(TodoArray);

  const toggleTodo: ToggleTodo = selectedTodo => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo;
    })
    setTodos(newTodos);
  }

  const addTodo: AddTodo = newTodo => {
    fetch(`${getDomain()}/addtodo`, { ...HTTP_OPTIONS(PROTOCOL_METHOD.POST), body: JSON.stringify(newTodo) })
      .then(response => response.json())
      .then(response => {
        if (!response.success) {
          console.error(response);
        }
        setTodos([...todos, {
          ...newTodo,
          _id: response.data.dbQueryResult.insertedId
        }]);
      })
      .catch(error => {
        console.error("Some error occured", error);
      });
  }

  const deleteTodo: DeleteTodo = todoid => {
    fetch(`${getDomain()}/deletetodo`, { ...HTTP_OPTIONS(PROTOCOL_METHOD.DELETE), body: todoid })
      .then(response => response.json())
      .then(response => {
        if (!response.success) {
          console.error(response);
        }
      })
      .catch(error => {
        console.error("Some error occured", error);
      });
    setTodos(
      todos.splice(todos.findIndex(todo => todo._id === todoid))
    );
  }

  const changeStatus: ChangeStatus = todoid => {
    fetch(`${getDomain()}/changestatus`, { ...HTTP_OPTIONS(PROTOCOL_METHOD.PUT), body: todoid })
      .then(response => response.json())
      .then(response => {
        if (!response.success) {
          console.error(response);
        }
        let index = todos.findIndex(todo => todo._id === todoid);
        todos[index].completed = !todos[index].completed;
        setTodos([...todos]);
      })
      .catch(error => {
        console.error("Some error occured", error);
      });
  }

  const fetchListItems = () => {
    fetch(`${getDomain()}/getalltodos`, HTTP_OPTIONS(PROTOCOL_METHOD.GET))
      .then(response => response.json())
      .then(response => {
        if (response.success) {
          setTodos(response.data.dbQueryResult);
        }
      })
      .catch(error => {
        console.error("Some error occured", error);
      });
  }

  useEffect(fetchListItems, []);
  return (
    <>
      <Title>Axelra Trello Challenge</Title>
      {
        todos.length ?
          <div>
            <Container>
              <h1>In Progress</h1>
              <React.Fragment>
                <TodoList
                  todos={todos}
                  toggleTodo={toggleTodo}
                  deleteTodo={deleteTodo}
                  changeStatus={changeStatus}
                  todoscompleted={false}
                />
                <AddTodoForm addTodo={addTodo} />
              </React.Fragment>
            </Container>
            <Container>
              <h1>Done</h1>
              <React.Fragment>
                <TodoList
                  todos={todos}
                  toggleTodo={toggleTodo}
                  deleteTodo={deleteTodo}
                  changeStatus={changeStatus}
                  todoscompleted={true}
                />
              </React.Fragment>
            </Container>
          </div> :
          <p>Loading...</p>
      }
    </>
  );
};

export default AxelraTrello;
