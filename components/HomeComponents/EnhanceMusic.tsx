import React from "react";
import styles from '../../styles/HomeStyles/EnhanceMusic.module.css'
import ellipse_23 from '../../assets/HomeAssets/EnhanceMusic/ellipse-23.png'
import ellipse_20 from '../../assets/HomeAssets/EnhanceMusic/ellipse-20.png'
import boomBox from '../../assets/HomeAssets/EnhanceMusic/jbl-boombox-2-hero-020-x1-1-1@2x.png'

export default function EnhanceMusic() {
  return <>
  <div className={styles.ellipseParent}>
      <img className={styles.frameChild} alt="" src={ellipse_23.src} />
      <div className={styles.enhanceYourMusic}>
        Enhance Your Music Experience
      </div>
      <div className={styles.flashSellTimerParent}>
        <div className={styles.flashSellTimer}>
          <img
            className={styles.flashSellTimerChild}
            alt=""
            src={ellipse_20.src}
          />
          <div className={styles.parent}>
            <div className={styles.div}>23</div>
            <div className={styles.hours}>Hours</div>
          </div>
        </div>
        <div className={styles.flashSellTimer}>
          <img
            className={styles.flashSellTimerChild}
            alt=""
            src={ellipse_20.src}
          />
          <div className={styles.group}>
            <div className={styles.div}>05</div>
            <div className={styles.days}>Days</div>
          </div>
        </div>
        <div className={styles.flashSellTimer}>
          <img
            className={styles.flashSellTimerChild}
            alt=""
            src={ellipse_20.src}
          />
          <div className={styles.container}>
            <div className={styles.div}>59</div>
            <div className={styles.minutes}>Minutes</div>
          </div>
        </div>
        <div className={styles.flashSellTimer}>
          <img
            className={styles.flashSellTimerChild}
            alt=""
            src={ellipse_20.src}
          />
          <div className={styles.frameDiv}>
            <div className={styles.div}>35</div>
            <div className={styles.seconds}>Seconds</div>
          </div>
        </div>
      </div>
      <div className={styles.button}>
        <div className={styles.viewAllProducts}>Buy Now!</div>
      </div>
      <div className={styles.categories}>Categories</div>
      <div className={styles.boomBoxWrapper}>
        <img
          className={styles.boomBox}
          alt=""
          src={boomBox.src}
        />
      </div>
    </div>
  </>;
}
