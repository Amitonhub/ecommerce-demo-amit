import { Cart } from "@/components/types/Types";

export const FETCH_CHECKOUT_ITEMS = 'FETCH_CHECKOUT_ITEMS';
export interface FetchCheckoutItemsAction {
    type: typeof FETCH_CHECKOUT_ITEMS;
    payload: {
        filteredCart: Cart[];
        totalPrice: number;
    };
}

export type CheckoutAction = FetchCheckoutItemsAction;

export const fetchCheckoutItemsSuccess = (
    filteredCart: Cart[],
    totalPrice: number
): CheckoutAction => {
    return {
        type: FETCH_CHECKOUT_ITEMS,
        payload: {
            filteredCart,
            totalPrice,
        },
    };
};
