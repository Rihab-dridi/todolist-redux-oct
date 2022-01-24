import { ADD, DELETE } from "./action-types"

export const addHandler=(newTodo)=>{
    return {
        type:ADD,
        payload: newTodo
    }
}
export const deleteHandler=(ID)=>{
    return {
        type:DELETE,
        payload: ID
    }
}