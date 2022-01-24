import "./App.css";
import AddTodo from "./components/addTodo";
import TodoList from "./components/todoList";
import { useState } from "react";
import {Form  } from "react-bootstrap";

function App() {
  //step1: create the dynamic data
  const [todoList, setTodoList] = useState([
    { text: "Save the galaxy", id: 1, isDone: false },
    { text: "walk the cat", id: 2, isDone: false },
    { text: "new  todo ", id: 3, isDone: false },
  ]);

  return (
    <div className="App">
      <h1>TODO APP!!</h1>
      <AddTodo />
      <Form.Select aria-label="Default select example">
        <option>view</option>
        <option value="1">All</option>
        <option value="2">Done</option>
        <option value="3">unDone</option>
      </Form.Select>
      <TodoList todos={todoList} />
    </div>
  );
}

export default App;
