import React, { useEffect, useState } from "react";
import styles from '../../styles/HomeStyles/EnhanceMusic.module.css'
import ellipse_23 from '../../assets/HomeAssets/EnhanceMusic/ellipse-23.png'
import ellipse_20 from '../../assets/HomeAssets/EnhanceMusic/ellipse-20.png'
import boomBox from '../../assets/HomeAssets/EnhanceMusic/jbl-boombox-2-hero-020-x1-1-1@2x.png'

const COUNTDOWN_INTERVAL = 1000;

export default function EnhanceMusic() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const endTime = new Date("2023-05-24T00:00:00"); 
      const now = new Date();
      const timeLeft = endTime.getTime() - now.getTime();

      if (timeLeft <= 0) {
        clearInterval(timer);
        setCountdown({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      } else {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        setCountdown({ days, hours, minutes, seconds });
      }
    }, COUNTDOWN_INTERVAL);

    return () => clearInterval(timer);
  }, []);
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
            <div className={styles.div}>{countdown.hours}</div>
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
            <div className={styles.div}>{countdown.days}</div>
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
            <div className={styles.div}>{countdown.minutes}</div>
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
            <div className={styles.div}>{countdown.seconds}</div>
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
