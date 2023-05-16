import { Product } from "@/components/types/Types";
import getProductsByCategory from "@/pages/api/Api";
import {
  CategoryActionTypes,
  FetchProductsSuccessAction,
  FetchProductsFailureAction,
} from "./actionTypes/CategoryActionTypes";

export const fetchProducts = async (
  category: string
): Promise<CategoryActionTypes> => {
  try {
    const data = await getProductsByCategory(category);
    return fetchProductsSuccess(data, category);
  } catch (error: any) {
    return fetchProductsFailure(error.message);
  }
};

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
