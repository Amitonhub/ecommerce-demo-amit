import React from "react";
import styles from '../../../styles/HomeStyles/FlashSales.module.css'
import heart from "../../../assets/HomeAssets/FlashSales/heart.png";
import eye from "../../../assets/HomeAssets/FlashSales/eye.png";
import keyboard from "../../../assets/HomeAssets/FlashSales/keyboard.png";
import FiveStar from "./FiveStar";
import { Product } from "@/components/types/Types";
import { title } from "process";

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const { price, rating, thumbnail, title, discountPercentage } = product;

  return (
    <div className={styles.cartWithFlatDiscountParent}>
      <div className={styles.cartWithFlatDiscount}>
        <div className={styles.discountPercentParent}>
          <div className={styles.discountPercent}>
            <div className={styles.new}>-35%</div>
          </div>
          <div className={styles.rectangleDiv} />
          <div className={styles.addToCart}>Add To Cart</div>
          <div className={styles.fillHeartParent}>
            <img className={styles.fillHeartIcon} alt="" src={heart.src} />
            <img className={styles.fillHeartIcon} alt="" src={eye.src} />
          </div>
          <div className={styles.akWrapper}>
            <img className={styles.akIcon} alt="" src={thumbnail} />
          </div>
        </div>
        <div className={styles.havitGamepadParent}>
          <div className={styles.shopNow}>{title}</div>
          <div className={styles.parent1}>
            <div className={styles.shopNow}>${price}</div>
            <div className={styles.div6}>${discountPercentage}</div>
          </div>
          <FiveStar rating={rating} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
