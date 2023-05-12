import styles from "./WishlistCard.module.css";
import { WishlistCardProps } from "@/components/types/Types";
import deleteProduct from "../../../assets/Wishlist/delete.png";
import FiveStar from "../FiveStar/FiveStar";
import Link from "next/link";
import { deleteFromWishlistToApi } from "@/pages/api/Api";
import { useDispatch } from "react-redux";
import { deleteFromWishlist } from "@/redux/actions/WishlistAction";

const WishlistCard: React.FC<WishlistCardProps> = ({ product, item }) => {
  const dispatch = useDispatch();
  const { price, rating, thumbnail, title, discountPercentage } = product;
  const originalPrice = parseInt(
    (price / ((100 - discountPercentage) / 100)).toFixed()
  );

  const handleDeleteFromWishlist = async () => {
    await deleteFromWishlistToApi(item.id)
    dispatch(deleteFromWishlist(item.product.id));
  };
 
  return (
    <div className={styles.cartWithFlatDiscountParent}>
      {product.title}
      <div className={styles.cartWithFlatDiscount}></div>
      <div className={styles.cartWithFlatDiscount}>
        <div className={styles.discountPercentParent}>
          <div className={styles.frameChild} />
          <div className={styles.addToCart}>Add To Cart</div>
          <div className={styles.fillHeartParent}>
            <img
              className={styles.fillHeartIcon}
              alt=""
              src={deleteProduct.src}
              onClick={handleDeleteFromWishlist}
            />
          </div>
          <Link href={`/details/${product.id}`}>
            <div className={styles.akWrapper}>
              <img className={styles.akIcon} alt="" src={thumbnail} />
            </div>
          </Link>
        </div>
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
