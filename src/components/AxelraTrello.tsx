import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { __GRAY_SCALE } from "../layout/Theme";
import { getDomain } from "../helpers/Domain";
import { HTTP_OPTIONS, PROTOCOL_METHOD } from "../helpers/FetchOptions";
import { Todo, ToggleTodo, AddTodo } from "../model/Todo"
import { TodoList } from "./TodoList"
import { AddTodoForm } from "./AddTodoForm"
import shortid from "shortid"

const Container = styled.div`
  border: 1px solid ${__GRAY_SCALE._200};
  padding: 1em;
  border-radius: 6px;
`;

const Title = styled.h1`
  font-size: 32px;
`;

const initalTodos: Array<Todo> = [{
  userId: "manuelgr",
  id: "1",
  title: "test1",
  completed: false,
},
{
  userId: "manuelgr",
  id: "2",
  title: "test2",
  completed: true,
}];

export const AxelraTrello = () => {
  const [response, setResponse] = useState(null);

  const [todos, setTodos] = useState(initalTodos);

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
    newTodo.trim() !== "" &&
      setTodos([...todos, { userId: "manuelgr", id: shortid.generate(), title: newTodo, completed: false }]);
  }

  useEffect(() => {
    fetch(`${getDomain()}/hello`, HTTP_OPTIONS(PROTOCOL_METHOD.GET))
      .then(response => response.json())
      .then(response => {
        if (response.success) {
          setResponse(response.data.message);
        }
      })
      .catch(error => {
        console.error("Some error occured", error);
      });
  }, []);
  return (
    <>
      <Title>Axelra Trello Challenge</Title>
      {response ? <p>{response}</p> : <p>Loading...</p>}
      <Container>
        <React.Fragment>
          <TodoList todos={todos} toggleTodo={toggleTodo} />
          <AddTodoForm addTodo={addTodo} />
        </React.Fragment>
      </Container>
    </>
  );
};

export default AxelraTrello;
