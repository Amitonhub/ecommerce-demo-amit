import React, { useRef } from "react";
import styles from "../ProductCard/ProductCard.module.css";
import heart from "../../../assets/HomeAssets/FlashSales/heart.png";
import eye from "../../../assets/HomeAssets/FlashSales/eye.png";
import FiveStar from "../FiveStar/FiveStar";
import { Cart, ProductProps, WishlistItem } from "@/components/types/Types";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { addToWishlist } from "@/redux/actions/WishlistAction";
import { addToCartToApi, addToWishlistToApi } from "@/pages/api/Api";
import { addToCart } from "@/redux/actions/CartAction";
import Swal from "sweetalert2";

const FlashProductCard: React.FC<ProductProps> = ({ product }) => {
  const dispatch = useDispatch();
  const { price, rating, thumbnail, title, discountPercentage } = product;
  const originalPrice = parseInt((price / ((100 - discountPercentage) / 100)).toFixed());
  const userId = useSelector((state: RootState) => state.rootReducer.logIn.user?.id);
  const wishlist = useSelector((state: RootState) => state.rootReducer.wishlist.wishlist);
  const cart = useSelector((state: RootState) => state.rootReducer.cart.cart);
  const nextId = useRef(1);
  const starRef = useRef<HTMLImageElement>(null);

  const handleWishlist = () => {
    if (userId) {
      const wishlistItem: WishlistItem = {
        userId,
        product,
        id: nextId.current++,
      };
      const isProductInWishlist = wishlist.some(
        (item: WishlistItem) =>
          item.userId === userId && item.product.id === product.id
      );
      if (!isProductInWishlist) {
        Swal.fire({
          title: "Added!",
          text: "this product is added to wishlist!",
          icon: "success",
        });
        addToWishlistToApi(wishlistItem)
          .then((data) => {
            dispatch(addToWishlist(data));
          })
          .catch((error) => {
            console.log("Error adding to wishlist:", error);
          });
        return;
      } else {
        Swal.fire({
          title: "Oops!",
          text: "This product is already in wishlist!",
          icon: "error",
        });
      }
    }
  };

  const handleCart = () => {
    if (userId) {
      const CartItem: Cart = {
        userId,
        product,
        id: nextId.current++,
        quantity: 1,
      };
      const isProductInWishlist = cart.some(
        (item: Cart) => item.userId === userId && item.product.id === product.id
      );
      if (!isProductInWishlist) {
        Swal.fire({
          title: "Added!",
          text: "this product is added to cart!",
          icon: "success",
        });
        addToCartToApi(CartItem)
          .then((data) => {
            dispatch(addToCart(data));
          })
          .catch((error) => {
            console.log("Error adding to cart:", error);
          });
        return;
      } else {
        Swal.fire({
          title: "Oops!",
          text: "This product is already in cart!",
          icon: "error",
        });
      }
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
          <div className={styles.frameChild} onClick={handleCart} />
          <div className={styles.addToCart} onClick={handleCart}>
            Add To Cart
          </div>
          <div className={styles.fillHeartParent}>
            <img
              ref={starRef}
              className={styles.fillHeartIcon}
              alt=""
              src={heart.src}
              onClick={handleWishlist}
              title="add to wishlist"
            />
            <Link href={`/details/${product.id}`}>
              <img
                className={styles.fillHeartIcon}
                alt=""
                src={eye.src}
                title="view product"
              />
            </Link>
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

export default FlashProductCard;
