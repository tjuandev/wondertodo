import { AppProps } from 'next/app'
import GlobalStyle from 'globalStyles'
import { MainProvider } from 'utils/providers/mainProviders'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </MainProvider>
  )
}

export default MyApp
