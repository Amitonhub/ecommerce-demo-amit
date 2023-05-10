import { LogIn } from "@/components/types/Types";

export const fetchLogInData = async (data: LogIn) => {
  const res = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: data.username,
      password: data.password,
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
