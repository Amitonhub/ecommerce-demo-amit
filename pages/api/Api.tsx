import { Cart, LogIn, Person, Product, WishlistItem } from "@/components/types/Types";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import axios from "axios";

const BASE_DUMMY_URL = 'https://dummyjson.com'
const BASE_MOCK_URL = 'https://645b80a099b618d5f31d12f9.mockapi.io'

export const dummyApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: BASE_DUMMY_URL }),
  endpoints: (builder) => ({
    fetchLogInData: builder.mutation<LogIn, Partial<LogIn>>({
      query: (data) => ({
        url: '/auth/login',
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: {
          username: data.username,
          password: data.password,
          expiresInMins: 60,
        },
      }),
    }),
    getUserData: builder.query<Person, number>({
      query: (userId) => `/users/${userId}`,
    }),
    getProductsByCategory: builder.query<Product[], string>({
      query: (category) => `/products/category/${category}`,
    }),
    fetchProducts: builder.query<any, null>({
      query: () => '/products',
    }),
    fetchProductDetails: builder.query<any, number>({
      query: (id) => `/products/${id}`,
    }),
  }),
});

export const {
  useFetchLogInDataMutation,
  useGetUserDataQuery,
  useGetProductsByCategoryQuery,
  useFetchProductsQuery,
  useFetchProductDetailsQuery,
} = dummyApi;

export const fetchProducts = async () => {
  const res = await fetch(`${BASE_DUMMY_URL}/products?limit=100`);
  const dataFromApi = await res.json();
  return dataFromApi.products;
};

export const fetchProductDetails = async (id: number): Promise<any> => {
  const response = await fetch(`${BASE_DUMMY_URL}/products/${id}`);
  const data = await response.json();
  return data;
};

export const getProductsByCategory = async (category: string) => {
  const url = `${BASE_DUMMY_URL}/products/category/${category}`;
  const response = await axios.get(url);
  return response.data.products;
};

export const addToWishlistToApi = async (wishlistItem: WishlistItem) => {
  const response = await axios.get(`${BASE_MOCK_URL}/wishlist`);
  const wishlistData: WishlistItem[] = response.data;
  const exists = wishlistData.some(
    (item) =>
      item.id === wishlistItem.id &&
      item.userId === wishlistItem.userId &&
      item.product.id === wishlistItem.product.id
  );
  if (!exists) {
    const postResponse = await axios.post(
      `${BASE_MOCK_URL}/wishlist`,
      wishlistItem
    );
    return postResponse.data;
  } else {
    return null;
  }
};

export async function fetchWishlist(): Promise<WishlistItem[]> {
  const response = await axios.get(`${BASE_MOCK_URL}/wishlist`);
  const data = response.data;
  return data.map((item: WishlistItem) => ({
    id: item.id,
    userId: item.userId,
    product: item.product,
  }));
}

export const deleteFromWishlistToApi = async (wishlistItemId: number) => {
  try {
    const response = await axios.delete(`${BASE_MOCK_URL}/wishlist/${wishlistItemId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const addToCartToApi = async (cartItem: Cart) => {
  const response = await axios.get(`${BASE_MOCK_URL}/cart`);
  const cartData: Cart[] = response.data;
  const exists = cartData.some(
    (item) =>
      item.id === cartItem.id &&
      item.userId === cartItem.userId &&
      item.product.id === cartItem.product.id
  );
  if (!exists) {
    const postResponse = await axios.post(`${BASE_MOCK_URL}/cart`, cartItem);
    return postResponse.data;
  } else {
    return null;
  }
};

export const moveAllToCartApi = async (cartItems: Cart[]) => {
  const response = await axios.get(`${BASE_MOCK_URL}/cart`);
  const cartData: Cart[] = response.data;
  const addedItems = [];

  for (const cartItem of cartItems) {
    const exists = cartData.some(
      (item) =>
        item.id === cartItem.id &&
        item.userId === cartItem.userId &&
        item.product.id === cartItem.product.id &&
        item.quantity === 1
    );
    if (!exists) {
      const updatedCartItem = { ...cartItem, quantity: 1 };
      const postResponse = await axios.post(`${BASE_MOCK_URL}/cart`, updatedCartItem);
      addedItems.push(postResponse.data);
    }
  }

  return addedItems;
};

export async function fetchCart(): Promise<Cart[]> {
  const response = await axios.get(`${BASE_MOCK_URL}/cart`);
  const data = response.data;
  return data.map((item: Cart) => ({
    quantity: item.quantity,
    id: item.id,
    userId: item.userId,
    product: item.product,
  }));
}

export const deleteFromCartToApi = async (carttemId: number) => {
  try {
    const response = await axios.delete(`${BASE_MOCK_URL}/cart/${carttemId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const updateCartItemQuantity = async (cartItemId: number, newQuantity: number) => {
  try {
    const response = await axios.put(`${BASE_MOCK_URL}/cart/${cartItemId}`, { quantity: newQuantity });
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};