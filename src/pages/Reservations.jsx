import Booking from "../features/bookings/Booking";
import { useBookings } from "../hooks/useBookings";
import Loader from "../ui/Loader";

function Reservations() {
  const { isLoading, error, bookings } = useBookings();

  if (isLoading || bookings === undefined) {
    return <Loader />;
  }

  return (
    <section className=" bg-stone-100 h-screen ">
      {bookings.map((booking) => (
        <Booking booking={booking} key={booking.id} />
      ))}
    </section>
  );
}

export default Reservations;
