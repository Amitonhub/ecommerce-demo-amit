import { LogIn } from "@/components/types/Types";


export interface LoginState {
  isSignedIn: string;
  user: LogIn | null;
}

const userFromLocal = typeof localStorage !== 'undefined' ? localStorage.getItem("user") : null;
const signedInFromLocal = typeof localStorage !== 'undefined' ? localStorage.getItem('signed-in') : null;

const initialState: LoginState = {
  isSignedIn: signedInFromLocal ? JSON.parse(signedInFromLocal) : [],
  user: userFromLocal ? JSON.parse(userFromLocal) : [],
};

export const loginReducer = (
  state: LoginState = initialState,
  action: any
): LoginState => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,
        isSignedIn: 'true',
        user: action.payload,
      };
    case "LOG_OUT":
      return {
        ...state,
        isSignedIn: 'false',
        user: null,
      };
    default:
      return state;
  }
};
