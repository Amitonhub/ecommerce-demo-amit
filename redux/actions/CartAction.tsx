import { Cart } from "../../components/types/Types";

export const addToCart = (cartItem: Cart) => {
  return {
    type: "ADD_TO_CART",
    payload: cartItem,
  };
};

export const setCartItems = (cartItem: Cart[]) => ({
  type: "SET_CART_ITEMS",
  payload: cartItem,
});

export const deleteFromCart = (productId: number) => ({
  type: 'DELETE_FROM_CART',
  payload: productId,
});