import React from 'react';
import SearchIcon from '../../../public/icons/SearchIcon';

const SearchButton = () => {
    return (
        <>
            <div className='hidden md:block'>
                <button className='bg-gray-200 py-2 px-3 rounded-lg text-center inline-flex items-center w-96'>
                    <SearchIcon className='w-6 h-6 fill-gray-400' />
                    <p className='text-gray-400 ml-2'>Cari aset di Pintu...</p>
                </button>
            </div>

            <div className='md:hidden'>
                <button className='py-1 px-2'>
                    <SearchIcon className='w-8 h-8 fill-gray-400' />
                </button>
            </div>

        </>
    );
}

export default React.memo(SearchButton);
