import React from 'react';
import CaretDownIcon from '../../../../../public/icons/CaretDownIcon';
import CaretUpIcon from '../../../../../public/icons/CaretUpIcon';

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

export default React.memo(ChangesText);
