import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const AboutMe = () => {
  return (
    <div className='flex justify-between gap-2'>
      <Image alt="Natalia Golomb" src="/img/main/Natalia-Golomb.jpg" width="530" height="795" quality={100}/>
      <div className='flex flex-col justify-center items-center w-1/2'>
        <h2 className='font-bold text-xl mb-6 uppercase'>o mnie</h2>
        <article className='text-center flex flex-col gap-3'>
          <p>Cześć!</p>
          <p>
            Nazywam się <strong>Natalia Golomb</strong> i jestem właścicielką <strong>BEAUTIQ Studio</strong> w Ozimku.
          </p>
          <p>
            To co sprawia mi największą satysfakcję na codzień - są uśmiechy moich klientek - kiedy
            patrzą na siebie i widzą efekty mojej pracy. Co może być większą nagrodą za moją pracę?
          </p>
          <p>
            Jestem <strong>kosmetologiem, stylistką rzęs i brwi, instruktorem</strong> oraz <strong>linergistką</strong>.
          </p>
          &#10084;
        </article>
        <Link href="/Natalia-Golomb" passHref>
          <p>czytaj więcej</p>
        </Link>
      </div>
    </div>
  );
}