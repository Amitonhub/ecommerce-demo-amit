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

export const moveAllToCart = (data: Cart[]) => ({
  type: 'MOVE_ALL_TO_CART',
  payload: data,
});

