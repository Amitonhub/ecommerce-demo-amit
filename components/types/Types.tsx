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
  phone: string | number;
}

export interface Person {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  address: {
    address: string;
    city: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    postalCode: string;
    state: string;
  };
  company: {
    address: {
      address: string;
      city: string;
      coordinates: {
        lat: number;
        lng: number;
      };
      postalCode: string;
      state: string;
    };
    department: string;
    name: string;
    title: string;
  };
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
  userId: number;
  product: Product;
}

export interface WishlistCardProps {
  product: Product;
  item: WishlistItem;
}

export interface Cart {
  id: number;
  userId?: number;
  product: Product;
  quantity: number;
}
export interface CartItemsProps {
  product: Product;
  item: Cart;
}
export interface CheckoutItem {
  product: Product[];
  totalPrice: number;
}