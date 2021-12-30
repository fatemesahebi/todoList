import pic1 from "../../images/best-to-do-list-apps-to-stop-forgetting-things-inner.svg";
import {useContext, useState} from "react";
import {TodoListContex} from "../contex/contex";

function AddPopUp({setDisplayItemPopUp,displayItemPopUp,listName,listId,newItem,setNewItem}){
    const {dispatch}=useContext(TodoListContex)
    const handleChangeItem=(e)=>{
    e.preventDefault()
        const {name,value}=e.target
        setNewItem({...newItem,[name]:value})
    }
    const handleSubmitNewItem=()=>{
       dispatch({type:'submitNewItem',
       payload:{name:listName,title:newItem.title,complete:newItem.complete,listId,itemId:newItem.id}
       })
        setDisplayItemPopUp('none')
        setNewItem({title:'',complete:false})
    }
    const handleClosePopUp = () => {
        setDisplayItemPopUp('none')
        setNewItem({name: '', items: [], desc: ''})
    }
    return(
        <div style={{display:displayItemPopUp}} className={'pop-up-part'}>
            <p className={'close-popUp'} onClick={handleClosePopUp}>&times;</p>
            <div className={'pop-up'}>
                <img src={pic1} className={'pop-up-img'} onClick={()=>{setDisplayItemPopUp('none');setNewItem({title:'',completed:false})}}/>
                <div className={'pop-up-inputPart'}>
                    <label htmlFor={'new-item-title'}>What do you want to do?</label>
                    <input id={'new-item-title'} name={'title'} value={newItem.title} onChange={handleChangeItem}/>
                    <button className={'btn submit-btn'} onClick={handleSubmitNewItem}>save changes</button>
                </div>
            </div>
        </div>
    )
}
export default AddPopUp