import supabase from "./supabase";

export async function getBookings() {
  const { data, error } = await supabase
    .from("Bookings")
    .select("*, Villas(name), Guests(fullName, email)");

  if (error) {
    console.error(error);
    throw new Error(`Bookings data could not be loaded`);
  }

  return data;
}
