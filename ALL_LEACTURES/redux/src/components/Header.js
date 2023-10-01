import  {LOGO_URL}  from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Log In");
    const onlineStatus = useOnlineStatus();

    // subscribing to a store using selector..
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

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
                    <li><Link to='/cart'>Cart - ({cartItems.length} items) </Link></li>
                    <button onClick={() => {btnNameReact==='Log In' ? setBtnNameReact('Log out') : setBtnNameReact('Log In')}}>
                        {btnNameReact}
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default Header;