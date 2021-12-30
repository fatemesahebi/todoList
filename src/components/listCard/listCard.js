import {Link} from "react-router-dom";
import './listCard-styles.css'
import {useContext} from "react";
import {TodoListContex} from "../contex/contex";
import {deleteImg, editImg, seeImg} from "../index";

function ListCard({todo, displayMode, setDisplayMode, newList, setNewList}) {
    const {dispatch} = useContext(TodoListContex)
    const handleDeleteList = (id) => {
        dispatch({
            type: 'deleteList',
            payload: {id}
        })
    }
    const handleEditList = (todo) => {
        setDisplayMode('block')
        setNewList({...newList, ...todo})
    }
    return (
        <div>
            <div key={todo.id} className={'list-card'}>
                <div className={'title-background'}>
                    <p>{todo.name[0].toUpperCase()}</p>
                </div>
                <h3>{todo.name}</h3>
                <h4 style={{overflowX:'hidden',overflowY:'scroll'}}>{todo.desc}</h4>
                <div className={'icon-part'}>
                    <img src={editImg} onClick={() => handleEditList(todo)}/>
                    <Link to={`/${todo.name}`}><img src={seeImg}/></Link>
                    <img src={deleteImg} onClick={() => handleDeleteList(todo.id)}/>
                </div>


            </div>
        </div>
    )
}

export default ListCard