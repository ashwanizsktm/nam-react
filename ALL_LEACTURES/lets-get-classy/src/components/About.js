import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
/*
const About = () => {
  return (
    <div>
        <h1>About us page</h1>
        <h2>This is React series</h2>
         <User name="Passing props using fn comp^" /> }    // comment this line to get the clear understanding.
        <UserClass name="passing props using class based comp^"/>
    </div>
  )
}
*/

/*Let's just create About component as a class base so that we can get the understanding even better.*/

export class About extends Component {
	/*
	 * the order in which the execution the call happens
	 * constructor ==> render ==> componentdidMount
	 */
  constructor() {
	super();
    // console.log('parent constructor called!');
  }

  componentDidMount() {
	// console.log("parent componentdidmount called")
}

  render() {
	// console.log("parent render called!");
    return(
      <div>
          <h1>About us page</h1>
          <h2>This is React series</h2>
          <UserClass name="First"/>
          {/* <UserClass name="Second"/> */}
      </div>
    )
  }
}
export default About;

/*
	* If we look at the order of overall execution it'll be like
	* Parent constructor => parent render => child constructor => child render => childdidmount => parentdidMount.
*/

/*
	* If we use 2 childs (uncomment the second child) inside About component then the order of overall execution will be like:-
	< RENDERING PHASE == IN A SINGLE BATCH >
	* parent constructor called!
	* parent render called!
	* First constructor called!
	* First Render called!
	* Second constructor called!
	* Second Render called!

    < COMMIT PHASE >
	// DOM UPDATED - IN A SINGLE BATCH >
	* First child componentdidmount called
	* Second child componentdidmount called
	* parent componentdidmount called
*/