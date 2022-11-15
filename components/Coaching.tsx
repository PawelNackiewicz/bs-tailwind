import { BeautiqImage } from './BeautiqImage';
import { Typography } from './Typography';

export const Coaching = () => {
  return (
    <div className='flex flex-col items-center justify-between'>
      <div className='flex flex-col justify-center items-center p-10'>
        <Typography variant='h3'>instruktor Rarity Academy</Typography>
        <Typography variant='h2'>szkolenia</Typography>
        <article className='text-center flex flex-col gap-1'>
          <Typography variant='body'>Jak zostać stylistką rzęs?</Typography>
          <Typography variant='body'>Jak nauczyć się przedłużać rzęsy?</Typography>
          <Typography variant='body'>Chciałabyś zdobyć nowy zawód?</Typography>
          <Typography variant='body'>Szukasz pracy dodatkowej?</Typography>
          <Typography variant='body'>
            A może już jesteś w branży beauty i chciałabyś zdobyć nowe kwalifikacje?
          </Typography>
          <Typography variant='body'>
            A może sama jesteś klientką i chciałabyś spróbować być po tej drugiej stronie?
          </Typography>
          <Typography variant='body'>
            Jakikolwiek jest powód tego, że tu zaglądasz... Jeżeli szukasz profesjonalnego oraz
            efektywnego szkolenia w województwie Opolskim to jesteś w najlepszym miejscu !
          </Typography>
          <Typography variant='body'>
            Prowadzę szkolenia w wojewódzctwie Opolskim z przedłużania rzęs. Szkolenia te prowadzę w ramach współpracy z firmą Rarity Academy.
          </Typography>
        </article>
      </div>
      <div className='flex justify-center items-center w-1/2'>
        <BeautiqImage alt="szkolenia" imageSrc="/img/main/szkolenia-opolskie.png" />
      </div>
    </div>
  );
}