import { AppProps } from "next/app";
import Header from "../Header/header";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import styles from './Layout.module.css'
import { useDispatch } from "react-redux";
import { fetchCart, fetchProducts, fetchWishlist } from "@/pages/api/Api";
import { setWishlistItems } from "@/redux/actions/WishlistAction";
import { useEffect } from "react";
import { setCartItems } from "@/redux/actions/CartAction";
import "@fontsource/inter";
import "@fontsource/montserrat";
import { fetchProductsSuccess } from "@/redux/actions/ProductAction";
import { LayoutProps } from "../types/Types";

const Layout = ({ children }: LayoutProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProductsAsync = async () => {
      const data = await fetchProducts();
      dispatch(fetchProductsSuccess(data));
    };
    fetchWishlist()
      .then((data) => {
        dispatch(setWishlistItems(data));
      })
      .catch((error) => {
        console.log("Error setting data to wishlist:", error);
      });
    fetchCart()
      .then((data) => {
        dispatch(setCartItems(data));
      })
      .catch((error) => {
        console.log("Error setting data to wishlist:", error);
      });
    fetchProductsAsync();
  }, [dispatch]);

  return (
    <>
      <Header />
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
