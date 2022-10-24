import React from 'react';
import { BeautiqImage } from './BeautiqImage';

export const Offer = () => {
    return (
        <div className='flex flex-col items-center justify-between bg-gray-100 p-20'>
            <h4 className=''>oferta</h4>
            <div className='flex gap-10'>
                <BeautiqImage imageSrc='/img/main/Natalia-Golomb.jpg' alt='Natalia-Golomb' />
            </div>
        </div>
    )
};