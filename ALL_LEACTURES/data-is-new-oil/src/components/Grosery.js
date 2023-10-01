import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Grocery = () => {
    const { loggedInUser } = useContext(UserContext)
    return (
        <div>
            <h1>This is the grocery component which is have many sub components</h1>
            <p>user status: {loggedInUser}</p>
        </div>
    )
}
export default Grocery;