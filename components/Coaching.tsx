import { BeautiqImage } from './BeautiqImage';

export const Coaching = () => {
  return (
    <div className='flex flex-col items-center justify-between'>
      <div className='flex flex-col justify-center items-center p-10'>
        <p>instruktor Rarity Academy</p>
        <h1 className='text-lg my-6'>szkolenia</h1>
        <article className='text-center flex flex-col gap-1'>
          <p>Jak zostać stylistką rzęs?</p>
          <p>Jak nauczyć się przedłużać rzęsy?</p>
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
            Prowadzę szkolenia w wojewódzctwie Opolskim z przedłużania rzęs. Szkolenia te prowadzę w ramach współpracy z firmą Rarity Academy.
          </p>
        </article>
      </div>
      <div className='flex justify-center items-center w-1/2'>
        <BeautiqImage alt="szkolenia" imageSrc="/img/main/szkolenia-opolskie.png" />
      </div>
    </div>
  );
}