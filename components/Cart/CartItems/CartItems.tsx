import React, { useState } from "react";
import styles from '../Cart.module.css'
import dropUpSmall from '../../../assets/Cart/dropUpSmall.png'
import dropDownSmall from '../../../assets/Cart/dropDownSmall.png'
import deleteCart from '../../../assets/Cart/deleteCart.png'
import { CartItemsProps } from "@/components/types/Types";
import { deleteFromCartToApi, updateCartItemQuantity } from "@/pages/api/Api";
import { useDispatch } from "react-redux";
import { deleteFromCart } from "@/redux/actions/CartAction";
import Swal from "sweetalert2";

const CartItems: React.FC<CartItemsProps> = ({ product, item }) => {
  const dispatch = useDispatch();
  const { price, thumbnail, title } = product;
  const [quantity, setQuantity] = useState(item.quantity);

  const handleDeleteFromCart = async () => {
    await deleteFromCartToApi(item.id)
    Swal.fire({
      title: "Deleted!",
      text: "this product is successfully deleted from cart!",
      icon: "success",
    });
    dispatch(deleteFromCart(item.product.id));
  };

  const handleIncrement = async () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    await updateCartItemQuantity(item.id, newQuantity);
  };

  const handleDecrement = async () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      await updateCartItemQuantity(item.id, newQuantity);
    }
  };

  return (
    <div className={styles.cartSection}>
      <div className={styles.price}>{price}</div>
      <div className={styles.subTotal}>{price * quantity}</div>
      <div className={styles.quantity1}>
        <div className={styles.parent}>
          <div className={styles.product}>
            <input
              className={styles.quantity}
              type="number"
              name="quantity"
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
          </div>
          <div className={styles.dropUpSmallParent}>
            <img
              className={styles.dropUpSmallIcon}
              alt="dropup"
              src={dropUpSmall.src}
              onClick={handleIncrement}
            />
            <img
              className={styles.dropUpSmallIcon}
              alt="dropdown"
              src={dropDownSmall.src}
              onClick={handleDecrement}
            />
          </div>
        </div>
      </div>
      <div className={styles.productCartSmall}>
        <img className={styles.gIcon} alt="" src={thumbnail} />
      </div>
      <div className={styles.productTitle}>{title}</div>
      <img
        className={styles.iconCancel}
        alt="delete"
        src={deleteCart.src}
        onClick={handleDeleteFromCart}
      />
    </div>
  );
};

export default CartItems;
