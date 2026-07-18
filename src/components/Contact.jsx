import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
class Contact extends Component{
  constructor(props) {
    super(props);
    console.log("parent constructor")

  }
  componentDidMount(){
  console.log("parent mount")
  }

  render() {
    const email = "akarhana004@gmail.com";
    console.log("parent render")
    return (
      <div className="contact">
        <h1>my contact no is:8368980798</h1>
        <h2>my email is{email} </h2>
        <button>click to Contact</button>
        <UserClass name="first(class)" location={"London"} />
        <UserClass name="Second(class)" location={"US"} />
      </div>
    );
  }
 }
export default Contact;