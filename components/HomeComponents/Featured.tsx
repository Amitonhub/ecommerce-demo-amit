import { useSelector } from "react-redux";
import styles from "../../styles/HomeStyles/Featured.module.css";
import NewArrival from "./NewArrival";

export default function Featured() {

  return (
    <>
       <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.instanceParent}>
          <div className={styles.rectangleWrapper}>
            <div className={styles.instanceChild} />
          </div>
          <div className={styles.featured}>Featured</div>
        </div>
        <div className={styles.newArrival}>New Arrival</div>
      </div>
      <NewArrival />
    </div>
    </>
  );
}
