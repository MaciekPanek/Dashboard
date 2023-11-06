import supabase from "./supabase";

export async function createGuest(newGuest) {
  const { data, error } = await supabase
    .from("Guests")
    .insert([{ ...newGuest }])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Guest could not be registered");
  }

  return data;
}
