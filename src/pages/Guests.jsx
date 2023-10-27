import Guest from "../features/guests/Guest";
import { useBookings } from "../hooks/useBookings";

function Guests() {
  const { isLoading, error, bookings: guests } = useBookings();

  return (
    <section className="bg-stone-100 h-screen">
      {guests ? (
        guests.map((guest) => <Guest key={guest.id} guest={guest} />)
      ) : // Render a loading indicator or an error message here
      isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>Error loading guests.</div>
      )}
    </section>
  );
}

export default Guests;
