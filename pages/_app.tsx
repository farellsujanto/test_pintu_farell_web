import type { AppProps } from 'next/app';
import { Hydrate, QueryClientProvider } from '@tanstack/react-query';
import { defaultQueryClient } from '../configs/queryClient';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <QueryClientProvider client={defaultQueryClient}>
            <Hydrate state={pageProps.dehydratedState}>
            <Component {...pageProps} />

            </Hydrate>
            
        </QueryClientProvider>
    );
}
