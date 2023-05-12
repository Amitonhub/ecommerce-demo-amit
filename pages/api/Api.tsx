import { LogIn, WishlistItem } from "@/components/types/Types";
import axios from "axios";

export const fetchLogInData = async (data: LogIn) => {
  const res = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: data.username,
      password: data.password,
      expiresInMins: 60,
    }),
  });
  const dataFromApi = await res.json();
  return dataFromApi;
};

export const fetchProducts = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const dataFromApi = await res.json();
  return dataFromApi.products;
};

export const fetchProductDetails = async (id: number): Promise<any> => {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await response.json();
  return data;
};

export const addToWishlistToApi = async (wishlistItem: WishlistItem) => {
  const response = await axios.get(
    "https://645b80a099b618d5f31d12f9.mockapi.io/wishlist"
  );
  const wishlistData: WishlistItem[] = response.data;
  const exists = wishlistData.some(
    (item) =>
    item.id === wishlistItem.id &&
      item.userId === wishlistItem.userId &&
      item.product.id === wishlistItem.product.id
  );
  if (!exists) {
    const postResponse = await axios.post(
      "https://645b80a099b618d5f31d12f9.mockapi.io/wishlist",
      wishlistItem
    );
    return postResponse.data;
  } else {
    return null;
  }
};

export async function fetchWishlist(): Promise<WishlistItem[]> {
  const response = await axios.get(
    "https://645b80a099b618d5f31d12f9.mockapi.io/wishlist"
  );
  const data = response.data;
  return data.map((item: WishlistItem) => ({
    id: item.id,
    userId: item.userId,
    product: item.product,
  }));
}

export const deleteFromWishlistToApi = async (wishlistItemId: number) => {
  try {
    console.log('delete')
    const response = await axios.delete(
      `https://645b80a099b618d5f31d12f9.mockapi.io/wishlist/${wishlistItemId}`
    );
    console.log('deleted successfully')
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
