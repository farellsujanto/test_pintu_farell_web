import { QueryClientProvider } from '@tanstack/react-query';
import { render, screen } from '@testing-library/react';
import { defaultQueryClient } from '../../src/configs/queryClient';
import Home from '../../src/pages';
import MarketListTableDesktop from '../../src/components/tables/MarketListTable/desktop';
import MarketListTableMobile from '../../src/components/tables/MarketListTable/mobile';

const dummyMarketChangesData = [{
    name: 'Ethereum',
    currencySymbol: 'eth',
    logo: '',
    color: '#ffffff',
    day: '10000',
    week: '20000',
    month: '30000',
    year: '40000',
    latestPrice: '50000',
}];

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

    it('Check if Desktop table render data correctly (simple only)', async () => {
        const wrapper = render(
            <MarketListTableDesktop
                marketChangesListData={dummyMarketChangesData} />
        );

        const table = wrapper.getByRole('table');
        const td = table.children[1];

        const isNameCorrect = td.innerHTML.includes(dummyMarketChangesData[0].name);

        expect(td).toBeInTheDocument();
        expect(isNameCorrect).toBeTruthy();
    });

    it('Check if Mobile table render data correctly (simple only)', async () => {
        const wrapper = render(
            <MarketListTableMobile
                marketChangesListData={dummyMarketChangesData} />
        );

        const table = wrapper.getByRole('table');
        const td = table.children[1];

        const isNameCorrect = td.innerHTML.includes(dummyMarketChangesData[0].name);

        expect(td).toBeInTheDocument();
        expect(isNameCorrect).toBeTruthy();
    });

    it('Check if Mobile table render data correctly with 24H filter (simple only)', async () => {
        const wrapper = render(
            <MarketListTableMobile
                marketChangesListData={dummyMarketChangesData} />
        );

        expect(wrapper.getByText('24 Jam')).toBeInTheDocument();

        const isDayFilterCorrect = wrapper.getByRole('table').children[1].innerHTML.includes(dummyMarketChangesData[0].day);
        expect(isDayFilterCorrect).toBeTruthy();
    });
});
