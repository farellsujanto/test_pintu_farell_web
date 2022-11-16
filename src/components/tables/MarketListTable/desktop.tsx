import React from 'react';
import SVG from 'react-inlinesvg';
import { MarketChanges } from '../../../models/marketChangesModel';
import ChangesText from './components/ChangesText';

interface MarketListTableDesktopProps {
    marketChangesListData: MarketChanges[];
}

const MarketListTableDesktop = ({ marketChangesListData }: MarketListTableDesktopProps) => {

    return (
        <div className='border min-w-full divide-gray-200 rounded-lg'>
            <table className='min-w-full divide-y divide-gray-200'>
                <thead >
                    <tr className='font-semibold text-gray-900 uppercase'>
                        <th className='pl-[75px] p-5 text-base text-gray-400 text-left'>CRYPTO</th>
                        <th className='p-5 text-base text-gray-400 text-left'>HARGA</th>
                        <th className='p-5 text-base text-gray-400 text-center'>24 JAM</th>
                        <th className='p-5 text-base text-gray-400 text-center'>1 MGG</th>
                        <th className='p-5 text-base text-gray-400 text-center'>1 BLN</th>
                        <th className='p-5 text-base text-gray-400 text-center'>1 THN</th>
                    </tr>
                </thead>
                <tbody className='divide-y divide-gray-200'>
                    <>
                        {marketChangesListData.map((marketChange) => {
                            return (
                                <tr>
                                    <td className='p-5'>
                                        <div className='flex flex-row'>
                                            <SVG src={marketChange.logo} color={marketChange.color} className='w-8 h-8 self-center' />

                                            <div className='ml-6 flex flex-row flex-1 items-center'>
                                                <p className='text-base font-semibold text-gray-900 flex-1'>{marketChange.name}</p>
                                                <p className='text-base flex-none text-gray-400'>{marketChange.currencySymbol}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='p-5 text-left'>
                                        <div className=''>
                                            <p className='text-base font-semibold text-gray-900'>Rp {Number(marketChange.latestPrice).toLocaleString('id')}</p>
                                        </div>
                                    </td>

                                    <td className='p-5 text-center float-none'>
                                            <ChangesText changes={marketChange.day} />
                                    </td>
                                    <td className='p-5 text-center'>
                                        <div className=''>
                                            <ChangesText changes={marketChange.week} />
                                        </div>
                                    </td>
                                    <td className='p-5 text-center'>
                                        <div className=''>
                                            <ChangesText changes={marketChange.month} />
                                        </div>
                                    </td>
                                    <td className='p-5 items-center'>
                                        <div className=''>
                                            <ChangesText changes={marketChange.year} />
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

export default React.memo(MarketListTableDesktop);
