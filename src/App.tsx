import NavBar from "./components/Navbar/Navbar";
import "./App.css";
import Rectangulo from "./components/Rectangulo/Rectangulo";
import Planes from "./components/Planes/Planes";
import Form from "./components/Form/Form";

export default function App() {
  return (
    <div className="landing">
      <NavBar />
      <div className="contenedortextoimagen">
        <div className="contenedordetexto">
          <h1 className="wantAnythingToContainer" id="h1">
            <span className="wantAnythingTo1">
              Want anything to be
              <br /> easy with
            </span>
            <b className="logolindo">
              {" "}
              Lasles<b className="elvpndelasles">VPN.</b>
            </b>
          </h1>
          <div className="provideANetworkContainer">
            <span>
              {`Provide a network for all your needs with ease and fun using `}
              <span className="laslesvpn">
                Lasles<span className="elvpndelasles">VPN</span>
              </span>
              <div></div>
              <br></br>
              <span className="spa">
                discover interesting features from us.
              </span>
            </span>
          </div>
          <br></br>
          <button className="boton">
            <b className="getStarted">Get Started</b>
          </button>
        </div>

        <img className="fotito" src="chico.svg"></img>
      </div>

      <Rectangulo />

      <div className="contenederfotito2ytexto">
        <div>
          <img className="fotito2" src="chico2.svg"></img>
        </div>
        <div className="textoapp">
          <div className="texto1">We Provide Many Features You Can Use</div>
          <br />
          <div className="texto2">
            You can explore the features that we provide with fun and have their
            own functions each feature.
          </div>
          <ul className="customlist">
            <li>Powerfull online protection.</li>
            <li>Internet without borders.</li>
            <li>Supercharged VPN</li>
            <li>No specific time limits.</li>
          </ul>
        </div>
      </div>

      <div className="antesdelplan">
        <h1 className="chooseYourPlan1">Choose Your Plan</h1>
        <p className="mastexto">
          Let's choose the package that is best for you and explore it happily
          and
          <br/>
          <p className="mastexto">
           cheerfully.
          </p>
        </p>
      </div>

      <Planes />

<div className="despuesdelplan">
      <h1 className="despues">Huge Global Network<br/> of Fast VPN</h1>
      <div className="texto2">
        <span>{`See `}</span>
        <span className="laslesvpn">
          Lasles<span className="elvpndelasles">VPN</span>
        </span>
        <span>
          {" "}
          everywhere to make it easier for you when you move <br/> locations.
        </span>
      </div>
      <div className="globoo">
      <img src="globo.svg"></img>
      <img src="marcas.svg"></img>
      </div>
</div>

      <div className="trustedByThousands1">
        Trusted by Thousands of Happy Customer
      </div>
      <div className="texto2">
        These are the stories of our customers who have joined us with great
        pleasure when using this crazy feature.
      </div>

      <Form />

      <img className="logoi" alt="" src="Standard Collection 27.jpg" />
      <div className="laslesvpn">
        <span className="lasles">Lasles</span>
        <b className="elvpndelasles">VPN</b>
      </div>
      <div className="laslesvpnIsAContainer">
        <span className="laslesvpn">LaslesVPN</span>
        <span>
          {" "}
          is a private virtual network that has unique features and has high
          security.
        </span>
      </div>
      <img src="Facebook.svg"></img>
      <img src="Twitter.svg"></img>
      <img src="Instagram.svg"></img>

      <div className="vpntransparente">
        <span>©2020Lasles</span>
        <span className="vpnsolo">VPN</span>
      </div>

      <div className="palabrasfinales">Product</div>
      <ul className="ulfinal">
        <li>Download</li>
        <li>Pricing</li>
        <li>Locations</li>
        <li>Server</li>
        <li>Countries</li>
        <li>Blog</li>
      </ul>
      <div className="palabrasfinales">Engage</div>
      <ul className="ulfinal">
        <li>LaslesVPN ?</li>
        <li>FAQ</li>
        <li>Tutorials</li>
        <li>About Us</li>
        <li>Privacy Policy</li>
        <li>Terms of Service</li>
      </ul>
      <div className="palabrasfinales">Earn Money</div>
      <ul className="ulfinal">
        <li>Affiliate</li>
        <li>Become Partner</li>
      </ul>
    </div>
  );
}
