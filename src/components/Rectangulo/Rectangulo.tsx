import "./Rectangulo.css";
import icono1 from "../../assets/icono1.svg";
import linea from "../../assets/linea.svg";
import icono2 from "../../assets/icono2.svg";
import icono3 from "../../assets/icono3.svg";

export default function Rectangulo() {
  return (
    <div className="rec">
      <div className="rectangleDiv">
        <div className="circulitoi">
          <img className="circulito" src={icono1} />
        </div>
        <div className="contenedor">
          <b className="be">90+</b>
          <p className="pe">Users</p>
        </div>
      </div>
      <img className="linea" src={linea}></img>
      <div className="rectangleDiv">
        <div className="circulitoi">
          <img className="circulito" src={icono2}></img>
        </div>
        <div className="contenedor">
          <b className="be">30+</b>
          <div className="pe">Locations</div>
        </div>
      </div>
      <img className="linea" src={linea}></img>
      <div className="rectangleDiv">
        <div className="circulitoi">
          <img className="circulito" src={icono3}></img>
        </div>
        <div className="contenedor">
          <b className="be">50+</b>
          <div className="pe">Servers</div>
        </div>
      </div>
    </div>
  );
}
