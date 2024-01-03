import { useStays } from '../../hooks/useStays';
import Loader from '../../ui/Loader';
import SummaryTemplate from '../../ui/SummaryTemplate';
import { HiOutlineUsers } from 'react-icons/hi2';

export function BookingsSummary() {
  const { stays } = useStays();

  if (!stays) return <Loader />;

  // const currentDate = new Date(2023, 10, 17);

  const dateThirtyDaysAgo = new Date(2023, 9, 17);

  const last30DaysBookings = stays.filter((stay) => {
    const createdBooking = new Date(stay.created_at);
    return createdBooking >= dateThirtyDaysAgo;
  });

  const numberOfBooking = last30DaysBookings.length;

  return (
    <SummaryTemplate data={numberOfBooking} title='Bookings'>
      <HiOutlineUsers className='text-[70px] text-[#f8a58e] ' />
    </SummaryTemplate>
  );
}
