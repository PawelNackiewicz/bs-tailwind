import React from 'react';
import Image from 'next/image'
import { Typography } from './Typography';


export const Place = () => {
    return (
        <div className='bg-gray-100  w-full flex flex-col items-center justify-center gap-2'>
            <div className='w-full flex flex-col items-center justify-center p-6 gap-2'>
                <Typography variant='h2'>umów się na wizytę</Typography>
                <div className='flex gap-1 items-center'>
                    <PhoneIcon />
                    <Typography variant='h2'>+ 48 123 321 123</Typography>
                </div>
            </div>
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


const PhoneIcon = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M21.0047 21.342C21.6329 20.8043 21.9962 20.02 22 19.1931V16.1795C22 15.3021 21.4281 14.5272 20.5898 14.2685L17.1131 13.1956C16.4856 13.002 15.8031 13.1287 15.2869 13.5346L13.8995 14.6258C13.0354 14.0205 12.2118 13.3319 11.4399 12.5601C10.6681 11.7882 9.97951 10.9646 9.37419 10.1005L10.4654 8.71309C10.8713 8.19694 10.998 7.5144 10.8044 6.88693L9.73153 3.41025C9.47281 2.57186 8.69786 2 7.82046 2H4.8069C3.98001 2.00381 3.19565 2.3671 2.65797 2.99532C2.21357 3.51456 1.96206 4.17697 2.00467 4.85909C2.27326 9.15824 4.04992 13.3803 7.33479 16.6652C10.6197 19.9501 14.8418 21.7267 19.1409 21.9953C19.823 22.0379 20.4854 21.7864 21.0047 21.342ZM7.80217 8.86404C7.257 9.55719 7.23015 10.5256 7.73607 11.2479C8.40782 12.2069 9.17126 13.1198 10.0257 13.9743C10.8802 14.8287 11.7931 15.5922 12.7521 16.2639C13.4744 16.7698 14.4428 16.743 15.136 16.1978L16.5233 15.1067L20 16.1795V19.1872C19.9979 19.4317 19.8901 19.6635 19.7042 19.8226C19.5325 19.9695 19.3695 20.0057 19.2656 19.9992C15.434 19.7598 11.6762 18.1782 8.749 15.251C5.82181 12.3238 4.24016 8.56596 4.00078 4.73438C3.99429 4.63048 4.03046 4.46752 4.17743 4.2958C4.33653 4.10991 4.5683 4.00206 4.81287 4H7.82046L8.89334 7.47667L7.80217 8.86404Z" fill="black" />
        </svg>
    )
}