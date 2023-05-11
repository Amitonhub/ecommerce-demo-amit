import styles from "./WishlistCard.module.css";
import { useDispatch } from "react-redux";
import { WishlistItem } from "@/components/types/Types";
import deleteProduct from "../../../assets/Wishlist/delete.png";
import FiveStar from "../FiveStar/FiveStar";
import Link from "next/link";

const WishlistCard: React.FC<WishlistItem> = ({ product }) => {
  const { price, rating, thumbnail, title, discountPercentage } = product;
  const originalPrice = parseInt(
    (price / ((100 - discountPercentage) / 100)).toFixed()
  );

  return (
    <div className={styles.cartWithFlatDiscountParent}>
      {product.title}
      <div className={styles.cartWithFlatDiscount}></div>
      <div className={styles.cartWithFlatDiscount}>
        <Link href={`/details/${product.id}`}>
          <div className={styles.discountPercentParent}>
            <div className={styles.frameChild} />
            <div className={styles.addToCart}>Add To Cart</div>
            <div className={styles.fillHeartParent}>
              <img
                className={styles.fillHeartIcon}
                alt=""
                src={deleteProduct.src}
              />
            </div>
            <div className={styles.akWrapper}>
              <img className={styles.akIcon} alt="" src={thumbnail} />
            </div>
          </div>
        </Link>
        <div className={styles.productParent}>
          <div className={styles.productTitle}>{title}</div>
          <div className={styles.parent}>
            <div className={styles.productTitle}>${price}</div>
            <div className={styles.price}>${originalPrice}</div>
          </div>
          <FiveStar rating={rating} />
        </div>
      </div>
    </div>
  );
};

export default WishlistCard;
