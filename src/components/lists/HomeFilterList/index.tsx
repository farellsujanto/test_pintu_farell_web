import React from 'react';
import CexIcon from '../../../public/icons/CexIcon';
import DeFiIcon from '../../../public/icons/DeFiIcon';
import DexIcon from '../../../public/icons/DexIcon';
import GamingIcon from '../../../public/icons/GamingIcon';
import InfrastructureIcon from '../../../public/icons/InfrastructureIcon';
import LayerOneIcon from '../../../public/icons/LayerOneIcon';
import LayerTwoIcon from '../../../public/icons/LayerTwoIcon';
import LendingIcon from '../../../public/icons/LendingIcon';
import NewIcon from '../../../public/icons/NewIcon';
import ScaleIcon from '../../../public/icons/ScaleIcon';

const SHOWN_FILTERS = [
    {
        label: 'Terbaru',
        Icon: NewIcon,
    },
    {
        label: 'DeFi',
        Icon: DeFiIcon,
    },
    {
        label: 'NFT/Gaming',
        Icon: GamingIcon,
    },
    {
        label: 'CEX',
        Icon: CexIcon,
    },
    {
        label: 'DEX',
        Icon: DexIcon,
    },
    {
        label: 'Layer-1',
        Icon: LayerOneIcon,
    },
    {
        label: 'Infrastructure',
        Icon: InfrastructureIcon,
    },
    {
        label: 'Lending',
        Icon: LendingIcon,
    },
    {
        label: 'Layer-2',
        Icon: LayerTwoIcon,
    },
    {
        label: 'Ekosistem Stablecoin',
        Icon: ScaleIcon,
    },
];

const HomeFilterList = () => {
    return (
        <>
            {SHOWN_FILTERS.map((filter) => {
                return (
                    <button className=' py-2 px-2 text-center inline-flex items-center rounded-lg text-blue-600 mr-2 bg-blue-100 '>
                        <div className='w-6 h-6 mr-2'>
                            <filter.Icon />
                        </div>
                        <p className='text-xs font-semibold whitespace-nowrap'>{filter.label}</p>
                    </button>
                );
            })}
        </>
    );
}

export default React.memo(HomeFilterList);
