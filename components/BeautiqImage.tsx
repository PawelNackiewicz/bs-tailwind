import React from 'react';
import Image from 'next/image'

interface BeautiqImageProps {
    imageSrc: string,
    alt: string
    width?: number,
    height?: number
}

export const BeautiqImage = ({imageSrc, alt, width = 200, height = 300}: BeautiqImageProps) => {
    return (
        <div className='relative'>
             <Image className='rounded-t-full z-10' alt={alt} src={imageSrc} layout='intrinsic' quality={100} width={width} height={height} />
             <div className='rounded-t-full absolute border-2 p-4 border-gray-300  h-72 w-52 -top-2 left-4'>
                <div className='bg-gray-300 rounded-t-full h-64 w-44'></div>
             </div>
        </div>
    )
};