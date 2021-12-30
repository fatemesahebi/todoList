import {TodoListContex} from "../contex/contex";
import {useContext} from "react";
import './checkbox-style.css'

function CheckBox({listId,itemId,checked,lable}){
    const{dispatch}=useContext(TodoListContex)
    const handleChangeActivation = (listId,itemId,e) => {
      dispatch(
          {
              type:'changeActivation',
              payload:{listId,itemId,complete:e.target.checked}
          }
      )
    }
    return(
        <div className={'checkBox'}>
           <input onChange={(e)=>handleChangeActivation(listId,itemId,e)} id={`${listId}-${itemId}`} checked={checked} type={"checkbox"} />
            <label htmlFor={`${listId}-${itemId}`}>{lable}</label>
        </div>
    )
}
export default CheckBox