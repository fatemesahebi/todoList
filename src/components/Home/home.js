import './home-styles.css'
import {Profile,List} from '../index'
function Home(){
    return(
        <div className={'list-container'}>
            <Profile/>
            <List/>
        </div>
    )
}
export default Home