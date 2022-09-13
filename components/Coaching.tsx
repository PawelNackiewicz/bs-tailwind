import Image from 'next/image';
import Link from 'next/link';

export const Coaching = () => {
  return (
    <div className='flex justify-between gap-2 my-10'>
      <div className='flex flex-col justify-center items-center w-1/2'>
        <h1 className='font-bold text-xl mb-6 uppercase'>szkolenia</h1>
        <article className='text-center flex flex-col gap-3'>
          <p><strong>Jak zostać stylistką rzęs?</strong> </p>
          <p><strong>Jak nauczyć się przedłużać rzęsy?</strong></p>
          <p>Chciałabyś zdobyć nowy zawód?</p>
          <p>Szukasz pracy dodatkowej?</p>
          <p>
            A może już jesteś w branży beauty i chciałabyś zdobyć nowe kwalifikacje?
          </p>
          <p>
            A może sama jesteś klientką i chciałabyś spróbować być po tej drugiej stronie?
          </p>
          <p>
            Jakikolwiek jest powód tego, że tu zaglądasz... Jeżeli szukasz profesjonalnego oraz
            efektywnego szkolenia w województwie Opolskim to jesteś w najlepszym miejscu !
          </p>
          <p>
            Prowadzę <strong> szkolenia w wojewódzctwie Opolskim z przedłużania rzęs</strong>. Szkolenia te prowadzę w ramach współpracy z firmą Rarity Academy. 
          </p>
        </article>
        <Link href="/szkolenia" passHref>
          <p>czytaj więcej</p>
        </Link>
      </div>
      <Image alt="szkolenia" src="/img/main/szkolenia-opolskie.png" width="510" height="765" />
    </div>
  );
}