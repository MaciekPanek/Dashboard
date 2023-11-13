import { useStays } from '../../hooks/useStays';
import Loader from '../../ui/Loader';

export function BookingsSummary() {
  const { stays } = useStays();

  if (!stays) return <Loader />;

  const currentDate = new Date();

  const dateThirtyDaysAgo = new Date().setDate(currentDate.getDate() - 30);

  const last30DaysBookings = stays.filter((stay) => {
    const createdBooking = new Date(stay.created_at);
    return createdBooking >= dateThirtyDaysAgo;
  });

  const numberOfBooking = last30DaysBookings.length;

  return (
    <div
      className='w-1/4 rounded-xl  border
         border-neutral-400 bg-neutral-200'>
      <h2 className=' px-4 py-2 italic text-neutral-600 '>Bookings</h2>
      <p className='px-4 py-2 text-neutral-800'>{numberOfBooking}</p>
    </div>
  );
}
