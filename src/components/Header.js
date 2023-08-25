import  {LOGO_URL}  from "../utils/constants";
import { useState } from "react";
const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Log In");
    return (
        <div className='header'>
            <div className='logo-container'>
                <img src={LOGO_URL} />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
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