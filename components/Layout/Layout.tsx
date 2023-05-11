import { AppProps } from "next/app";
import Header from "../Header/header";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

type LayoutProps = {
  children: React.ReactNode;
  Component: AppProps["Component"];
  pageProps: AppProps["pageProps"];
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
