import { Reducer } from "react";
import { combineReducers } from "redux";
import { loginReducer } from "./LogInReducer";

const rootReducer = combineReducers({
  logIn: loginReducer,
});

export default rootReducer;
