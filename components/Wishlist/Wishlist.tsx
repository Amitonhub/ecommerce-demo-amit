import styles from "././Wishlist.module.css";
import { useSelector } from "react-redux";
import WishlistCard from "../Common/WishlistCard/WishlistCard";
import { RootState } from "@/redux/store";
import { WishlistItem } from "../types/Types";

export default function Wishlist() {
  const wishlist = useSelector((state: RootState) => state.wishlist.wishlist);

  return (
    <>
      <div className={styles.frameParent}>
        <div className={styles.wishlist4Parent}>
          <div className={styles.wishlist4}>Wishlist ({wishlist.length})</div>
          <div className={styles.button}>
            <div className={styles.viewAllProducts}>Move All To Bag</div>
          </div>
        </div>
        <div className={styles.productContainer}>
          {wishlist &&
            wishlist.map((item: WishlistItem) => (
              <WishlistCard key={item.product.id} product={item.product} />
            ))}
        </div>
      </div>
    </>
  );
}
