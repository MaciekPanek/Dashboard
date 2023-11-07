import supabase from "./supabase";

export async function createGuest(newGuest) {
  const { data, error } = await supabase
    .from("Guests")
    .insert([newGuest])
    .select("id");

  if (error) {
    console.error(error);
    throw new Error("Guest could not be registered");
  }

  return data[0].id; // Return the ID of the newly created guest
}
