import React from 'react';

type TypographyVariants = 'h1' | 'h2' | 'h3' | 'body' | 'body-bold'

interface TypographyProps {
    variant: TypographyVariants
    children: React.ReactNode
}

export const Typography = ({variant, children}: TypographyProps) => {
    if (variant === 'h1') return <h1>{children}</h1>
    if (variant === 'h2') return <h2 className='text-3xl font-Glory'>{children}</h2>
    if (variant === 'h3') return <h3 className='font-Glory'>{children}</h3>
    if (variant === 'body') return <p className='text-sm font-Glory text-center'>{children}</p>
    if (variant === 'body-bold') return <p className='font-Glory text-center font-bold'>{children}</p>

    return <p>{children}</p>
};