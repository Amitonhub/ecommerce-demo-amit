import { combineReducers } from "redux";
import { loginReducer } from "./LogInReducer";
import productsReducer from "./ProductReducer";
import productDetailsReducer from "./ProductDetailsReducer";
import wishlistReducer from "./WishlistReducer";
import cartReducer from "./CartReducer";

const rootReducer = combineReducers({
  logIn: loginReducer,
  products: productsReducer,
  productDetails: productDetailsReducer,
  wishlist: wishlistReducer,
  cart: cartReducer,
});

export default rootReducer;
