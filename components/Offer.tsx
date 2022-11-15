import React from 'react';
import { BeautiqImage } from './BeautiqImage';
import { Typography } from './Typography';

export const Offer = () => {
    return (
        <div className='flex flex-col items-center justify-between bg-gray-100 p-20'>
            <Typography variant='h2'>oferta</Typography>
            <div className='flex gap-10'>
                <BeautiqImage imageSrc='/img/main/Natalia-Golomb.jpg' alt='Natalia-Golomb' text='Makijaz permamentny'/>
                <BeautiqImage imageSrc='/img/main/Natalia-Golomb.jpg' alt='Natalia-Golomb' text='Przedluzanie rzes'/>
                <BeautiqImage imageSrc='/img/main/Natalia-Golomb.jpg' alt='Natalia-Golomb' text='Brwi'/>
            </div>
        </div>
    )
};