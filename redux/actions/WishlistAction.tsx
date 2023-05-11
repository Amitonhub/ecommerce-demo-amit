import { AnyAction, Dispatch } from "redux";
import { fetchWishlist } from "@/pages/api/Api";
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

