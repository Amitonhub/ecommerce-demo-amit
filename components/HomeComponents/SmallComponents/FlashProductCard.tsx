import React from "react";
import styles from "../../../styles/HomeStyles/ProductCard.module.css";
import heart from "../../../assets/HomeAssets/FlashSales/heart.png";
import eye from "../../../assets/HomeAssets/FlashSales/eye.png";
import FiveStar from "./FiveStar";
import { ProductProps } from "@/components/types/Types";

const ProductCard: React.FC<ProductProps> = ({ product }) => {
  const { price, rating, thumbnail, title, discountPercentage } = product;
  const originalPrice = parseInt((price / ((100 - discountPercentage) / 100)).toFixed());
  const formattedPrice = price.toLocaleString("en-US", { style: "currency", currency: "USD" });

  return (
    <div className={styles.cartWithFlatDiscountParent}>
      <div className={styles.cartWithFlatDiscount}></div>
      <div className={styles.cartWithFlatDiscount}>
        <div className={styles.discountPercentParent}>
          <div className={styles.discountPercent}>
            <div className={styles.div}>{discountPercentage}%</div>
          </div>
          <div className={styles.frameChild} />
          <div className={styles.addToCart}>Add To Cart</div>
          <div className={styles.fillHeartParent}>
            <img className={styles.fillHeartIcon} alt="" src={heart.src} />
            <img className={styles.fillHeartIcon} alt="" src={eye.src} />
          </div>
          <div className={styles.akWrapper}>
            <img
              className={styles.akIcon}
              alt=""
              src={thumbnail}
            />
          </div>
        </div>
        <div className={styles.productParent}>
          <div className={styles.productTitle}>{title}</div>
          <div className={styles.parent}>
            <div className={styles.productTitle}>{formattedPrice}{price}</div>
            <div className={styles.price}>{formattedPrice}{originalPrice}</div>
          </div>
          <FiveStar rating={rating} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
