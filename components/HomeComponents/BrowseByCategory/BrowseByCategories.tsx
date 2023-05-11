import React from "react";
import styles from "./BrowseByCategories.module.css";
import leftArrow from "../../../assets/HomeAssets/FlashSales/leftArrow.png";
import rightArrow from "../../../assets/HomeAssets/FlashSales/rightArrow.png";
import phones from "../../../assets/HomeAssets/BrowseByCategory/phones.png";
import computers from "../../../assets/HomeAssets/BrowseByCategory/computers.png";
import smartwatch from "../../../assets/HomeAssets/BrowseByCategory/smartwatch.png";
import camera from "../../../assets/HomeAssets/BrowseByCategory/camera.png";
import headphones from "../../../assets/HomeAssets/BrowseByCategory/headphones.png";
import gaming from "../../../assets/HomeAssets/BrowseByCategory/gaming.png";

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
          <div className={styles.categoryPhone}>
            <div className={styles.phones}>Phones</div>
            <img
              className={styles.categoryCellphoneIcon}
              alt=""
              src={phones.src}
            />
          </div>
          <div className={styles.categoryPhone}>
            <div className={styles.computers}>Computers</div>
            <img
              className={styles.categoryComputerIcon}
              alt=""
              src={computers.src}
            />
          </div>
          <div className={styles.categoryPhone}>
            <div className={styles.smartwatch}>SmartWatch</div>
            <img
              className={styles.categoryComputerIcon}
              alt=""
              src={smartwatch.src}
            />
          </div>
          <div className={styles.categoryPhone3}>
            <div className={styles.camera}>Camera</div>
            <img
              className={styles.categoryCellphoneIcon}
              alt=""
              src={camera.src}
            />
          </div>
          <div className={styles.categoryPhone}>
            <div className={styles.smartwatch}>HeadPhones</div>
            <img
              className={styles.categoryCellphoneIcon}
              alt=""
              src={headphones.src}
            />
          </div>
          <div className={styles.categoryPhone}>
            <div className={styles.gaming}>Gaming</div>
            <img
              className={styles.categoryCellphoneIcon}
              alt=""
              src={gaming.src}
            />
          </div>
        </div>
      </div>
    </>
  );
}
