import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Header from '@/components/header';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
  return <>
  <Header/>
  <Navbar/>
  <Component {...pageProps} />
  <Footer/>
  </>
}






