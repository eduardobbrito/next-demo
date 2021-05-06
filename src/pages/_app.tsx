import { AppProps } from 'next/app'
import GlobalStyle from 'src/styles/global'
import Navbar from 'src/components/Navbar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
