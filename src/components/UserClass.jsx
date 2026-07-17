import React from "react";
class UserClass extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { name, location } = this.props;
    return (
        <div className="user-card">
            <p>Class component</p>
            <h1>name:{ name}</h1>
        <h3>akarhana004@gmail.com</h3>
            <h4>contact this guy for web design query</h4>
            <h4>location:{ location}</h4>
      </div>
    );
  }
}
export default UserClass;