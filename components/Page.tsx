import React, { FC, ReactNode } from 'react';
import { Footer } from './Footer';
import { Navigation } from './Navigation';

interface PageProps {
    children: ReactNode
}

export const Page: FC<PageProps> = ({children}) => {
    return (
        <div className='flex flex-col w-full h-full min-h-screen'>
            <Navigation />
            <div className='flex-grow p-4 max-w-6xl m-auto'>
                {children}
            </div>
            <Footer />
        </div>
    )
};