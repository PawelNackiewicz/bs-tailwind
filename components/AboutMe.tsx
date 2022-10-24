import Link from 'next/link';
import { BeautiqImage } from './BeautiqImage';

export const AboutMe = () => {
  return (
    <div className='flex flex-col items-center justify-between bg-gray-100 py-20'>
      <div className='flex flex-col justify-center items-center w-1/2 scroll-mb-10'>
        <p>trener stylizacji rzęs</p>
        <h2 className='text-lg my-6'>o mnie</h2>
        <article className='text-center flex flex-col gap-3'>
          <p>
            Nazywam się Natalia Golomb i jestem właścicielką BEAUTIQ Studio w Ozimku.
          </p>
          <p>
            To co sprawia mi największą satysfakcję na codzień - są uśmiechy moich klientek - kiedy
            patrzą na siebie i widzą efekty mojej pracy. Co może być większą nagrodą za moją pracę?
          </p>
          <p>
            Jestem kosmetologiem, stylistką rzęs i brwi, instruktorem oraz linergistką.
          </p>
        </article>
      </div>
      <BeautiqImage imageSrc='/img/main/Natalia-Golomb.jpg' alt='Natalia-Golomb' />
    </div>
  );
}