import { Product} from "@/components/types/Types";

export const FETCH_PRODUCTS_REQUEST = "FETCH_PRODUCTS_REQUEST";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";

export interface FetchProductsRequest {
  type: typeof FETCH_PRODUCTS_REQUEST;
}

export interface FetchProductsSuccess {
  type: typeof FETCH_PRODUCTS_SUCCESS,
  payload: Product[]
}

export interface FetchProductsFailure {
  type: typeof FETCH_PRODUCTS_FAILURE;
  payload: string;
}

export type ProductsActionTypes =
  | FetchProductsRequest
  | FetchProductsSuccess
  | FetchProductsFailure;


