import { useNumberOfVillas } from '../../hooks/useNumberOfVillas';
import { useStays } from '../../hooks/useStays';
import { HiOutlineCalendarDays, HiOutlineChartBar } from 'react-icons/hi2';
import Loader from '../../ui/Loader';
import SummaryTemplate from '../../ui/SummaryTemplate';

export function CurrentlyBookedSummary() {
  const { stays } = useStays();
  const { villasNumber } = useNumberOfVillas();

  if (!stays || !villasNumber) return <Loader />;

  const currentDate = new Date();

  const currentlyBooked = stays.filter((stay) => {
    const arrivalDate = new Date(stay.arrivalDate);
    const departureDate = new Date(stay.departureDate);
    return arrivalDate <= currentDate && currentDate <= departureDate;
  });

  const numberOfBooking = currentlyBooked.length;
  const numberOfVillas = villasNumber.length;

  const occupacyRate = (numberOfBooking / numberOfVillas) * 100;

  return (
    <>
      <SummaryTemplate data={numberOfBooking} title='Currently booked'>
        <HiOutlineCalendarDays className='text-[70px] text-[#30668f]' />
      </SummaryTemplate>
      <SummaryTemplate data={occupacyRate} title='Occupacy rate' percent='%'>
        <HiOutlineChartBar className='text-[70px] text-[#308f7c] ' />
      </SummaryTemplate>
    </>
  );
}
