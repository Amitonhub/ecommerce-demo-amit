import React from "react";
import styles from './Categories.module.css'
import womenMenArrow from '../../../assets/HomeAssets/women&menArrow.png'
import arrowRight from '../../../assets/HomeAssets/rightArrow.png'
import appleLogo from '../../../assets/HomeAssets/appleLogo.png'
import appleImage from '../../../assets/HomeAssets/appleImage.png'
import Link from "next/link";

export default function Categories() {
  return <>
    <div className={styles.frameParent}>
      <div className={styles.womansFashionParent}>
        <Link href="/categories/womens-dresses" className={styles.link}>
          <div className={styles.womansFashion}>Woman’s Fashion</div>
        </Link>
        <img className={styles.dropdownIconWomen} alt="" src={womenMenArrow.src} />
      </div>
      <div className={styles.mensFashionParent}>
        <Link href="/categories/mens-shirts" className={styles.link}>
          <div className={styles.womansFashion}>Men’s Fashion</div>
        </Link>
        <img className={styles.dropdownIconMen} alt="" src={womenMenArrow.src} />
      </div>
      <Link href="/categories/automotive" className={styles.link}>
        <div className={styles.womansFashion}>Electronics</div>
      </Link>
      <Link href="/categories/home-decoration" className={styles.link}>
        <div className={styles.womansFashion}>{`Home & Lifestyle`}</div>
      </Link>
      <Link href="/categories/fragrances" className={styles.link}>
        <div className={styles.womansFashion}>{`Fragrances`}</div>
      </Link>
      <Link href="/categories/motorcycle" className={styles.link}>
        <div className={styles.womansFashion}>{`Motorcycle`}</div>
      </Link>
      <Link href="/categories/sunglasses" className={styles.link}>
        <div className={styles.womansFashion}>{`Sunglasses`}</div>
      </Link>
      <Link href="/categories/groceries" className={styles.link}>
        <div className={styles.womansFashion}>{`Groceries`}</div>
      </Link>
      <Link href="/categories/skincare" className={styles.link}>
        <div className={styles.womansFashion}>{`Skincare`}</div>
      </Link>
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
  </>;
}
