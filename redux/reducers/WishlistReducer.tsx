import { WishlistItem } from "@/components/types/Types";
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
    case "DELETE_FROM_WISHLIST":
      const productId = action.payload;
      const updatedWishlist = state.wishlist.filter(
        (item) => item.product.id !== productId
      );
      return {
        ...state,
        wishlist: updatedWishlist,
      };
    default:
      return state;
  }
}


export default wishlistReducer;
