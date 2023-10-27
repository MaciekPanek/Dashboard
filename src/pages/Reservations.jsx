import { HiArrowDown, HiArrowUp } from "react-icons/hi2";
import Booking from "../features/bookings/Booking";
import { useBookings } from "../hooks/useBookings";
import Loader from "../ui/Loader";
import { useState } from "react";

function Reservations() {
  const { isLoading, bookings } = useBookings();

  const [expandedVilla, setExpandedVilla] = useState(null);

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
    <section className="flex gap-5 bg-stone-100 min-h-screen items-center  flex-col p-20">
      {Object.keys(groupedBookings).map((villaName) => (
        <div
          key={villaName}
          className="bg-stone-200  h-min p-4 w-3/5 rounded-2xl"
        >
          <div className="flex flex-col items-center justify-center ">
            <h2 className="text-neutral-600 text-3xl py-2 italic  cursor-pointer">
              Villa: {villaName}
            </h2>
            <button
              onClick={() =>
                setExpandedVilla(expandedVilla === villaName ? null : villaName)
              }
              className="flex items-center gap-2 text-neutral-600 cursor-pointer hover:scale-105 duration-300 underline "
            >
              {expandedVilla !== villaName &&
                "Unfold reservations for this villa"}
              {expandedVilla !== villaName && <HiArrowDown />}
              {expandedVilla === villaName &&
                "Fold reservations for this villa"}
              {expandedVilla === villaName && <HiArrowUp />}
            </button>
          </div>

          {expandedVilla === villaName && (
            <div>
              <div className="flex gap-5 justify-center  border border-b-neutral-400 my-3 ">
                <p className="w-1/5 italic text-neutral-600  ">Guest:</p>
                <p className="w-1/5 italic text-neutral-600  ">Arrival date:</p>
                <p className="w-1/5 italic text-neutral-600  ">
                  Departure date:
                </p>
              </div>
              {groupedBookings[villaName].map((booking) => (
                <Booking booking={booking} key={booking.id} />
              ))}
            </div>
          )}
        </div>
      ))}
    </section>
  );
}

export default Reservations;
