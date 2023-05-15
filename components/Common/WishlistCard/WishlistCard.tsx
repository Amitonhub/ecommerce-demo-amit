import styles from "./WishlistCard.module.css";
import { Cart, WishlistCardProps } from "@/components/types/Types";
import deleteProduct from "../../../assets/Wishlist/delete.png";
import FiveStar from "../FiveStar/FiveStar";
import Link from "next/link";
import { addToCartToApi, deleteFromWishlistToApi } from "@/pages/api/Api";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromWishlist } from "@/redux/actions/WishlistAction";
import { addToCart } from "@/redux/actions/CartAction";
import { RootState } from "@/redux/store";
import { useRef } from "react";
import Swal from "sweetalert2";

const WishlistCard: React.FC<WishlistCardProps> = ({ product, item }) => {
  const dispatch = useDispatch();
  const { price, rating, thumbnail, title, discountPercentage } = product;
  const originalPrice = parseInt(
    (price / ((100 - discountPercentage) / 100)).toFixed()
  );
  const userId = useSelector((state: RootState) => state.logIn.user?.id);
  const cart = useSelector((state: RootState) => state.cart.cart);
  const nextId = useRef(1);

  const handleDeleteFromWishlist = async () => {
    await deleteFromWishlistToApi(item.id)
    dispatch(deleteFromWishlist(item.product.id));
  };

  const handleCart = (event: React.MouseEvent<HTMLImageElement>) => {
    if (userId) {
      const CartItem: Cart = {
        userId,
        product,
        id: nextId.current++,
        quantity: 1
      };
      const isProductInWishlist = cart.some((item: Cart) => item.userId === userId && item.product.id === product.id);
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
      }else{
        Swal.fire({
          title: 'Oops!',
          text: 'This product is already in cart!',
          icon: 'error'
        });
        
      }
    }
  };
 
  return (
    <div className={styles.cartWithFlatDiscountParent}>
      {product.title}
      <div className={styles.cartWithFlatDiscount}></div>
      <div className={styles.cartWithFlatDiscount}>
        <div className={styles.discountPercentParent}>
          <div className={styles.frameChild} onClick={handleCart}/>
          <div className={styles.addToCart} onClick={handleCart}>Add To Cart</div>
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
