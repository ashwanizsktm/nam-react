import { useState } from "react";

const User = ({name}) => {
  const [count, setCount] = useState(0);
  const [count1] = useState(1);
  /**
   * Involing a functional component (rendering a functional component) basically means mounting a component.
   */
  return(
    <div className="user-card">
        <h1>{count}</h1>
        <h1>{count1}</h1>
        <h2>Name: {name}</h2>
        <h2>Location: Banglore</h2>
        <h2>Contact: ashwanizskt@gmail.com</h2>
    </div>
  )
}

export default User;