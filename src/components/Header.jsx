import { LOGO_URL } from "../utils/Constants"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [btnName, setbtnName] = useState("login");
  useEffect(() => {
    console.log("useEffect called")
  },[btnName])
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Abous us</Link>
          </li>
          <li>
            <Link to="/contact">Conatact Us</Link>
          </li>
          <li>cart</li>
          <button
            className="login"
            onClick={() => {
              setbtnName(btnName === "login" ? "logout" : "login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;