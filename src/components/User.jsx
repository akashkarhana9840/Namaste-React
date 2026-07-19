import { useState } from "react";

const User = ({ name, location }) => {
  const [state] = useState(0);
    return (
      
      <div className="user-card">
        <p>functional component</p>
        <h1>state={state}</h1>
        <h1>name:{name}</h1>
        <h3>akarhana004@gmail.com</h3>
        <h4>contact this guy for web design query</h4>
        <h4>Location:{location}</h4>
    </div>
  );
};
export default User;
