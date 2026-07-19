import React from "react";
class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state={
             count  : 0,
            state2: 2,
             userInfo:{}
        }
        console.log("child constructor")
    }
     async componentDidMount() {
         const data = await fetch("https://api.github.com/users/akashkarhana9840")
         const json = await data.json();
         console.log(json)
         this.setState({
             userInfo: json,
         })
        console.log("child mount")
    }
    render() {
       // const { name, location } = this.props;
        const { count, state2 } = this.state;
        const{login,id}=this.state.userInfo
        console.log(login+"child render")
    return (
      <div className="user-card">
        <p>Class component</p>
            <h1>state1={count}</h1>
            <button onClick={() => {
                this.setState({
                    count: this.state.count+1,
                })
            }}>click to increase state 1</button>
            <h1>name:{login}</h1>
        <h3>akarhana004@gmail.com</h3>
        <h4>contact this guy for web design query</h4>
        
      </div>
    );
  }
}
export default UserClass;