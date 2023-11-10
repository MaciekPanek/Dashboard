import supabase from "./supabase";

export async function getBookings() {
  const { data, error } = await supabase
    .from("Bookings")
    .select(
      "*, Villas(name), Guests(fullName, email, flag, country, phoneNumber, id)"
    );

  if (error) {
    console.error(error);
    throw new Error(`Bookings data could not be loaded`);
  }

  return data;
}

export async function getSales() {
  const { data, error } = await supabase
    .from("Bookings")
    .select("cost, created_at");

  if (error) {
    console.error(error);
    throw new Error(`Booking sales could not be loaded`);
  }

  return data;
}
export async function getStays() {
  const { data, error } = await supabase
    .from("Bookings")
    .select("arrivalDate, departureDate, created_at");

  if (error) {
    console.error(error);
    throw new Error(`Booking stays could not be loaded`);
  }

  return data;
}

export async function createBooking(newBooking) {
  const { data, error } = await supabase
    .from("Bookings")
    .insert([{ ...newBooking }])
    .select();

  if (error) {
    console.error(error);
    throw new Error(`Booking could not be created.`);
  }
  return data;
}
