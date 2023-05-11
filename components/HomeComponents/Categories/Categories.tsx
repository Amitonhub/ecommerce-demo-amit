import React from "react";
import styles from './Categories.module.css'
import womenMenArrow from '../../../assets/HomeAssets/women&menArrow.png' 
import arrowRight from '../../../assets/HomeAssets/rightArrow.png'
import appleLogo from '../../../assets/HomeAssets/appleLogo.png'
import appleImage from '../../../assets/HomeAssets/appleImage.png'
 
export default function Categories() {
  return <>
  <div>
  <div className={styles.frameParent}>
          <div className={styles.womansFashionParent}>
            <div className={styles.womansFashion}>Woman’s Fashion</div>
            <img className={styles.dropdownIconWomen} alt="" src={womenMenArrow.src} />
          </div>
          <div className={styles.mensFashionParent}>
            <div className={styles.womansFashion}>Men’s Fashion</div>
            <img className={styles.dropdownIconMen} alt="" src={womenMenArrow.src} />
          </div>
          <div className={styles.womansFashion}>Electronics</div>
          <div className={styles.womansFashion}>{`Home & Lifestyle`}</div>
          <div className={styles.womansFashion}>Medicine</div>
          <div className={styles.womansFashion}>{`Sports & Outdoor`}</div>
          <div className={styles.womansFashion}>{`Baby’s & Toys`}</div>
          <div className={styles.womansFashion}>{`Groceries & Pets`}</div>
          <div className={styles.womansFashion}>{`Health & Beauty`}</div>
        </div>
        <div className={styles.heroEndframe}>
          <img
            className={styles.heroEndFrameIcon}
            alt=""
            src={appleImage.src}
          />
          <div className={styles.appleGrayParent}>
            <img
              className={styles.appleGrayIcon}
              alt=""
              src={appleLogo.src}
            />
            <div className={styles.iphone14Series}>iPhone 14 Series</div>
          </div>
          <div className={styles.upTo10}>Up to 10% off Voucher</div>
          <div className={styles.frameGroup}>
            <div className={styles.shopNowParent}>
              <div className={styles.shopNow}>Shop Now</div>
              <div className={styles.frameChild} />
            </div>
            <img
              className={styles.dropdownIcon}
              alt=""
              src={arrowRight.src}
            />
          </div>
        </div>
  </div>
  </>;
}
