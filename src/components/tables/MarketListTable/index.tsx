import React, { useCallback, useMemo, useState } from 'react';
import SVG from 'react-inlinesvg';
import { MarketChanges } from '../../../models/marketChangesModel';
import PriceChanges from '../../../models/priceChangesModel';
import CaretDownIcon from '../../../public/icons/CaretDownIcon';
import CaretUpIcon from '../../../public/icons/CaretUpIcon';
import { useSupportedCurrenciesQuery, usePriceChangesQuery } from '../../../queries/marketQuery/marketQueryHooks';
import HomeTimeDropdown from '../../buttons/HomeTimeDropdown';

interface ChangesTextProps {
    changes: string;
}

const ChangesText = ({ changes }: ChangesTextProps) => {

    const changesNumber = Number(changes);
    // TODO: Handle 0% change
    const isChangesPositive = changesNumber > 0;
    const colorClass = isChangesPositive ? 'text-green-400 fill-green-400' : 'text-red-400 fill-red-400';

    return (
        <div className={`${colorClass} flex flex-row items-center text-right float-right`}>
            {isChangesPositive ? (
                <CaretUpIcon />
            ) : (
                <CaretDownIcon />
            )}
            <p className='ml-1 text-sm font-semibold'>{Math.abs(changesNumber)} %</p>
        </div>
    );
}

const MarketListTable = () => {

    const [dayFilter, setDayFilter] = useState('day');

    const {
        data: supportedCurrencies,
        isLoading: isSupportedCurrenciesLoading,
    } = useSupportedCurrenciesQuery();

    const {
        data: priceChanges,
        isLoading: isPriceChangesLoading,
    } = usePriceChangesQuery();

    const handleDayFilterChange = useCallback((newDayFilter: string) => {
        setDayFilter(newDayFilter);
    }, []);

    const getChangesValue = useCallback((priceChanges: PriceChanges, dayFilterToSearch: string) => {
        switch (dayFilterToSearch) {
            case 'day':
                return priceChanges?.day;
            case 'week':
                return priceChanges?.week;
            case 'month':
                return priceChanges?.month;
            case 'year':
                return priceChanges?.year;
            default:
                return '';
        }
    }, []);

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
                changes: getChangesValue(currencyPriceChanges, dayFilter),
                latestPrice: currencyPriceChanges?.latestPrice ?? '',
            }
        }).filter((data) => data.changes);

        return newMarketChangesListData;
    }, [
        supportedCurrencies,
        isSupportedCurrenciesLoading,
        priceChanges,
        isPriceChangesLoading,
        dayFilter,
    ]);

    return (
        <div className='border min-w-full divide-gray-200'>
            <table className='min-w-full divide-y divide-gray-200'>
                <thead >
                    <tr className='font-semibold text-gray-900 uppercase'>
                        <th className='p-4 text-xs text-left'>
                            CRYPTO
                        </th>
                        <th className='p-4 text-xs text-right'>
                            <HomeTimeDropdown
                                dayFilter={dayFilter}
                                onDayFilterChange={handleDayFilterChange} />
                        </th>
                    </tr>
                </thead>
                <tbody className='divide-y divide-gray-200'>
                    <>
                        {marketChangesListData.map((marketChange) => {
                            return (
                                <tr>
                                    <td className='p-4'>
                                        <div className='flex flex-row'>
                                            <SVG src={marketChange.logo} color={marketChange.color} className='w-8 h-8 self-center' />

                                            <div className=' ml-6'>
                                                <p className='text-base font-semibold text-gray-900'>{marketChange.name}</p>
                                                <p>{marketChange.currencySymbol}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='p-4 text-right'>
                                        <div className=''>
                                            <p className='text-base font-semibold text-gray-900'>Rp {Number(marketChange.latestPrice).toLocaleString('id')}</p>
                                            <ChangesText changes={marketChange.changes} />
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </>
                </tbody>
            </table>
        </div>
    );

}

export default React.memo(MarketListTable);
