import {TodoListContex} from "../contex/contex";
import {useContext} from "react";
import {Link} from "react-router-dom";
import listImg from '../../images/kisspng-human-resource-management-system-clip-art-5b30a06b2fac30.5958236615299134511953.png'
import {homeImg} from "../index";
import './menu-styles.css'
function Menu(){
    const {todoList}=useContext(TodoListContex)
    let menuItems=['all','completed Items','active Items']
        todoList.map(item=>menuItems.push(item.name))
    return(
        <div className={'menu'}>
            <img src={listImg} style={{width:'100px', height:'100px'}}/>
            <ul>
                {menuItems.map((item,index)=><li key={index}><Link className={'link'} to={`/${item}`}>{item}</Link></li>)}
            </ul>
            <Link to={'/'}><img src={homeImg} style={{float:'right',width:'30px',height:'30px'}}/></Link>

        </div>
    )
}
export default Menu