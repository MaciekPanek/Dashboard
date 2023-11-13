import { useNumberOfVillas } from '../../hooks/useNumberOfVillas';
import { useStays } from '../../hooks/useStays';
import Loader from '../../ui/Loader';

export function CurrentlyBookedSummary() {
  const { stays } = useStays();
  const { villasNumber } = useNumberOfVillas();

  if (!stays) return <Loader />;

  const currentDate = new Date();

  const currentlyBooked = stays.filter((stay) => {
    const arrivalDate = new Date(stay.arrivalDate);
    const departureDate = new Date(stay.departureDate);
    return arrivalDate <= currentDate && currentDate <= departureDate;
  });

  const numberOfBooking = currentlyBooked.length;
  const numberOfVillas = villasNumber.length;

  const occupacyRate = (numberOfBooking / numberOfVillas) * 100;

  console.log(occupacyRate);

  return (
    <>
      <div
        className='w-1/4 rounded-xl  border
         border-neutral-400 bg-neutral-200'>
        <h2 className=' px-4 py-2 italic text-neutral-600 '>Currently booked</h2>
        <p className='px-4 py-2 text-neutral-800'>{numberOfBooking}</p>
      </div>
      <div
        className='w-1/4 rounded-xl  border
       border-neutral-400 bg-neutral-200'>
        <h2 className=' px-4 py-2 italic text-neutral-600 '>Occupacy rate</h2>
        <p className='px-4 py-2 text-neutral-800'>{occupacyRate}%</p>
      </div>
    </>
  );
}
