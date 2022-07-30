import { AppProps } from 'next/app'
import GlobalStyle from 'ui/globalStyles'
import { MainProvider } from 'ui/providers/mainProviders'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </MainProvider>
  )
}

export default MyApp
