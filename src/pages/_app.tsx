
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import GlobalStyle from '@/styles/globalStyle';
import { theme } from '@/styles/theme';


function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
        <GlobalStyle/>
        <Component {...pageProps} />
    </ChakraProvider>
  )
}


export default App;