import React from 'react';
import { IconProps } from './IconPropsInterface';

const CexIcon = ({ className }: IconProps) => {
    return (
        <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M6.1018 16.9814C5.02785 16.9814 4.45387 15.7165 5.16108 14.9083L10.6829 8.59762C11.3801 7.80079 12.6197 7.80079 13.3169 8.59762L18.8388 14.9083C19.5459 15.7165 18.972 16.9814 17.898 16.9814H6.1018Z" />
        </svg>
    );
}

export default React.memo(CexIcon);
