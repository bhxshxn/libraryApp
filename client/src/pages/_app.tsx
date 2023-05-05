import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { CookiesProvider } from 'react-cookie';
import ProtectedComponent from '@/components/protectedRoute';
export default function App({ Component, pageProps }: AppProps) {
   const queryClient = new QueryClient();
   return (
      <QueryClientProvider client={queryClient}>
         <CookiesProvider>
            <Component {...pageProps} />
         </CookiesProvider>
      </QueryClientProvider>
   );
}
