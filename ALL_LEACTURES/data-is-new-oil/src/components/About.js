import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";


export class About extends Component {
	constructor() {
		super();
	}

	componentDidMount() {
		// console.log("parent componentdidmount called")
	}

	render() {
		// how we can use useContext in class based component. here we have to consume wo we use ReactContext.consumer
		// in our case it is UserContext.consumer

		return (
			<div>
				<UserContext.Consumer>
					{ (data) => <p>{data.loggedInUser}</p> }
				</UserContext.Consumer>
				<h1>About us page </h1>
				<h2>This is React series</h2>
				<UserClass name="First" />
			</div>
		)
	}
}
export default About;
