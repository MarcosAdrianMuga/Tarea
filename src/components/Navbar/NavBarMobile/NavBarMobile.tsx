import "./NavbarMobile.css";
import StandardC from "../../../assets/StandardC.jpg";
import { useState } from "react";

const NavBarMobile = () => {
  const [menu, setMenu] = useState(false);

  const handleClick = () => {
    setMenu(!menu);
  };
  return (
    <header className="Cabecera">
      <button className="Cabecera-button" onClick={handleClick}>
        <svg
          className="Cabecera-svg"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          ></path>
        </svg>
      </button>

      <nav className={`Cabecera-nav ${menu ? "isActive" : ""}`}>
        <ul className="Cabecera-ul">
          <li className="Cabecera-li">
            <a href="#about" className="Cabecera-a">
              About
            </a>
          </li>
          <li className="Cabecera-li">
            <a href="#features" className="Cabecera-a">
              Features
            </a>
          </li>
          <li className="Cabecera-li">
            <a href="#pricing" className="Cabecera-a">
              Pricing
            </a>
          </li>
          <li className="Cabecera-li">
            <a href="#testimonials" className="Cabecera-a">
              Testimonials
            </a>
          </li>
          <li className="Cabecera-li">
            <a href="#help" className="Cabecera-a">
              Help
            </a>
          </li>

          <a className="singin">Sign In</a>
          <a className="signUp">Sign Up</a>
        </ul>
      </nav>

      <div className={`Cabecera-icon ${menu ? "isActive" : ""}`}>
        <img className="logoi" alt="" src={StandardC} />
        <div className="laslesvpn2">
          <span className="lasles">Lasles</span>
          <b className="navpn">VPN</b>
        </div>
      </div>
    </header>
  );
};

export default NavBarMobile;
