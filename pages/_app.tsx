import { AppProps } from 'next/app'
import { Provider} from 'react-redux'
import store from '@/redux/store'
import Layout from '@/components/Layout/Layout'

const MyApp = ({ Component, pageProps }: AppProps) => {

  return (
    <Provider store={store}>
      <Layout Component={Component} pageProps={pageProps}>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp;
