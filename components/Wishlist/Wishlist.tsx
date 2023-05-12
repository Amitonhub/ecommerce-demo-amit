import styles from "././Wishlist.module.css";
import { useDispatch, useSelector } from "react-redux";
import WishlistCard from "../Common/WishlistCard/WishlistCard";
import { RootState } from "@/redux/store";
import { WishlistItem } from "../types/Types";

export default function Wishlist() {
  const dispatch = useDispatch();
  const wishlist = useSelector((state: RootState) => state.wishlist.wishlist);
  const userId = useSelector((state: RootState) => state.logIn.user?.id);
  const filteredWishlist = wishlist.filter(
    (item: WishlistItem) => item.userId === userId
  );

  return (
    <>
      <div className={styles.frameParent}>
        <div className={styles.wishlist4Parent}>
          <div className={styles.wishlist4}>
            Wishlist ({filteredWishlist.length})
          </div>
          <div className={styles.button}>
            <div className={styles.viewAllProducts}>{`Move All To Bag`}</div>
          </div>
        </div>
        <div className={styles.productContainer}>
          {filteredWishlist &&
            filteredWishlist.map((item: WishlistItem) => (
              <WishlistCard
                key={item.product.id}
                product={item.product}
                item={item}
                />
            ))}
        </div>
      </div>
    </>
  );
}
