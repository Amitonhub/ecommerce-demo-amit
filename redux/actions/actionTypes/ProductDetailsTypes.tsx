import { Product } from "@/components/types/Types";

export const SET_PRODUCT_DETAILS = "SET_PRODUCT_DETAILS";

interface SetProductDetailsAction {
  type: typeof SET_PRODUCT_DETAILS;
  payload: any;
}

export type ProductDetailsActionTypes = SetProductDetailsAction;

export interface ProductDetailsState {
  loading: boolean;
  product: Product;
  error: string | null;
}
