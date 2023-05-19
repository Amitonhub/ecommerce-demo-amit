import { Product } from "@/components/types/Types";
import {
  FetchProductsSuccessAction,
  FetchProductsFailureAction
} from "./actionTypes/CategoryActionTypes";

export const fetchProductsSuccess = (
  products: Product[],
  category: string
): FetchProductsSuccessAction => {
  return {
    type: "FETCH_CATEGORY_PRODUCTS_SUCCESS",
    payload: products,
    category,
  };
};

export const fetchProductsFailure = (
  error: string
): FetchProductsFailureAction => {
  return {
    type: "FETCH_CATEGORY_PRODUCTS_FAILURE",
    payload: error,
  };
};
