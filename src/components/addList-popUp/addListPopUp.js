import pic1 from "../../images/best-to-do-list-apps-to-stop-forgetting-things-inner.svg";
import addImg from "../../images/icons8-add-50.png";
import {useContext} from "react";
import {TodoListContex} from "../contex/contex";
import './addLIst-popUp.css'

function AddListPopUp({displayMode,setDisplayMode,newList,setNewList}){
    const {dispatch}=useContext(TodoListContex)
    const handleInput = (e) => {
        e.preventDefault()
        const {name, value} = e.target
        setNewList({...newList, [name]: value})
    }
    const handleSubmitNewList = () => {
        dispatch({
            type:'addNewList',
            payload: {
                name: newList.name,
                desc: newList.desc,
                items: newList.items,
                id:newList.id
            }
        })
        setNewList({name: '', items: [], desc: ''})
        setDisplayMode('none')
    }
    const handleClosePopUp = () => {
        setDisplayMode('none')
        setNewList({name: '', items: [], desc: ''})
    }
    return(
        <div className={'pop-up-part'} style={{display:displayMode}}>
            <p className={'close-popUp'} onClick={handleClosePopUp}>&times;</p>
            <div className={'pop-up'}>
                <img src={pic1} className={'pop-up-img'} />
                <div className={'pop-up-inputPart'}>
                    <label htmlFor={'new-list-name'}>What is your list name?</label>
                    <input id={'new-list-name'} name={'name'} value={newList.name} onChange={handleInput}/>
                    <label htmlFor={'new-list-desc'}>What is your list description?</label>
                    <input id={'new-list-desc'} name={'desc'} value={newList.desc} onChange={handleInput}/>
                    <button className={'btn submit-btn'} onClick={handleSubmitNewList}>save changes</button>
                </div>
            </div>
        </div>
    )
}
export default AddListPopUp