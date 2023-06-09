import { Cart } from "@/components/types/Types";
import { AnyAction } from "redux";

export interface CartState {
  cart: Cart[];
}

const initialState: CartState = {
  cart: [] as Cart[],
};

function cartReducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case 'SET_CART_ITEMS':
      return {
        cart: action.payload,
      };
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case 'DELETE_FROM_CART':
      const productId = action.payload;
      const updatedCart = state.cart.filter(
        (item) => item.product.id !== productId
      );
      return {
        ...state,
        cart: updatedCart,
      };
    case 'MOVE_ALL_TO_CART':
      return {
        ...state,
        cart: [...state.cart, ...action.payload],
      };
    case 'CHANGE_CART_ITEM_QUANTITY':
      const { id, quantity } = action.payload;
      const updatedCartWithNewQuantity = state.cart.map((item) =>
        item.product.id === id ? { ...item, quantity: quantity } : item
      );
      return {
        ...state,
        cart: updatedCartWithNewQuantity,
      };
    default:
      return state as CartState;
  }
}



export default cartReducer;
