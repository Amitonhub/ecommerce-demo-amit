import { Product } from "@/components/types/Types";
import { CategoryActionTypes } from "../actions/actionTypes/CategoryActionTypes";

interface CategoryState {
  category: string;
  products: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: CategoryState = {
  category: "",
  products: [],
  loading: true,
  error: null,
};

const categoryReducer = (
  state = initialState,
  action: CategoryActionTypes
): CategoryState => {
  switch (action.type) {
    case "FETCH_CATEGORY_PRODUCTS_SUCCESS":
      return {
        ...state,
        products: action.payload,
        category: action.category,
        loading: false,
        error: null,
      };
    case "FETCH_CATEGORY_PRODUCTS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default categoryReducer;
