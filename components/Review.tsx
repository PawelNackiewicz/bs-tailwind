import React from 'react';
import { Typography } from './Typography';
import Image from 'next/image'
interface ReviewProps {}

export const Reviews = () => {
    return (
        <div className='flex flex-col items-center justify-between p-20'>
            <Typography variant='h2'>opinie</Typography>
            <div className='mt-10 flex gap-3 flex-wrap'>
                {reviews.map(({id, author, img, text}) => <Review id={id} author={author} img={img} text={text} key={id} />)}
            </div>
        </div>
    )
};
interface ReviewProps {
    id: string,
    img: string,
    author: string,
    text: string
}

const Review = ({img, author, text}: ReviewProps) => {
    return (
        <div className='max-w-xs flex flex-col gap-3 items-center justify-center'>
            <Image className='rounded-full z-10' alt={author} src={img} layout='intrinsic' quality={100} width={60} height={60} />
            <Typography variant='body-bold'>{author}</Typography>
            <Typography variant='body'>{text}</Typography>
        </div>
    )
}

const reviews = [
    {
    id: '1',
    img: '/img/main/Pati.jpeg',
    author: 'Patrycja',
    text: 'jakiś bardzo dzługi i miły tekst o profesjonalizmie Natali, bardzo dobrzych usługach i fantastycznej atmosferze w salonie'
},
    {
    id: '2',
    img: '/img/main/Pati.jpeg',
    author: 'Patrycja',
    text: 'jakiś bardzo dzługi i miły tekst o profesjonalizmie Natali, bardzo dobrzych usługach i fantastycznej atmosferze w salonie'
},
    {
    id: '3',
    img: '/img/main/Pati.jpeg',
    author: 'Patrycja',
    text: 'jakiś bardzo dzługi i miły tekst o profesjonalizmie Natali, bardzo dobrzych usługach i fantastycznej atmosferze w salonie'
},
]