import {useParams} from "react-router-dom";
import {useContext} from "react";
import {TodoListContex} from "../contex/contex";
import {Items} from "../index";
function ListItems(){
    const {todoList}=useContext(TodoListContex)
    const param=useParams()
    let listName=[]
    {todoList.map(list=>listName.push(list.name))}
    const filterList =(isCompleted)=>{
        return todoList.map(list =>({...list, items:list.items.filter(item => item.complete === isCompleted)}) )
    }

    return(
        <div>
            {(listName.includes(param.todo))&&<Items isList={true} toDoList={todoList.filter(list=>list.name===param.todo)}/>}
            {(param.todo==='all')&&<Items isList={false} toDoList={todoList}/>}
            {(param.todo==='completed Items')&&<Items isList={false} toDoList={filterList(true)}/>}
            {(param.todo==='active Items')&&<Items isList={false}  toDoList={filterList(false)} />}

        </div>
    )
}
export default ListItems