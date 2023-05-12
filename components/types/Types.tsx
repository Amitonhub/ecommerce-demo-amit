export interface LogIn {
  email: string;
  firstName: string;
  gender: string;
  id: number;
  image: string;
  lastName: string;
  token: string;
  username: string;
  password: string;
}

export interface FiveStarProps {
  rating: number;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface ProductProps {
  product: Product;
}
export interface WishlistItem {
  id: number;
  userId?: number;
  product: Product;
}

export interface WishlistCardProps {
  product: Product;
  item: WishlistItem;
}
