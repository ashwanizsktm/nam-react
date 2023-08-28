import  {LOGO_URL}  from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Log In");
    return (
        <div className='header'>
            <div className='logo-container'>
                <img src={LOGO_URL} />
            </div>
            <div className='nav-items'>
                <ul>
                    <li> <Link to='/'>Home</Link> </li>
                    <li> <Link to='/about'>About us</Link></li>
                    <li> <Link to='/contact'>Contact us</Link></li>
                    <li>Cart</li>
                    <button onClick={() => {btnNameReact==='Log In' ? setBtnNameReact('Log out') : setBtnNameReact('Log In')}}>
                        {btnNameReact}
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default Header;