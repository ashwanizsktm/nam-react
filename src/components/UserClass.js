// naming convention should be User.js bt, UserClass is given to differentiate everything.
import React from "react";

class UserClass extends React.Component {
  
    constructor(props) {
        super(props)
        this.state = {
            userInfo: {
                name: "Dummy",
                company: "default",
                blog: "https://blog_url"
            }
        }
    }
    async componentDidMount() {
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
        // console.log("component did update is called!!!");
    }

    componentWillUnmount() {
        // console.log("componentwill unmount is called!!");
    }

    render() {
        const {count, count1} = this.state;
        const {name, company, blog, avatar_url} = this.state.userInfo;
        return (
            <div className="user-card">
                <img src={avatar_url} width={300} height={320} />
                <h2>Name: {name}</h2>
                <h2>company: {company} </h2>
                <h2>Contact:<a target="_blank" href={blog}>{blog}</a></h2>
            </div>
        )
    }
}
export default UserClass;
