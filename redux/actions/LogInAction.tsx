import { LogIn } from "@/components/types/Types";


export const logIn = (user: LogIn) => ({
  type: "LOG_IN",
  payload: user,
});

export const logOutAction = () => ({
  type: "LOG_OUT",
});
