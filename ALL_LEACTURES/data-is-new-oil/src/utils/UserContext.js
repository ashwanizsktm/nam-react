import { createContext } from "react";

const UserContext = createContext({
    loggedInUser: "loggedin User"
})

export default UserContext;