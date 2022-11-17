import React, { useMemo } from 'react';
import { MarketChanges } from '../../../models/marketChangesModel';
import PriceChanges from '../../../models/priceChangesModel';
import { useSupportedCurrenciesQuery, usePriceChangesQuery } from '../../../queries/marketQuery/marketQueryHooks';
import MarketListTableMobile from './mobile';
import MarketListTableDesktop from './desktop';

const MarketListTable = () => {
    const { data: supportedCurrencies } = useSupportedCurrenciesQuery();

    const { data: priceChanges } = usePriceChangesQuery();

    const marketChangesListData: MarketChanges[] = useMemo(() => {
        const isDataEmpty = !supportedCurrencies || !priceChanges;
        if (isDataEmpty) {
            return [];
        }

        const newMarketChangesListData = supportedCurrencies.map((supportedCurrency) => {
            const currencyPriceChanges: PriceChanges | undefined = priceChanges.find((priceChange) => {
                const splittedCurrencyPair = priceChange.pair.split('/');
                return splittedCurrencyPair[0].toLowerCase() === supportedCurrency.currencySymbol.toLowerCase();
            });

            return {
                name: supportedCurrency.name,
                currencySymbol: supportedCurrency.currencySymbol,
                color: supportedCurrency.color,
                logo: supportedCurrency.logo,
                latestPrice: currencyPriceChanges?.latestPrice ?? '',
                day: currencyPriceChanges?.day ?? '',
                week: currencyPriceChanges?.week ?? '',
                month: currencyPriceChanges?.month ?? '',
                year: currencyPriceChanges?.year ?? '',
            }
        }).filter((data) => data.day);

        return newMarketChangesListData;
    }, [
        supportedCurrencies,
        priceChanges,
    ]);

    return (
        <>
            <div className='hidden md:block'>
                <MarketListTableDesktop marketChangesListData={marketChangesListData} />
            </div>

            <div className='md:hidden'>
                <MarketListTableMobile marketChangesListData={marketChangesListData} />
            </div>

        </>

    );

}

export default React.memo(MarketListTable);
