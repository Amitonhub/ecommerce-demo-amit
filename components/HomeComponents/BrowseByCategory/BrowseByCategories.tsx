import React from "react";
import styles from "./BrowseByCategories.module.css";
import leftArrow from "../../../assets/HomeAssets/FlashSales/leftArrow.png";
import rightArrow from "../../../assets/HomeAssets/FlashSales/rightArrow.png";
import phones from "../../../assets/HomeAssets/BrowseByCategory/phones.png";
import computers from "../../../assets/HomeAssets/BrowseByCategory/computers.png";
import mens_wear from "../../../assets/HomeAssets/BrowseByCategory/mens-wear.png";
import fragrances from "../../../assets/HomeAssets/BrowseByCategory/fragrances.png";
import groceries from "../../../assets/HomeAssets/BrowseByCategory/groceries.png";
import motorcycle from "../../../assets/HomeAssets/BrowseByCategory/motorcycle.png";
import Link from "next/link";

export default function BrowseByCategories() {
  return (
    <>
      <div className={styles.frameContainer}>
        <div className={styles.frameParent1}>
          <div className={styles.frameParent2}>
            <div className={styles.frameParent3}>
              <div className={styles.instanceParent}>
                <div className={styles.rectangleWrapper}>
                  <div className={styles.instanceChild} />
                </div>
                <div className={styles.div}>
                  <b>Categories</b>
                </div>
              </div>
              <div className={styles.browseByCategory}>Browse By Category</div>
            </div>
          </div>
          <div className={styles.fillWithLeftArrowParent}>
            <img
              className={styles.fillWithLeftArrow}
              alt=""
              src={leftArrow.src}
            />
            <img
              className={styles.fillWithLeftArrow}
              alt=""
              src={rightArrow.src}
            />
          </div>
        </div>
        <div className={styles.categoryPhoneParent}>
          <Link href="/categories/smartphones" className={styles.link}>
            <div className={styles.categoryPhone}>
              <div className={styles.phones}>{`Phones`}</div>
              <img
                className={styles.categoryCellphoneIcon}
                alt=""
                src={phones.src}
              />
            </div>
          </Link>
          <Link href="/categories/laptops" className={styles.link}>
          <div className={styles.categoryPhone}>
            <div className={styles.computers}>{`Laptops`}</div>
            <img
              className={styles.categoryComputerIcon}
              alt=""
              src={computers.src}
            />
          </div>
          </Link>
          <Link href="/categories/mens-shirts" className={styles.link}>
          <div className={styles.categoryPhone}>
            <div className={styles.smartwatch}>Mens-wear</div>
            <img
              className={styles.categoryComputerIcon}
              alt=""
              src={mens_wear.src}
            />
          </div>
          </Link>
          <Link href="/categories/motorcycle" className={styles.link}>
          <div className={styles.categoryPhone}>
            <div className={styles.camera}>Motorcycle</div>
            <img
              className={styles.categoryCellphoneIcon}
              alt=""
              src={motorcycle.src}
            />
          </div>
          </Link>
           <Link href="/categories/groceries" className={styles.link}>
          <div className={styles.categoryPhone}>
            <div className={styles.smartwatch}>Groceries</div>
            <img
              className={styles.categoryCellphoneIcon}
              alt=""
              src={groceries.src}
            />
          </div>
          </Link>
          <Link href="/categories/fragrances" className={styles.link}>
          <div className={styles.categoryPhone}>
            <div className={styles.gaming}>Fragrances</div>
            <img
              className={styles.categoryCellphoneIcon}
              alt=""
              src={fragrances.src}
            />
          </div>
          </Link>
        </div>
      </div>
    </>
  );
}
