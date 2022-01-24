import { useDispatch } from "react-redux";
import { deleteHandler } from "./redux/action";

export default function Todo({ todo }) {

const dispatch=useDispatch()

const deleteTodo=()=>{
  dispatch(deleteHandler(todo.id))
}

  return (
    <div className="todoContainer">
      <h3>{todo.text} </h3>
      <div className="todoBtns">
        <button onClick={deleteTodo}>
          {" "}
          <i class="far fa-trash-alt"></i>
        </button>
        <button>
          {" "}
          <i class="far fa-check-circle"></i>
        </button>
      </div>
    </div>
  );
}
