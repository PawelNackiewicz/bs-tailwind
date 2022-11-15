import React from 'react';
import { BeautiqImage } from './BeautiqImage';
import { Typography } from './Typography';

export const Intro = () => {
    return (
            <div className='bg-gray-100 flex flex-col items-center gap-8 py-20'>
                <p className='text-7xl font-Petemoss'>Piękno i chillout</p>
                <Typography variant='body'>przedłużanie rzęs • makijaż permamentny • stylizacja brwi</Typography>
                <BeautiqImage alt='beautiq studio' imageSrc='/img/main/intro.jpg' />
            </div>
    )
};