import styles from "././Wishlist.module.css";
import { useDispatch, useSelector } from "react-redux";
import WishlistCard from "../Common/WishlistCard/WishlistCard";
import { RootState } from "@/redux/store";
import { Cart, WishlistItem } from "../types/Types";
import { moveAllToCartApi } from "@/pages/api/Api";
import { moveAllToCart } from "@/redux/actions/CartAction";
import Swal from "sweetalert2";
import { useRef } from "react";

export default function Wishlist() {
  const dispatch = useDispatch();
  const wishlist = useSelector((state: RootState) => state.rootReducer.wishlist.wishlist);
  const cart = useSelector((state: RootState) => state.rootReducer.cart.cart);
  const userId = useSelector((state: RootState) => state.rootReducer.logIn.user?.id);
  const product = wishlist.filter((item: WishlistItem) => item.userId === userId);
  const nextId = useRef(1);

  const handleCart = async () => {
    const filteredCart = cart.filter((item: Cart) => item.userId === userId);
    const productsToAdd = product.filter(
      (item: Cart) => !filteredCart.some((cartItem: Cart) => cartItem.product.id === item.product.id)
    );

    moveAllToCartApi(productsToAdd)
      .then((data) => {
        console.log(data);
        Swal.fire({
          title: "Added!",
          text: "These products are added to the cart!",
          icon: "success",
        });
        dispatch(moveAllToCart(data));
      })
      .catch((error) => {
        Swal.fire({
          title: 'Oops!',
          text: 'These products are already in the cart!',
          icon: 'error'
        });
        console.log("Error adding to cart:", error);
      });

    return;
  };

  return (
    <>
      <div className={styles.frameParent}>
        <div className={styles.wishlist4Parent}>
          <div className={styles.wishlist4}>
            Wishlist ({product.length})
          </div>
          <div className={styles.button} onClick={handleCart}>
            <div className={styles.viewAllProducts}>{`Move All To Bag`}</div>
          </div>
        </div>
        <div className={styles.productContainer}>
          {product &&
            product.map((item: WishlistItem) => (
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
