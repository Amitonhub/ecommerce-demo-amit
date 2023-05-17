import { combineReducers } from 'redux';
import { loginReducer } from './LogInReducer';
import productsReducer from './ProductReducer';
import productDetailsReducer from './ProductDetailsReducer';
import wishlistReducer from './WishlistReducer';
import cartReducer from './CartReducer';
import categoryReducer from './CategoryReducer';
import searchReducer from './SearchReducer';
import checkoutReducer from './CheckoutReducer';

const rootReducer = combineReducers({
  logIn: loginReducer,
  products: productsReducer,
  search: searchReducer,
  productDetails: productDetailsReducer,
  wishlist: wishlistReducer,
  cart: cartReducer,
  category: categoryReducer,
  checkout: checkoutReducer,
});

export default rootReducer;
