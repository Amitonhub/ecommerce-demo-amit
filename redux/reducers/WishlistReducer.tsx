import { Product, WishlistItem } from "@/components/types/Types";
import { AnyAction } from "redux";

export interface WishListState {
  wishlist: WishlistItem[];
}

const initialState: WishListState = {
  wishlist: [] as WishlistItem[],
};

function wishlistReducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case "SET_WISHLIST_ITEMS":
      return {
        wishlist: action.payload,
      };
    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload],
      };
    default:
      return state;
  }
}

export default wishlistReducer;
