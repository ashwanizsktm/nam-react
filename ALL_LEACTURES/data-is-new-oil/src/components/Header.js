import  {LOGO_URL}  from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";



const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Log In");
    const onlineStatus = useOnlineStatus();

    // react gives the hooks called useContext to get access fo the userContext.
    const data = useContext(UserContext);
    return (
        <div className='header'>
            <div className='logo-container'>
                <img src={LOGO_URL} />
            </div>
            <div className='nav-items'>
                <ul>
                    <li><span className={`status ${onlineStatus ? "active" : "inactive"}`}></span> {onlineStatus ? "active" : "inactive"}</li>
                    <li> <Link to='/'>Home</Link> </li>
                    <li> <Link to='/about'>About us</Link></li>
                    <li> <Link to='/contact'>Contact us</Link></li>
                    <li> <Link to='/grocery'>Grocery</Link></li>
                    <li>Cart</li>
                    <button onClick={() => {btnNameReact==='Log In' ? setBtnNameReact('Log out') : setBtnNameReact('Log In')}}>
                        {btnNameReact}
                    </button>
                    <li>{data.loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;