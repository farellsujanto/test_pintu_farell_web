import React, { useCallback, useState } from 'react';
import SVG from 'react-inlinesvg';
import { MarketChanges } from '../../../models/marketChangesModel';
import HomeTimeDropdown from '../../buttons/HomeTimeDropdown';
import ChangesText from './components/ChangesText';

interface MarketListTableMobileProps {
    marketChangesListData: MarketChanges[];
}

const MarketListTableMobile = ({ marketChangesListData }: MarketListTableMobileProps) => {
    const [dayFilter, setDayFilter] = useState('day');

    const handleDayFilterChange = useCallback((newDayFilter: string) => {
        setDayFilter(newDayFilter);
    }, []);

    const getChangesValue = useCallback((marketChanges: MarketChanges) => {
        switch (dayFilter) {
            case 'day':
                return marketChanges?.day;
            case 'week':
                return marketChanges?.week;
            case 'month':
                return marketChanges?.month;
            case 'year':
                return marketChanges?.year;
            default:
                return '';
        }
    }, [dayFilter, marketChangesListData]);

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
                                        <div className='float-right'>
                                            <p className='text-base font-semibold text-gray-900'>Rp {Number(marketChange.latestPrice).toLocaleString('id')}</p>
                                            <div className='float-right'>
                                                <ChangesText changes={getChangesValue(marketChange)} />
                                            </div>
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

export default React.memo(MarketListTableMobile);
