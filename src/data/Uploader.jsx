import { useState } from "react";
import { isFuture, isPast, isToday } from "date-fns";
import supabase from "../services/supabase";
import { subtractDates } from "../helpers/helpers";

import { bookings } from "./bookings";
import { villas } from "./villas";
import { guests } from "./guests";

// const originalSettings = {
//   minBookingLength: 3,
//   maxBookingLength: 30,
//   maxGuestsPerBooking: 10,
//   breakfastPrice: 15,
// };

async function deleteGuests() {
  const { error } = await supabase.from("Guests").delete().gt("id", 0);
  if (error) console.log(error.message);
}

async function deletevillas() {
  const { error } = await supabase.from("Villas").delete().gt("id", 0);
  if (error) console.log(error.message);
}

async function deleteBookings() {
  const { error } = await supabase.from("Bookings").delete().gt("id", 0);
  if (error) console.log(error.message);
}

async function createGuests() {
  const { error } = await supabase.from("Guests").insert(guests);
  if (error) console.log(error.message);
}

async function createVillas() {
  const { error } = await supabase.from("Villas").insert(villas);
  if (error) console.log(error.message);
}

async function createBookings() {
  // Bookings need a guestId and a villaId. We can't tell Supabase IDs for each object, it will calculate them on its own. So it might be different for different people, especially after multiple uploads. Therefore, we need to first get all guestIds and villaIds, and then replace the original IDs in the booking data with the actual ones from the DB
  const { data: guestsIds } = await supabase
    .from("Guests")
    .select("id")
    .order("id");
  const allGuestIds = guestsIds.map((villa) => villa.id);
  const { data: villasIds } = await supabase
    .from("Villas")
    .select("id")
    .order("id");
  const allvillaIds = villasIds.map((villa) => villa.id);

  const finalBookings = bookings.map((booking) => {
    // Here relying on the order of villas, as they don't have and ID yet
    const villa = villas.at(booking.villaId - 1);
    const numNights = subtractDates(booking.arrivalDate, booking.departureDate);
    const villaPrice = numNights * villa.price;

    return {
      ...booking,
      villaPrice,
      guestId: allGuestIds.at(booking.guestId - 1),
      villaId: allvillaIds.at(booking.villaId - 1),
    };
  });

  const { error } = await supabase.from("Bookings").insert(finalBookings);
  if (error) console.log(error.message);
}

function Uploader() {
  const [isLoading, setIsLoading] = useState(false);

  async function uploadAll() {
    setIsLoading(true);
    // Bookings need to be deleted FIRST
    await deleteBookings();
    await deleteGuests();
    await deletevillas();

    // Bookings need to be created LAST
    await createGuests();
    await createVillas();
    await createBookings();

    setIsLoading(false);
  }

  async function uploadBookings() {
    setIsLoading(true);
    await deleteBookings();
    await createBookings();
    setIsLoading(false);
  }

  return (
    <div
      style={{
        marginTop: "auto",
        backgroundColor: "#e0e7ff",
        padding: "8px",
        borderRadius: "5px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      <h3>SAMPLE DATA</h3>

      <button className="bg-slate-400" onClick={uploadAll} disabled={isLoading}>
        Upload ALL
      </button>

      <button
        className="bg-slate-400"
        onClick={uploadBookings}
        disabled={isLoading}
      >
        Upload bookings ONLY
      </button>
    </div>
  );
}

export default Uploader;
