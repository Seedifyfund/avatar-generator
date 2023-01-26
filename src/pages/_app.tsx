
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import GlobalStyle from '@/styles/globalStyle';
import { theme } from '@/styles/theme';

import {



  QueryClient,

  QueryClientProvider,

} from 'react-query'

 

 // Create a client

 const queryClient = new QueryClient()

 
function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
           <QueryClientProvider client={queryClient}>
           <GlobalStyle/>
        <Component {...pageProps} />
           </QueryClientProvider>

    </ChakraProvider>
  )
}


export default App;