import styles from "./Rectangulo.module.css";

export default function Rectangulo() {
  return (
    <div className={styles.rec}>
      <div className={styles.rectangleDiv}>
        <div className={styles.circulitoi}>
          <img className={styles.circulito} src="icono1.svg" />
        </div>
        <div className={styles.contenedor}>
          <b className={styles.be}>90+</b>
          <p className={styles.pe}>Users</p>
        </div>
      </div>
      <img className={styles.linea} src="linea.svg"></img>
      <div className={styles.rectangleDiv}>
        <div className={styles.circulitoi}>
          <img className={styles.circulito} src="icono2.svg"></img>
        </div>
        <div className={styles.contenedor}>
          <b className={styles.be}>30+</b>
          <div className={styles.pe}>Locations</div>
        </div>
      </div>
      <img className={styles.linea} src="linea.svg"></img>
      <div className={styles.rectangleDiv}>
        <div className={styles.circulitoi}>
          <img className={styles.circulito} src="icono3.svg"></img>
        </div>
        <div className={styles.contenedor}>
          <b className={styles.be}>50+</b>
          <div className={styles.pe}>Servers</div>
        </div>
      </div>
    </div>
  );
}
