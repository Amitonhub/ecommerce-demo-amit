import { ThunkAction } from "redux-thunk";
import { CombinedState } from "redux";
import { ProductDetailsActionTypes, ProductDetailsState, SET_PRODUCT_DETAILS } from "./actionTypes/ProductDetailsTypes";
import { fetchProductDetails } from "@/pages/api/Api";
import { Product } from "@/components/types/Types";

export const getProductDetails = (id: number): ThunkAction<void, CombinedState<{ productDetails: ProductDetailsState }>, null, ProductDetailsActionTypes> => {
  return async (dispatch) => {
    const data = await fetchProductDetails(id);
    console.log(data)
    dispatch(setProductDetails(data));
  };
};

export const setProductDetails = (data: Product): ProductDetailsActionTypes => {
  return {
    type: SET_PRODUCT_DETAILS,
    payload: data,
  };
};

