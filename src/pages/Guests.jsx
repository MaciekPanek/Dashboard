import Guest from "../features/guests/Guest";
import { useBookings } from "../hooks/useBookings";
import Loader from "../ui/Loader";

function Guests() {
  const { isLoading, error, bookings: guests } = useBookings();

  if (!guests || isLoading) return <Loader />;

  return (
    <section className="bg-stone-100 min-h-screen p-10 ">
      <div className="flex flex-wrap justify-center gap-5 ">
        {guests &&
          guests.map((guest) => <Guest key={guest.id} guest={guest} />)}
      </div>
    </section>
  );
}

export default Guests;
