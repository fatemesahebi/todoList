import profileImg from './../../images/profilePhoth-fatemeSahebi.jfif'
import './profile-styles.css'
import {Link} from "react-router-dom";
function Profile(){
    return(
        <div className={'profile-part'}>
            <img src={profileImg} alt={'goal'} style={{width:"100px",height:'100px',borderRadius:'100%'}}/>
            <h3>Hi Fateme ^_^</h3>
            <p>Are you ready?<br/>
                your work is here!</p>
            <h4><Link className={'link profile-part-link'}  to={'completed Items'}>Completed Items</Link></h4>
            <h4><Link className={'link profile-part-link'}  to={'active Items'}>Active Items</Link></h4>
        </div>
    )
}
export default Profile