import  {LOGO_URL}  from "../utils/constants";
import { useState } from "react";
/*
let  btnText = "Log In"
here we are trying to update btnText the callback fn inside btn click is working fine but in the UI it is't updating
i.e the state of the variable is not getting updated then & there comes the useState(which has to power to make changes in
variable state).
*/
const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Log In");
    /*
      console.log("header renders");
       whenever we'll click the btn then the whole Header component is getting rerendered once again, 
       but from react the reconciliatoin algorithm starts which creates a shadow dom & doing diff algo. & quickly updating 
       the Dom. here from the js concepts const can't be modified but we are modifying it if we see the React mechanism
       it actually rerenders the whole Header component so everytime now const is getting created not getting modified.
     */

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