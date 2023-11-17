import { HiArrowDown, HiArrowUp } from 'react-icons/hi2';
import Booking from '../features/bookings/Booking';
import { useBookings } from '../hooks/useBookings';
import Loader from '../ui/Loader';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useVillas } from '../hooks/useVillas';

// ... (your imports)

// ... (your imports)

function Bookings() {
  const { isLoading, bookings } = useBookings();
  const { villas } = useVillas();

  const [expandedVilla, setExpandedVilla] = useState(null);

  if (isLoading || bookings === undefined) {
    return <Loader />;
  }

  if (!bookings) return <Loader />;
  if (!villas) return <Loader />;

  const groupedBookings = {};

  bookings.forEach((booking) => {
    const villaName = booking.Villas.name;
    if (!groupedBookings[villaName]) {
      groupedBookings[villaName] = [];
    }
    groupedBookings[villaName].push(booking);
  });

  Object.keys(groupedBookings).forEach((villaName) => {
    groupedBookings[villaName].sort((a, b) => {
      return new Date(b.arrivalDate) - new Date(a.arrivalDate);
    });
  });

  return (
    <section className='flex gap-5 dark:bg-dark-600 bg-stone-100 min-h-screen items-center  flex-col p-20'>
      {villas.map((villa) => (
        <div
          key={villa.name}
          className='bg-neutral-200 dark:bg-neutral-600 border border-neutral-400 dark:border-neutral-200 h-min p-4 w-4/5 rounded-2xl'>
          <div className='flex flex-col items-center justify-center '>
            <h2 className='text-neutral-600 dark:text-neutral-200 text-3xl py-2 italic  cursor-pointer'>
              Villa: {villa.name}
            </h2>
            <button
              onClick={() => setExpandedVilla(expandedVilla === villa.name ? null : villa.name)}
              className='flex items-center gap-2 text-neutral-600 dark:text-neutral-300 cursor-pointer hover:scale-105 duration-300 underline '>
              {expandedVilla !== villa.name && 'Unfold bookings for this villa'}
              {expandedVilla !== villa.name && <HiArrowDown />}
              {expandedVilla === villa.name && 'Fold bookings for this villa'}
              {expandedVilla === villa.name && <HiArrowUp />}
            </button>
          </div>

          {expandedVilla === villa.name && (
            <div>
              <div className='flex gap-5 justify-center italic text-neutral-600 dark:text-neutral-200 border-b border-b-neutral-400 dark:border-b-neutral-200 my-3 text-center '>
                <p className='w-1/5'>Guest:</p>
                <p className='w-1/5'>Arrival date:</p>
                <p className='w-1/5'>Departure date:</p>
              </div>

              {groupedBookings[villa.name]?.length === 0 && (
                <p className='text-neutral-600 dark:text-neutral-200 text-center my-3'>No bookings for this villa.</p>
              )}

              {groupedBookings[villa.name]?.map((booking) => (
                <Booking booking={booking} key={booking.id} />
              ))}

              <div className='flex justify-end pt-5'>
                <NavLink to={`newbooking/${villa.name}`} className='buttonStyle '>
                  Book a new guest for this villa
                </NavLink>
              </div>
            </div>
          )}
        </div>
      ))}
    </section>
  );
}

export default Bookings;
