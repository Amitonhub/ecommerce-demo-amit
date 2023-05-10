import { WishlistItem } from '../../components/types/Types';

export const addToWishlist = (wishlistItem: WishlistItem) => {
  return {
    type: "ADD_TO_WISHLIST",
    payload: wishlistItem,
  };
};
