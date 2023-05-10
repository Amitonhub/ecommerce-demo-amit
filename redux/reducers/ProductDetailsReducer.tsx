import { Product } from '@/components/types/Types';
import { ProductDetailsState, ProductDetailsActionTypes, SET_PRODUCT_DETAILS } from '../actions/actionTypes/ProductDetailsTypes';


const initialState: ProductDetailsState = {
  loading: false,
  product: {} as Product,
  error: null,
};

export default function productDetailsReducer(state = initialState, action: ProductDetailsActionTypes): ProductDetailsState {
  switch (action.type) {
    case SET_PRODUCT_DETAILS:
      return {
        ...state,
        loading: false,
        product: action.payload,
        error: null,
      };
    default:
      return state;
  }
}
