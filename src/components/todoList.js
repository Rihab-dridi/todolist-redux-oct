import React from "react";
import { useSelector } from "react-redux";
import Todo from "./todo";

export default function TodoList( ) {
const todos=useSelector(state=> state.todos  )
  return (
    <div className="todoListContainer">
      {todos.map((el, key) => (
        <Todo key={el.id} todo={el}/>
      ))}
    </div>
  );
}
