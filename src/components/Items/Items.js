import {useContext, useState} from "react";
import {TodoListContex} from "../contex/contex";
import {CheckBox, deleteImg, editImg} from "../index";
import addImg from "../../images/icons8-add-50.png";
import {AddPopUp} from "../index";
import {useParams} from "react-router-dom";
import './items-style.css'

function Items({toDoList, isList}) {
    const param = useParams()
    const [listId, setListId] = useState(0)
    const [newItem, setNewItem] = useState({title: '', complete: false})
    let {dispatch} = useContext(TodoListContex)
    const [displayItemPopUp, setDisplayItemPopUp] = useState('none')
    const handleDeleteItem = (listId, itemId) => {
        dispatch({
            type: 'deleteItem',
            payload: {listId, itemId}
        })
    }
    const handleEditItem = (listId, item) => {
        setDisplayItemPopUp('block')
        setNewItem({...newItem, ...item})
        setListId(listId)

    }
    const handleAddItem = () => {
        setDisplayItemPopUp('block')
        setNewItem({title: '', complete: false})

    }
    return (
        <div>
            <div >
                <ul className={'list-items-container'}>
                    {toDoList.map(list => list.items.map(item =>
                        <li className={'item-row'}>
                            <CheckBox checked={item.complete} listId={list.id} itemId={item.id} lable={item.title}/>
                            <div className={'item-options'}>
                                <img src={editImg} onClick={() => handleEditItem(list.id, item)}/>
                                <img src={deleteImg}  onClick={() => handleDeleteItem(list.id, item.id)}/>
                            </div>

                        </li>
                    ))}
                    {
                        (isList) &&
                        <li className={'item-row'}><img onClick={handleAddItem} src={addImg} style={{margin:"auto"}}/></li>
                    }
                </ul>
            </div>

            <AddPopUp listName={param.todo} displayItemPopUp={displayItemPopUp}
                      setDisplayItemPopUp={setDisplayItemPopUp} listId={listId}
                      newItem={newItem} setNewItem={setNewItem}/>


        </div>
    )
}

export default Items