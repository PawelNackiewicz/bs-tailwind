import React from 'react';
import Image from 'next/image'


export const Place = () => {
    return (
        <div className='w-full flex justify-center gap-2'>
            <Image alt="logo" src="/img/main/logo.jpg" width={400} height={550} />
            <Image alt="logo" src="/img/main/windows.jpg" width={400} height={550} />
            <GoogleMap />
        </div>
    )
};

const GoogleMap = () => {
    return (
        <iframe
            title="googleMap"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1264.0815897972802!2d18.217179!3d50.679796!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd95450835cbf065d!2sBeautiQ%20Studio%20-%20Natalia%20Golomb!5e0!3m2!1spl!2spl!4v1591524463363!5m2!1spl!2spl"
            width="400"
            height="550"
            frameBorder="0"
            style={{ border: 0 }}
            aria-hidden="false"
        />
    )
}