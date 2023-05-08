import { combineReducers } from "redux";
import { loginReducer } from "./LogInReducer";
import productsReducer from "./ProductReducer";

const rootReducer = combineReducers({
  logIn: loginReducer,
  products: productsReducer,
});

export default rootReducer;
