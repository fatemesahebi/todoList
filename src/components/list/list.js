import {TodoListContex} from "../contex/contex";
import {useContext, useState} from "react";
import './list-styles.css'
import {AddListPopUp, ListCard} from "../index";
import addImg from '../../images/icons8-add-50.png'
import pic1 from '../../images/best-to-do-list-apps-to-stop-forgetting-things-inner.svg'

function List() {
    const [newList, setNewList] = useState({name: '', items: [], desc: ''})
    const {todoList, dispatch} = useContext(TodoListContex)
    const [displayMode, setDisplayMode] = useState('none')
    const handleAddList = () => {
        setDisplayMode('block')
    }

    return (
        <div className={'list'} >
            {todoList.map(todo => (
                <ListCard todo={todo}
                          newList={newList} setNewList={setNewList}
                          displayMode={displayMode} setDisplayMode={setDisplayMode}/>
            ))}
            <div className={'list-card'}>
                <img src={addImg} alt={'add'} onClick={handleAddList}/>
            </div>
            <AddListPopUp newList={newList} setNewList={setNewList} displayMode={displayMode} setDisplayMode={setDisplayMode}/>
        </div>
    )
}


export default List