import { Product } from "@/components/types/Types";

export const FETCH_CATEGORY_PRODUCTS_SUCCESS = "FETCH_CATEGORY_PRODUCTS_SUCCESS";
export const FETCH_CATEGORY_PRODUCTS_FAILURE = "FETCH_CATEGORY_PRODUCTS_FAILURE";

export interface FetchProductsSuccessAction {
  type: typeof FETCH_CATEGORY_PRODUCTS_SUCCESS;
  payload: Product[];
  category: string;
}

export interface FetchProductsFailureAction {
  type: typeof FETCH_CATEGORY_PRODUCTS_FAILURE;
  payload: string;
}

export type CategoryActionTypes =
  | FetchProductsSuccessAction
  | FetchProductsFailureAction;
