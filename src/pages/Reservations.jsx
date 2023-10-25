import Booking from "../features/bookings/Booking";
import { useBookings } from "../hooks/useBookings";
import Loader from "../ui/Loader";

function Reservations() {
  // Fetch bookings data and handle loading and error states
  const { isLoading, error, bookings } = useBookings();

  if (isLoading || bookings === undefined) {
    // If data is still loading or unavailable, display a loading spinner
    return <Loader />;
  }

  // Initialize an object to group bookings by villa name
  const groupedBookings = {};

  // Iterate through each booking and group them by villa name
  bookings.forEach((booking) => {
    const villaName = booking.Villas.name;
    if (!groupedBookings[villaName]) {
      // If the villa name is not already in groupedBookings, create an array for it
      groupedBookings[villaName] = [];
    }
    // Add the booking to the corresponding villa's array
    groupedBookings[villaName].push(booking);
  });

  // Render the grouped bookings
  return (
    <section className="grid grid-cols-fluid gap-10 bg-stone-100 min-h-screen auto-rows-max p-20">
      {Object.keys(groupedBookings).map((villaName) => (
        <div key={villaName}>
          {/* Display a heading with the villa name for each group of bookings */}
          <h2>Villa: {villaName}</h2>
          {groupedBookings[villaName].map((booking) => (
            // Render individual bookings for the current villa
            <Booking booking={booking} key={booking.id} />
          ))}
        </div>
      ))}
    </section>
  );
}

export default Reservations;
