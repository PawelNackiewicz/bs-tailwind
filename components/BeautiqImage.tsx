import React from 'react';
import Image from 'next/image'

interface BeautiqImageProps {
    imageSrc: string,
    alt: string
    width?: number,
    height?: number,
    text?: string
}

export const BeautiqImage = ({ imageSrc, alt, width = 200, height = 300, text }: BeautiqImageProps) => {
    return (
        <div className='relative'>
            <div className='relative'>
                <Image className='rounded-t-full z-10' alt={alt} src={imageSrc} layout='intrinsic' quality={100} width={width} height={height} />
                {
                    text &&
                    <div className='bg-gray-300 text-center bg-opacity-50 absolute w-full bottom-0 z-10'>
                        <h3 className='uppercase font-Glory text-xl p-1'>{text}</h3>
                    </div>
                }
            </div>
            <div className='rounded-t-full absolute border-2 p-4 border-gray-300  h-72 w-52 -top-2 left-4'>
                <div className='bg-gray-300 rounded-t-full h-64 w-44'></div>
            </div>
        </div>
    )
};