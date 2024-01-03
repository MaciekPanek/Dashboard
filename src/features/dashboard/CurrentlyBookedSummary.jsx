import { useNumberOfVillas } from '../../hooks/useNumberOfVillas';
import { useStays } from '../../hooks/useStays';
import { HiOutlineCalendarDays, HiOutlineChartBar } from 'react-icons/hi2';
import Loader from '../../ui/Loader';
import SummaryTemplate from '../../ui/SummaryTemplate';

export function CurrentlyBookedSummary() {
  const { stays } = useStays();
  const { villasNumber } = useNumberOfVillas();

  if (!stays || !villasNumber) return <Loader />;

  const currentDate = new Date(2023, 10, 17);

  const currentlyBooked = stays.filter((stay) => {
    const arrivalDate = new Date(stay.arrivalDate);
    const departureDate = new Date(stay.departureDate);
    return arrivalDate <= currentDate && currentDate <= departureDate;
  });

  const numberOfBooking = currentlyBooked.length;
  const numberOfVillas = villasNumber.length;

  const occupancyRate = ((numberOfBooking / numberOfVillas) * 100).toFixed(1);
  const occupancyRateNumber = parseFloat(occupancyRate);

  return (
    <>
      <SummaryTemplate data={numberOfBooking} title='Currently booked'>
        <HiOutlineCalendarDays className='text-[70px] text-[#30668f]' />
      </SummaryTemplate>
      <SummaryTemplate
        data={occupancyRateNumber}
        title='Occupacy rate'
        percent='%'>
        <HiOutlineChartBar className='text-[70px] text-[#308f7c] ' />
      </SummaryTemplate>
    </>
  );
}
