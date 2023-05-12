import React from "react";
import styles from "../ProductCard/ProductCard.module.css";
import heart from "../../../assets/HomeAssets/FlashSales/heart.png";
import eye from "../../../assets/HomeAssets/FlashSales/eye.png";
import FiveStar from "../FiveStar/FiveStar";
import { ProductProps, WishlistItem } from "@/components/types/Types";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { addToWishlist } from "@/redux/actions/WishlistAction";
import { addToWishlistToApi } from "@/pages/api/Api";

const ProductCard: React.FC<ProductProps> = ({ product }) => {
  const dispatch = useDispatch();
  const { price, rating, thumbnail, title, discountPercentage } = product;
  const originalPrice = parseInt(
    (price / ((100 - discountPercentage) / 100)).toFixed()
  );
  const userId = useSelector((state: RootState) => state.logIn.user?.id);

  const handleWishlist = (event: React.MouseEvent<HTMLImageElement>) => {
    if (userId) {
      const wishlistItem: WishlistItem = {
        userId,
        product,
        id: 0,
      };
      addToWishlistToApi(wishlistItem)
        .then((data) => {
          dispatch(addToWishlist(data));
        })
        .catch((error) => {
          console.log("Error adding to wishlist:", error);
        });
    }
  };

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
            <img
              className={styles.fillHeartIcon}
              alt=""
              src={heart.src}
              onClick={handleWishlist}
            />
            <img className={styles.fillHeartIcon} alt="" src={eye.src} />
          </div>
          <Link href={`/details/${product.id}`}>
            <div className={styles.akWrapper}>
              <img className={styles.akIcon} alt="" src={thumbnail} />
            </div>
          </Link>
        </div>
        <div className={styles.productParent}>
        <Link href={`/details/${product.id}`} className={styles.titleLink}>
          <div className={styles.productTitle}>{title}</div>
          </Link>
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

export default ProductCard;
