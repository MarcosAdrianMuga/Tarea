import NavBar from "./components/Navbar/Navbar";
import "./App.css";
import Rectangulo from "./components/Rectangulo/Rectangulo";
import Planes from "./components/Planes/Planes";
import Form from "./components/Form/Form";
import Pasarela from "./components/Pasarela/Pasarela";
import chico from "./assets/chico.svg"
import chico2 from "./assets/chico2.svg"
import globo from "./assets/globo.svg"
import marcas from "./assets/marcas.svg"
import StandardC from "./assets/StandardC.jpg"
import Instagram from "./assets/Instagram.svg"
import Twitter from "./assets/Twitter.svg"
import Facebook from "./assets/Facebook.svg"

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

        <img className="fotito" src={chico}></img>
      </div>

      <Rectangulo />

      <div className="contenederfotito2ytexto">
        <div>
          <img className="fotito2" src={chico2}></img>
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
          <br />
          <p className="mastexto">cheerfully.</p>
        </p>
      </div>

      <Planes />

      <div className="despuesdelplan">
        <h1 className="despues">
          Huge Global Network
          <br /> of Fast VPN
        </h1>
        <div className="texto2">
          <span>{`See `}</span>
          <span className="laslesvpn">
            Lasles<span className="elvpndelasles">VPN</span>
          </span>
          <span>
            {" "}
            everywhere to make it easier for you when you move <br /> locations.
          </span>
        </div>
        <div className="globoo">
          <img src={globo}></img>
          <img src={marcas}></img>
        </div>

        <h1 className="despues">
          Trusted by Thousands of <br /> Happy Customer
        </h1>
        <div className="texto2">
          These are the stories of our customers who have joined us with great{" "}
          <br />
          pleasure when using this crazy feature.
        </div>
      </div>

      <Pasarela/>

      <Form />

      <footer className="fo">
        <div className="nav2">
          <div className="laslesvpnn">
            <img className="" alt="" src={StandardC} />
            <span className="lasles">Lasles</span>
            <b className="navpn">VPN</b>
          </div>
          <p className="parrafo">
            <span className="laslesvpn">
              Lasles <span className="elvpndelasles">VPN</span>
            </span>{" "}
            is a private virtual network that <br /> has unique features and has
            high security.
          </p>
          <div className="fotoo2">
            <img className="fotoo" src={Facebook} alt="facebook" />
            <img className="fotoo" src={Twitter} alt="twitter" />
            <img className="fotoo" src={Instagram }alt="instagram" />
          </div>
          <span className="pp">©2020Lasles</span>
          <span className="ppp">VPN</span>
        </div>

        <div className="loultimo">
          <div className="losult">
            <p className="ma">Product</p>
            <div className="texto2">
              <p className="cambio">Download</p>
              <p className="cambio">Pricing</p>
              <p className="cambio">Locations</p>
              <p className="cambio">Server</p>
              <p className="cambio">Countries</p>
              <p className="cambio">Blog</p>
            </div>
          </div>
          <div className="losult">
            <p className="ma">Engage</p>
            <div className="texto2">
              <p className="cambio">LaslesVPN ?</p>
              <p className="cambio">FAQ</p>
              <p className="cambio">Tutorials</p>
              <p className="cambio">About Us</p>
              <p className="cambio">Privacy Policy</p>
              <p className="cambio">Term of Service</p>
            </div>
          </div>
          <div className="losult">
            <p className="ma">Earn Money</p>
            <div className="texto2">
              <p className="cambio">Afiliate</p>
              <p className="cambio">Become Partner</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
