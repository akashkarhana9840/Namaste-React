import { LOGO_URL } from "../utils/Constants"
import { useState } from "react";
const Header = () => {
  const [btnName, setbtnName] = useState("login");
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Abous us</li>
          <li>Conatact Us</li>
          <li>cart</li>
          <button className="login" onClick={() => {
            setbtnName(btnName==="login"?"logout":"login")
          }}>{btnName}</button>
        </ul>
      </div>
    </div>
  );
};
export default Header;