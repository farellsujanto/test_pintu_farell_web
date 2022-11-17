import React from 'react';

interface HomeTimeDropdownProps {
    dayFilter: string;
    onDayFilterChange: (value: string) => void;
}

const HomeTimeDropdown = ({ onDayFilterChange, dayFilter }: HomeTimeDropdownProps) => {
    return (
        <select
            className='p-1 text-gray-900 bg-white border rounded-md shadow-sm outline-none'
            value={dayFilter}
            onChange={(e) => {
                onDayFilterChange(e.target.value);
            }} >
            <option selected value='day'>24 Jam</option>
            <option value='week'>1 MGG</option>
            <option value='month'>1 BLN</option>
            <option value='year'>1 THN</option>
        </select>
    );
}

export default React.memo(HomeTimeDropdown);
