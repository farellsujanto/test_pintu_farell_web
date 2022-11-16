import React, { useMemo } from 'react';
import { MarketChanges } from '../../../models/marketChangesModel';
import PriceChanges from '../../../models/priceChangesModel';
import { useSupportedCurrenciesQuery, usePriceChangesQuery } from '../../../queries/marketQuery/marketQueryHooks';
import MarketListTableMobile from './mobile';

const MarketListTable = () => {
    const {
        data: supportedCurrencies,
        isLoading: isSupportedCurrenciesLoading,
    } = useSupportedCurrenciesQuery();

    const {
        data: priceChanges,
        isLoading: isPriceChangesLoading,
    } = usePriceChangesQuery();

    const marketChangesListData: MarketChanges[] = useMemo(() => {
        const isDataStillLoading = isSupportedCurrenciesLoading || isPriceChangesLoading;
        const isDataEmpty = !supportedCurrencies || !priceChanges;
        if (isDataStillLoading || isDataEmpty) {
            return [];
        }

        const newMarketChangesListData = supportedCurrencies.map((supportedCurrency) => {
            const currencyPriceChanges: PriceChanges = priceChanges.find((priceChange) => {
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
        isSupportedCurrenciesLoading,
        priceChanges,
        isPriceChangesLoading,
    ]);

    return (
        <MarketListTableMobile marketChangesListData={marketChangesListData} />
    );

}

export default React.memo(MarketListTable);
