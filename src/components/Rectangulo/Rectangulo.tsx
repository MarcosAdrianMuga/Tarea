import styles from "./Rectangulo.module.css";
import icono1 from "../../assets/icono1.svg"
import linea from "../../assets/linea.svg"
import icono2 from "../../assets/icono2.svg"
import icono3 from "../../assets/icono3.svg"

export default function Rectangulo() {
  return (
    <div className={styles.rec}>
      <div className={styles.rectangleDiv}>
        <div className={styles.circulitoi}>
          <img className={styles.circulito} src={icono1} />
        </div>
        <div className={styles.contenedor}>
          <b className={styles.be}>90+</b>
          <p className={styles.pe}>Users</p>
        </div>
      </div>
      <img className={styles.linea} src={linea}></img>
      <div className={styles.rectangleDiv}>
        <div className={styles.circulitoi}>
          <img className={styles.circulito} src={icono2}></img>
        </div>
        <div className={styles.contenedor}>
          <b className={styles.be}>30+</b>
          <div className={styles.pe}>Locations</div>
        </div>
      </div>
      <img className={styles.linea} src={linea}></img>
      <div className={styles.rectangleDiv}>
        <div className={styles.circulitoi}>
          <img className={styles.circulito} src={icono3}></img>
        </div>
        <div className={styles.contenedor}>
          <b className={styles.be}>50+</b>
          <div className={styles.pe}>Servers</div>
        </div>
      </div>
    </div>
  );
}
