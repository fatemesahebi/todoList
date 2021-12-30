import {BrowserRouter,Route,Routes} from "react-router-dom";
import {Home,TodoList} from "../index";
import './Container.styles.css'
function Container(){
    return(
        <div className={'container'}>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/:todo'} element={<TodoList/>}/>
                </Routes>
            </BrowserRouter>


        </div>
    )
}
export default Container