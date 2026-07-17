import User from "./User";
import UserClass from "./UserClass";
const Contact = () => {
    const email = "akarhana004@gmail.com";
    return (
      <div className="contact">
        <h1>my contact no is:8368980798</h1>
        <h2>my email is{email} </h2>
        <button>click to Contact</button>
        <User name={"Aakash karhana(function)"} location={"gr noida"} />
        <UserClass name="Aakash karhana(class)" location={"London"} />
      </div>
    );
}
export default Contact;