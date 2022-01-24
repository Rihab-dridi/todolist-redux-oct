import { ADD, DELETE } from "./action-types";

const initialState = {
  todos: [{ id: 1, text: "workshop redux", isDone: false }],
  filter: "",
};

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case DELETE:
      return {
        ...state,
        todos: state.todos.filter((el) => el.id !== action.payload),
      };

    default:
      return state;
  }
};
