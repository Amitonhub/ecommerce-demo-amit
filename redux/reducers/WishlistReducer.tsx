import { WishlistItem } from "@/components/types/Types";
import { AnyAction } from "redux";

export interface WishListState {
    wishlist: WishlistItem[];
  }

const initialState: WishListState = {
    wishlist: [],
  };
  
  function wishlistReducer(state = initialState, action: AnyAction) {
    switch (action.type) {
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