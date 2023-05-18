import { LogIn } from "@/components/types/Types";
import { LoginState } from "../reducers/LogInReducer";


export const logIn = (user: LogIn) => ({
  type: "LOG_IN",
  payload: user,
});

export const logOutAction = () => ({
  type: "LOG_OUT",
});
