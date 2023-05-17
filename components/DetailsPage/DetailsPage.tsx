import React, { useRef, useState } from "react";
import styles from "./DetailsPage.module.css";
import slash from "../../assets/DetalisPage/slash.png";
import heart from "../../assets/DetalisPage/heart.png";
import plus from "../../assets/DetalisPage/plus.png";
import minus from "../../assets/DetalisPage/minus.png";
import delivery from "../../assets/DetalisPage/delivery.png";
import returnProduct from "../../assets/DetalisPage/return.png";
import underline from "../../assets/DetalisPage/underline.png";
import blueColor from "../../assets/DetalisPage/blueColor.png";
import redColor from "../../assets/DetalisPage/redColor.png";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Link from "next/link";
import FiveStar from "@/components/Common/FiveStar/FiveStar";
import { addToWishlistToApi, updateCartItemQuantity } from "@/pages/api/Api";
import { addToWishlist } from "@/redux/actions/WishlistAction";
import { Cart, WishlistItem } from "../types/Types";
import Swal from "sweetalert2";
import { fetchCheckoutItemsSuccess } from "@/redux/actions/CheckoutAction";
import { useRouter } from "next/router";

export default function DetailsPage() {
  const router = useRouter()
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const product = useSelector((state: RootState) => state.rootReducer.productDetails.product);
  const rating = Math.round(product.rating);
  const userId = useSelector((state: RootState) => state.rootReducer.logIn.user?.id);
  const wishlist = useSelector((state: RootState) => state.rootReducer.wishlist.wishlist);
  const nextId = useRef(1);

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
          text: "Product is Already in wishlist!",
          icon: "error",
        });
      }
    }
  };
  const handleIncrement = async () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    await updateCartItemQuantity(product.id, newQuantity);
  };

  const handleDecrement = async () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      await updateCartItemQuantity(product.id, newQuantity);
    }
  };

  const totalPrice = product.price * quantity;

  const handleBuyNow = () => {
    const cartItem: Cart = {
      id: product.id,
      product: product,
      quantity: quantity,
    };

    const cartItems: Cart[] = [cartItem];

    dispatch(fetchCheckoutItemsSuccess(cartItems, totalPrice));
    router.push('/checkout');
  };


  return (
    <>
      <div className={styles.productDetailsPage}>
        <div className={styles.details}>
          <div className={styles.roadmap}>
            <Link className={styles.link} href={`/`}>
              <div className={styles.account}>Home</div>
            </Link>
            <img className={styles.roadmapChild} alt="" src={slash.src} />
            <Link href={`/categories/${product.category}`} className={styles.link}>
              <div className={styles.account}>{product.category}</div>
            </Link>
            <Link href={"/cart"}>
              <div className={styles.nothing1}>View Cart</div>
            </Link>
            <img className={styles.roadmapChild} alt="" src={slash.src} />
            <div className={styles.english}>{product.title}</div>
          </div>
          <div className={styles.image63Wrapper}>
            <img
              className={styles.image63Icon}
              alt=""
              src={product.thumbnail}
            />
          </div>
          <div className={styles.image57Wrapper}>
            <img
              className={styles.image57Icon}
              alt=""
              src={product.images?.[0]}
            />
          </div>
          <div className={styles.image58Wrapper}>
            <img
              className={styles.image58Icon}
              alt=""
              src={product.images?.[1]}
            />
          </div>
          <div className={styles.image61Wrapper}>
            <img
              className={styles.image61Icon}
              alt=""
              src={product.images?.[2]}
            />
          </div>
          <div className={styles.image59Wrapper}>
            <img
              className={styles.image59Icon}
              alt=""
              src={product.images?.[3]}
            />
          </div>
          <div className={styles.havicHvG92}>{product.title}</div>
          <div className={styles.div}>${product.price}</div>
          <div className={styles.frameGroup}>
            <FiveStar rating={rating} />
            <div className={styles.lineParent}>
              <div className={styles.frameChild} />
              <div className={styles.inStock}>In Stock</div>
            </div>
          </div>
          <div className={styles.playstation5Controller}>
            {product.description}
          </div>
          <div className={styles.coloursParent}>
            <div className={styles.colours}>Colours:</div>
            <div className={styles.twoColors}>
              <img
                className={styles.colourChnageChild}
                alt=""
                src={blueColor.src}
              />
              <img
                className={styles.colourChnageChild}
                alt=""
                src={redColor.src}
              />
            </div>
          </div>
          <div className={styles.sizeParent}>
            <div className={styles.colours}>Size:</div>
            <div className={styles.frameContainer}>
              <div className={styles.xsWrapper}>
                <div className={styles.xs}>XS</div>
              </div>
              <div className={styles.xsWrapper}>
                <div className={styles.s}>S</div>
              </div>
              <div className={styles.mWrapper}>
                <div className={styles.m}>M</div>
              </div>
              <div className={styles.xsWrapper}>
                <div className={styles.l}>L</div>
              </div>
              <div className={styles.xsWrapper}>
                <div className={styles.xl}>XL</div>
              </div>
            </div>
          </div>
          <img className={styles.underlineIcon} alt="" src={underline.src} />
          <div className={styles.frameDiv}>
            <img
              className={styles.frameItem}
              alt=""
              src={minus.src}
              onClick={handleDecrement}
            />
            <div className={styles.wrapper}>
              <div className={styles.div1}>
                <input
                  className={styles.quantity}
                  type="number"
                  name="quantity"
                  id="quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                />
              </div>
            </div>
            <img
              className={styles.frameInner}
              alt=""
              src={plus.src}
              onClick={handleIncrement}
            />
          </div>
          <div className={styles.button}>
            <div className={styles.addToCart} onClick={handleBuyNow}>Buy Now</div>
          </div>
          <img
            className={styles.productDetailsPageItem}
            alt=""
            src={heart.src}
            onClick={handleWishlist}
          />
          <div className={styles.underlineParent}>
            <img className={styles.underlineIcon1} alt="" src={underline.src} />
            <div className={styles.iconDeliveryParent}>
              <img className={styles.iconDelivery} alt="" src={delivery.src} />
              <div className={styles.freeDeliveryParent}>
                <div className={styles.addToCart}>Free Delivery</div>
                <div className={styles.enterYourPostal}>
                  Enter your postal code for Delivery Availability
                </div>
              </div>
            </div>
            <div className={styles.iconReturnParent}>
              <img
                className={styles.iconDelivery}
                alt=""
                src={returnProduct.src}
              />
              <div className={styles.freeDeliveryParent}>
                <div className={styles.addToCart}>Return Delivery</div>
                <div className={styles.free30DaysContainer}>
                  {`Free 30 Days Delivery Returns. `}
                  <span className={styles.detailsText}>Details</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
