import React, { useMemo } from 'react';
import { useSupportedCurrenciesQuery, usePriceChangesQuery } from '../../../queries/marketQuery/marketQueryHooks';
import MarketListTableMobile from './mobile';
import MarketListTableDesktop from './desktop';
import { getMarketChangesListData } from '../../../utils/marketListUtil';

const MarketListTable = () => {
    const { data: supportedCurrencies } = useSupportedCurrenciesQuery();
    const { data: priceChanges } = usePriceChangesQuery();

    const marketChangesListData = useMemo(() => {
        const isDataEmpty = !supportedCurrencies || !priceChanges;
        if (isDataEmpty) {
            return [];
        }

        return getMarketChangesListData(supportedCurrencies, priceChanges);
    }, [supportedCurrencies, priceChanges]);

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
