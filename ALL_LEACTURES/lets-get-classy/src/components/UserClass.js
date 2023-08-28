// naming convention should be User.js bt, UserClass is given to differentiate everything.
import React from "react";

class UserClass extends React.Component {
    /*
        * Loading a class based component meand means I am creating a instance of the class.
    */
    constructor(props) {
        super(props)
        /*
            here's a question arises, Why do we need super(props)? So, the simple answer to this question is
            that this thing basically allows accessing this.props in a Constructor function. In fact, what the super() function
            does is, calls the constructor of the parent class.
        */

        // console.log(this.props.name + " constructor called!");

        /* Way to create a state inside class based component */
        this.state = {
            count: 0,
            count1: 1,
            userInfo: {
                name: "Dummy",
                company: "default",
                blog: "https://blog_url"
            }
        }
    }

    // componentDidMount() {
    //     console.log(this.props.name + " child componentdidmount called")
    // }

    // how to make an api call in componentdidmount
    async componentDidMount() {
        console.log("component did mount is called");
      this.fetchData();
    }

    async fetchData() {
        const data = await fetch("https://api.github.com/users/ashwanizsktm");
        const json = await data.json();
        this.setState({
            userInfo: json
        })
    }

    componentDidUpdate() {
        console.log("component did update is called!!!");
    }

    componentWillUnmount() {
        console.log("componentwill unmount is called!!");
    }

    render() {
        // console.log(this.props.name + " Render called!");
        // const {name} = this.props;
        const {count, count1} = this.state;
        const {name, company, blog, avatar_url} = this.state.userInfo;
        return (
            <div className="user-card">
                {/* <h1>count: {count}</h1> */}
                {/* we can't do in this way. Naver update varialbe directly in in class based component. it'll create some 
                inconsisitency in in the dall */}
                {/* <button onClick={()=>  {count++}}>increment</button> */}

                {/* <button onClick={()=> {this.setState({
                    count: this.state.count + 1,
                    count1: this.state.count1 + 1 
                })}}>increment</button> */}

                {/* <h1>count: {count1}</h1> */}

                <img src={avatar_url} width={300} height={320} />
                <h2>Name: {name}</h2>
                <h2>company: {company} </h2>
                <h2>Contact:<a target="_blank" href={blog}>{blog}</a></h2>
            </div>
        )
    }
}
export default UserClass;

/*
 * If we look at the order of overall execution it'll be like
 * Parent constructor => parent render => child constructor => child render => childdidmount => parentdidMount
 */

/**
 * we call api in componentdidmount, but the question is why?
 * Ans:- we call api inside componentdidmount bcz of the oreder of execution works like constructor => render => componentdidmount
 * in functional based component we use useEffect to call the api which get's called after the render
 * As react principal works and says first run the component find all the props state inside it then render it once, and just
   after that call the api data and fill the webpage with api data. 
   conclusion:- we call api inside componentidmount because it get's executed just after the render method.
 */


/** Lifecycle execution
 * ====== Mounting phase =============
 * constructor(dummy)
 * render (dummy)
 * <HTML dummy data for few milisec>
 * componentDidMount(API call)
 * ====== updating phase =====
 * this.setstate (state variable is updated)
 * render(with api data)
 * HTML loaded (with new api data)
 * componentDidUpdate
 * componentwillunmount => when we navigate to the other pages
 */