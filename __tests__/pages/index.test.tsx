import { QueryClientProvider } from '@tanstack/react-query';
import { render, screen } from '@testing-library/react'
import { defaultQueryClient } from '../src/configs/queryClient';
import Home from '../src/pages';

describe('Home', () => {
    it('Renders correctly without crashing', () => {
        render(
            <QueryClientProvider client={defaultQueryClient}>
                <Home />
            </QueryClientProvider>
        );

        const heading = screen.getByRole('heading', {
            name: 'Harga Crypto dalam Rupiah Hari Ini',
        });

        expect(heading).toBeInTheDocument();
    });
});
