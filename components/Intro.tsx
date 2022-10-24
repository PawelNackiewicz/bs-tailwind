import React from 'react';
import { BeautiqImage } from './BeautiqImage';

export const Intro = () => {
    return (
            <div className='bg-gray-100 flex flex-col items-center gap-8 py-20'>
                <p className='text-7xl font-Petemoss'>Piękno i chillout</p>
                <p className='text-sm font-Glory'>przedłużanie rzęs • makijaż permamentny • stylizacja brwi</p>
                <BeautiqImage alt='beautiq studio' imageSrc='/img/main/intro.jpg' />
            </div>
    )
};