import './todolist-styles.css'
import {Menu, ListItems} from "../index";
function TodoList(){
    return(
        <div className={"listItems-container"}>
            <Menu/>
            <ListItems/>
        </div>
    )
}
export default TodoList