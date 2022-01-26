import "./App.css";
import AddTodo from "./components/addTodo";
import TodoList from "./components/todoList";
import { useState } from "react";
import { Form } from "react-bootstrap";
import SelectTodo from "./components/selectTodo";

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
      {/* <div className="header" >
        <AddTodo />
        <SelectTodo />
      </div> */}
      <AddTodo/>
      <SelectTodo/>
      <TodoList todos={todoList} />
    </div>
  );
}

export default App;
