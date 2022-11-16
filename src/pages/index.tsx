import React from 'react';
import Head from 'next/head'
import { dehydrate } from '@tanstack/react-query';
import SearchButton from '../components/buttons/SearchButton';
import HomeFilterList from '../components/lists/HomeFilterList';
import MarketListTable from '../components/tables/MarketListTable';
import { defaultQueryClient } from '../configs/queryClient';
import { preFetchPriceChangesQuery, preFetchSupportedCurrenciesQuery } from '../queries/marketQuery/marketQueryHooks'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Harga Crypto Hari Ini (IDR) | Pintu</title>
            </Head>

            <section className='p-4 md:p-0 mb-8 mt-8 max-w-[1280px] m-auto'>
                <div className='flex flex-row items-center ju'>
                    <div className='flex-1'>
                        <h1 className='text-xl md:text-2xl font-bold'>Harga Crypto dalam Rupiah Hari Ini</h1>
                    </div>
                    <div className='flex-none text-right'>
                        <SearchButton />
                    </div>
                </div>
            </section>

            <section className='p-4 md:p-0 flex overflow-auto mb-4 max-w-[1280px] m-auto'>
                <HomeFilterList />
            </section>

            <section className='max-w-[1280px] m-auto'>
                <MarketListTable />
            </section>
        </div>
    );
}

export const getServerSideProps = async () => {

    await preFetchPriceChangesQuery();
    await preFetchSupportedCurrenciesQuery();

    return {
        props: {
            dehydratedState: dehydrate(defaultQueryClient)
        },
    }
}