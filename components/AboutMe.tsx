import Link from 'next/link';
import { BeautiqImage } from './BeautiqImage';
import { Typography } from './Typography';

export const AboutMe = () => {
  return (
    <div className='flex flex-col items-center justify-between bg-gray-100 py-20'>
      <div className='flex flex-col justify-center items-center w-1/2 scroll-mb-10'>
        <Typography variant='h3'>trener stylizacji rzęs</Typography>
        <Typography variant='h2'>o mnie</Typography>
        <article className='text-center flex flex-col gap-3'>
          <Typography variant='body'>
            Nazywam się Natalia Golomb i jestem właścicielką BEAUTIQ Studio w Ozimku.
          </Typography>
          <Typography variant='body'>
            To co sprawia mi największą satysfakcję na codzień - są uśmiechy moich klientek - kiedy
            patrzą na siebie i widzą efekty mojej pracy. Co może być większą nagrodą za moją pracę?
          </Typography>
          <Typography variant='body'>
            Jestem kosmetologiem, stylistką rzęs i brwi, instruktorem oraz linergistką.
          </Typography>
        </article>
      </div>
      <BeautiqImage imageSrc='/img/main/Natalia-Golomb.jpg' alt='Natalia-Golomb' />
    </div>
  );
}