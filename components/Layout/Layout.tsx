import { AppProps } from "next/app";
import Header from "../Header/header";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import styles from './Layout.module.css'
import { useDispatch } from "react-redux";
import { fetchCart, fetchWishlist } from "@/pages/api/Api";
import { setWishlistItems } from "@/redux/actions/WishlistAction";
import { useEffect } from "react";
import { setCartItems } from "@/redux/actions/CartAction";
import "@fontsource/inter"; 
import "@fontsource/montserrat";

type LayoutProps = {
  children: React.ReactNode;
  Component: AppProps["Component"];
  pageProps: AppProps["pageProps"];
};

const Layout = ({ children }: LayoutProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
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
  }, []);
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
