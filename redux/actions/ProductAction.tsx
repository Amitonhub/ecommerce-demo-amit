import { Product } from "@/components/types/Types";
import {
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FetchProductsFailure,
  FetchProductsRequest,
  FetchProductsSuccess,
} from "./actionTypes/ProductActionTypes";

export const fetchProductsRequest = (): FetchProductsRequest => ({
  type: FETCH_PRODUCTS_REQUEST,
});

export const fetchProductsSuccess = (
  products: Product
): FetchProductsSuccess => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

export const fetchProductsFailure = (error: string): FetchProductsFailure => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: error,
});
