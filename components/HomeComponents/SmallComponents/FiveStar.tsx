import React from "react";
import star from '../../../assets/HomeAssets/FlashSales/star.png'
import styles from '../../../styles/HomeStyles/FlashSales.module.css'


export default function FiveStar() {
  return <>
  <div className={styles.fiveStarParent}>
                  <div className={styles.fiveStar}>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src={star.src}
                    />
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src={star.src}
                    />
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src={star.src}
                    />
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src={star.src}
                    />
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src={star.src}
                    />
                  </div>
                  <div className={styles.div7}>(88)</div>
                </div>
  </>;
}
