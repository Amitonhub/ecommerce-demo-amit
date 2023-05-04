import { Inter } from "next/font/google";
import Header from "@/components/header";
import Error from "../components/error";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <Header/>
    <Footer/>
    </>
  );
}
