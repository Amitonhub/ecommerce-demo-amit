import { WishlistItem } from "../../components/types/Types";

export const addToWishlist = (wishlistItem: WishlistItem) => {
  return {
    type: "ADD_TO_WISHLIST",
    payload: wishlistItem,
  };
};

export const setWishlistItems = (wishlistItem: WishlistItem[]) => ({
  type: "SET_WISHLIST_ITEMS",
  payload: wishlistItem,
});

export const deleteFromWishlist = (productId: number) => ({
  type: 'DELETE_FROM_WISHLIST',
  payload: productId,
});