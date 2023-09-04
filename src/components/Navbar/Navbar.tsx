import "./Navbar.css";

export default function NavBar() {
  return (
    <div className="papa">
      <div className="nav">
        <img className="logoi" alt="" src="Standard Collection 27.jpg" />
        <div className="laslesvpn2">
          <span className="lasles">Lasles</span>
          <b className="navpn">VPN</b>
        </div>
      </div>
      <div className="textocontenedor">
        <div className="texto">About</div>
        <div className="texto">Features</div>
        <div className="texto">Pricing</div>
        <div className="texto">Testimonials</div>
        <div className="texto"> Help</div>
      </div>
      <div className="botoncontenedor">
        <a className="singin">Sign In</a>
        <a className="signUp">Sign Up</a>
      </div>
    </div>
  );
}
