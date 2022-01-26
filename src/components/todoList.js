import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterHandler, filterTabHandler } from "./redux/action";
import { todosReducer } from "./redux/reducer";
import Todo from "./todo";




export default function TodoList( ) {
 const dispatch= useDispatch()
const filter=useSelector(state=>  state.filter)
const todos=useSelector(state=>  state.todos)
const filteredTodo=useSelector(state=>  state.filteredTodo)
 useEffect(()=> dispatch (filterTabHandler()) , [filter, todos])


  return (
    <div className="todoListContainer">
      {filteredTodo.map((el, key) => (
        <Todo key={el.id} todo={el}/>
      ))}
    </div>
  );
}
