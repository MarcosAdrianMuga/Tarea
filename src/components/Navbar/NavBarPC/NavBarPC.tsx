import "./NavbarPC.css";
import StandardC from "../../../assets/StandardC.jpg";

export default function NavBarPC() {
  return (
    <div className="papa">
      <div className="nav">
        <img className="logoi" alt="" src={StandardC} />
        <div className="laslesvpn2">
          <span className="lasles">Lasles</span>
          <b className="navpn">VPN</b>
        </div>
      </div>
      <div className="textocontenedor">
        <a href="#about" className="texto">
          About
        </a>
        <a href="#features" className="texto">
          Features
        </a>
        <a href="#pricing" className="texto">
          Pricing
        </a>
        <a href="#testimonials" className="texto">
          Testimonials
        </a>
        <a href="#help" className="texto">
          Help
        </a>
      </div>
      <div className="botoncontenedor">
        <a className="singin">Sign In</a>
        <a className="signUp">Sign Up</a>
      </div>
    </div>
  );
}
