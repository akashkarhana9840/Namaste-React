import React from "react";
class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state={
             count  : 0,
             state2  :2
        }
        console.log(this.props.name+"child constructor")
    }
    componentDidMount() {
        console.log(this.props.name+"child mount")
    }
    render() {
        const { name, location } = this.props;
        const { count, state2 } = this.state;
        console.log(name+"child render")
    return (
      <div className="user-card">
        <p>Class component</p>
            <h1>state1={count}</h1>
            <button onClick={() => {
                this.setState({
                    count: this.state.count+1,
                })
            }}>click to increase state 1</button>
            <h1>name:{name}</h1>
        <h3>akarhana004@gmail.com</h3>
        <h4>contact this guy for web design query</h4>
        <h4>location:{location}</h4>
      </div>
    );
  }
}
export default UserClass;