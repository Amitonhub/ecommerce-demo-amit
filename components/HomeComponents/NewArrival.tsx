import styles from "../../styles/HomeStyles/NewArrival.module.css";
import ps5 from '../../assets/HomeAssets/NewArrival/ps5.png'
import gucci from '../../assets/HomeAssets/NewArrival/gucci.png'
import alexa from '../../assets/HomeAssets/NewArrival/alexa.png'
import women from '../../assets/HomeAssets/NewArrival/women.png'
import ellipse from '../../assets/HomeAssets/NewArrival/ellipse-24.png'
import underline from '../../assets/HomeAssets/NewArrival/underline11.svg'

export default function NewArrival() {

  return (
    <>
      <div className={styles.frameParent}>
      <div className={styles.ps5Parent}>
        <img
          className={styles.ps5}
          alt=""
          src={ps5.src}
        />
        <div className={styles.frameGroup}>
          <div className={styles.playstation5Parent}>
            <div className={styles.womensCollections}>PlayStation 5</div>
            <div className={styles.blackAndWhite}>
              Black and White version of the PS5 coming out on sale.
            </div>
          </div>
          <div className={styles.shopNowParent}>
            <div className={styles.shopNow}>Shop Now</div>
            <img
              className={styles.underlineIcon}
              alt=""
              src={underline.src}
            />
          </div>
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.womenParent}>
          <img
            className={styles.women}
            alt=""
            src={women.src}
          />
          <div className={styles.frameDiv}>
            <div className={styles.playstation5Parent}>
              <div className={styles.womensCollections}>
                Women’s Collections
              </div>
              <div className={styles.featuredWomanCollections}>
                Featured woman collections that give you another vibe.
              </div>
            </div>
            <div className={styles.shopNowParent}>
              <div className={styles.shopNow}>Shop Now</div>
              <img
                className={styles.underlineIcon}
                alt=""
                src={underline.src}
              />
            </div>
          </div>
        </div>
        <div className={styles.frameParent1}>
          <div className={styles.vectorParent}>
            <img className={styles.frameChild} alt="" src={ellipse.src} />
            <div className={styles.alexaWrapper}>
              <img
                className={styles.alexa}
                alt=""
                src={alexa.src}
              />
            </div>
            <div className={styles.frameParent2}>
              <div className={styles.speakersParent}>
                <div className={styles.womensCollections}>Speakers</div>
                <div className={styles.amazonWirelessSpeakers}>
                  Amazon wireless speakers
                </div>
              </div>
              <div className={styles.shopNowParent}>
                <div className={styles.shopNow}>Shop Now</div>
                <img
                  className={styles.underlineIcon}
                  alt=""
                  src={underline}
                />
              </div>
            </div>
          </div>
          <div className={styles.vectorParent}>
            <img className={styles.frameChild} alt="" src={ellipse.src} />
            <div className={styles.gucciWrapper}>
              <img
                className={styles.gucciIcon}
                alt=""
                src={gucci.src}
              />
            </div>
            <div className={styles.frameParent2}>
              <div className={styles.speakersParent}>
                <div className={styles.womensCollections}>Perfume</div>
                <div className={styles.amazonWirelessSpeakers}>
                  GUCCI INTENSE OUD EDP
                </div>
              </div>
              <div className={styles.shopNowParent}>
                <div className={styles.shopNow}>Shop Now</div>
                <img
                  className={styles.underlineIcon}
                  alt=""
                  src={underline}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
