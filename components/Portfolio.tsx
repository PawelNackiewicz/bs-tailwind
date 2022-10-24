import React from 'react';
import Image from 'next/image'

export const Portfolio = () => {
    return (
        <div className='flex flex-col items-center py-20 px-6'>
            <h4 className='font-Glory text-3xl'>Portfolio</h4>
            <div className='flex gap-4 my-10'>
                <Image alt='portfolio1' src='/img/main/portfolio_1.jpg' layout='intrinsic' quality={100} width={300} height={400} />
                <Image alt='portfolio2' src='/img/main/portfolio_2.jpg' layout='intrinsic' quality={100} width={300} height={400} />
            </div>
            <div className='flex justify-center gap-20'>
                <ArrowLeft/>
                <ArrowRight/>
            </div>
        </div>
    )
};

const ArrowLeft = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.00291 15.5858L5.41714 13.0001H21.0029C21.5552 13.0001 22.0029 12.5523 22.0029 12.0001C22.0029 11.4478 21.5552 11.0001 21.0029 11.0001H5.41714L8.00291 8.41426C8.39344 8.02374 8.39344 7.39057 8.00291 7.00005C7.61239 6.60952 6.97922 6.60952 6.5887 7.00005L2.29582 11.2929C1.9053 11.6835 1.9053 12.3166 2.29582 12.7072L6.5887 17C6.97922 17.3906 7.61239 17.3906 8.00291 17C8.39344 16.6095 8.39344 15.9764 8.00291 15.5858Z" fill="black" />
        </svg>
    )
}

const ArrowRight = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.0029 8.41426L18.5887 11H3.00293C2.96841 11 2.9343 11.0018 2.90069 11.0052C2.39643 11.0564 2.00293 11.4823 2.00293 12C2.00293 12.5523 2.45064 13 3.00293 13H18.5887L16.0029 15.5858C15.6124 15.9763 15.6124 16.6095 16.0029 17C16.3935 17.3906 17.0266 17.3906 17.4172 17L21.71 12.7071C22.1006 12.3166 22.1006 11.6834 21.71 11.2929L17.4172 7.00005C17.0266 6.60952 16.3935 6.60952 16.0029 7.00005C15.9541 7.04886 15.9114 7.10147 15.8748 7.15692C15.6185 7.54507 15.6612 8.07255 16.0029 8.41426Z" fill="black" />
        </svg>
    )
}