import '@testing-library/react';
import MarketChanges from '../../src/models/marketChangesModel';
import { getMarketChangesListData } from '../../src/utils/marketListUtil';

const dummySupportedCurrencies1 = [{
    name: 'Ethereum',
    logo: '',
    color: '#ffffff',
    currencyGroup: 'eth',
    currencySymbol: 'eth',
}];

const dummySupportedCurrencies2 = [{
    name: 'Farell Coin',
    logo: '',
    color: '#ffffff',
    currencyGroup: 'far',
    currencySymbol: 'far',
}];

const dummyPriceChanges1 = [{
    pair: 'eth/idr',
    day: '1',
    week: '2',
    month: '3',
    year: '4',
    latestPrice: '5',
}];

describe('Test getMarketChangesListData() output', () => {
    test('Should result in correct output', () => {
        expect(getMarketChangesListData(dummySupportedCurrencies1, dummyPriceChanges1))
            .toStrictEqual<MarketChanges[]>([{
                name: 'Ethereum',
                currencySymbol: 'eth',
                logo: '',
                color: '#ffffff',
                day: '1',
                week: '2',
                month: '3',
                year: '4',
                latestPrice: '5',
            }]);
    });

    test('Should result in empty output (Wrong pair)', () => {
        expect(getMarketChangesListData(dummySupportedCurrencies2, dummyPriceChanges1))
            .toStrictEqual([]);
    });

    test('Should result in empty output (Empty both inputs)', () => {
        expect(getMarketChangesListData([], []))
            .toStrictEqual([]);
    });

});