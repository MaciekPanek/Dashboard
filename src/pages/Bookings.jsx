import { HiArrowDown, HiArrowUp } from "react-icons/hi2";
import Booking from "../features/bookings/Booking";
import { useBookings } from "../hooks/useBookings";
import Loader from "../ui/Loader";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Bookings() {
  const { isLoading, bookings } = useBookings();
  const [expandedVilla, setExpandedVilla] = useState(null);

  if (isLoading || bookings === undefined) {
    return <Loader />;
  }

  // console.log(bookings);

  if (!bookings) return <Loader />;

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
    <section className="flex gap-5 bg-stone-100 min-h-screen items-center  flex-col p-20">
      {Object.keys(groupedBookings).map((villaName) => (
        <div
          key={villaName}
          className="bg-neutral-200 border border-neutral-400 h-min p-4 w-4/5 rounded-2xl"
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
              {expandedVilla !== villaName && "Unfold bookings for this villa"}
              {expandedVilla !== villaName && <HiArrowDown />}
              {expandedVilla === villaName && "Fold bookings for this villa"}
              {expandedVilla === villaName && <HiArrowUp />}
            </button>
          </div>

          {expandedVilla === villaName && (
            <div>
              <div className="flex gap-5 justify-center italic text-neutral-600 border border-b-neutral-400 my-3 text-center ">
                <p className="w-1/5">Guest:</p>
                <p className="w-1/5">Arrival date:</p>
                <p className="w-1/5">Departure date:</p>
              </div>
              {groupedBookings[villaName].map((booking) => (
                <Booking booking={booking} key={booking.id} />
              ))}

              <div className="flex justify-end pt-5">
                <NavLink
                  to={`newbooking/${villaName}`}
                  className="rounded-full px-6 py-2 bg-neutral-400 border-solid border-neutral-400  text-neutral-50 flex items-center gap-2 hover:scale-105 duration-300  "
                >
                  Book new guest for this villa
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
