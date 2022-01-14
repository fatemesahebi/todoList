import {HashRouter, Route, Routes} from "react-router-dom";
import {Home,TodoList} from "../index";
import './Container.styles.css'
function Container(){
    return(
        <div className={'container'}>
            <HashRouter>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path={'/:todo'} element={<TodoList/>}/>
                </Routes>
            </HashRouter>


        </div>
    )
}
export default Container