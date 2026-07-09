import { LOGO_URL } from "../utils/Constants"
const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};
export default Header;