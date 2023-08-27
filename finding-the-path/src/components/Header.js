import  {LOGO_URL}  from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Header = () => {
    /** Best practices for useState()
      * Never use it outside the component
      * Never use it inside any js expression for ex:- loops, if function etc
      * Keep it on the top when the component(fn) starts bcz js is synchronous single treaded language so keeping on the top won't create inconsistancy in code.
     */
    const [btnNameReact, setBtnNameReact] = useState("Log In");
    /* How is useeffect called
        it'll be called everytime when the component renders, the 2nd args the depedendy array changes the behavior of
        it's render. the 2nd args is optional, only the callback fn is mandatory, so if we don't use the 2nd args it'll
        render every time component renders. let's use console.log("useeffect called!"); with & without dependency
        array to see the render behavior difference inside useeffect.
        console.log('Header render'); in header component to verify the render cycle.
        cases: 1. if no dependeny array ==> useEffect is called on every render
        cases: 2. if dependey array is empty = [] => useEffect is called only once on initial render,
        cases: 3, if dependey array is filled with state variable [btnNameReact] => useEffect is called only when the state changes.
        whenever we change the route it's doesn't get loaded once again it just navigates the component, browser don't
        get refresh this's why it is known as single page application(SPA)
    */
   /*
        useEffect(()=>{
            console.log("useeffect called!");
        }, [])
   */
   /*
        useEffect(()=>{
            console.log("useeffect called!");
        }, [btnNameReact])
   */
   /*
    useEffect(()=>{
            console.log("useeffect called!");
    })
   */

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