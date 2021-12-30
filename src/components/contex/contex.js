import {createContext, useReducer} from "react";
import {data,reducer} from './../index'
export const TodoListContex=createContext({todolist:[],dispatch:()=>{}})
function TodoListContexProvider({children}){
   const [todoList,dispatch]=useReducer(reducer,data)
    return(
        <TodoListContex.Provider value={{todoList, dispatch}}>
            {children}
        </TodoListContex.Provider>
    )
}
export default TodoListContexProvider