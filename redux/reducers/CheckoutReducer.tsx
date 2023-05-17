import { Cart, CheckoutItem } from "@/components/types/Types";
import { CheckoutAction, FETCH_CHECKOUT_ITEMS } from "../actions/CheckoutAction";

export interface CheckoutState {
    filteredCart: Cart[];
    totalPrice: number;
}
const initialState: CheckoutState = {
    filteredCart: [],
    totalPrice: 0
};

const checkoutReducer = (state = initialState, action: CheckoutAction): CheckoutState => {
    switch (action.type) {
        case FETCH_CHECKOUT_ITEMS:
            return {
                ...state,
                filteredCart: action.payload.filteredCart,
                totalPrice: action.payload.totalPrice
            };
        default:
            return state;
    }
};

export default checkoutReducer;
