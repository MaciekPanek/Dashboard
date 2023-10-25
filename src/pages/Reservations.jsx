import Booking from "../features/bookings/Booking";
import { useBookings } from "../hooks/useBookings";
import Loader from "../ui/Loader";

function Reservations() {
  const { isLoading, error, bookings } = useBookings();

  if (isLoading || bookings === undefined) {
    return <Loader />;
  }

  const groupedBookings = {};
  bookings.forEach((booking) => {
    const villaName = booking.Villas.name;
    if (!groupedBookings[villaName]) {
      groupedBookings[villaName] = [];
    }
    groupedBookings[villaName].push(booking);
  });

  return (
    <section className="grid grid-cols-fluid gap-10  bg-stone-100 min-h-screen auto-rows-max p-20">
      {Object.keys(groupedBookings).map((villaName) => (
        <div key={villaName}>
          <h2>Villa: {villaName}</h2>
          {groupedBookings[villaName].map((booking) => (
            <Booking booking={booking} key={booking.id} />
          ))}
        </div>
      ))}
    </section>
  );
}

export default Reservations;
