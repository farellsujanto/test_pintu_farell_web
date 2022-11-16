import { QueryClient } from '@tanstack/react-query';

export const defaultQueryClient = new QueryClient({
    defaultOptions: {
        queries: {
            enabled: true,
            retry: false,
            refetchOnMount: false,
            refetchOnReconnect: false,
            refetchOnWindowFocus: false,
        },
    },
});
