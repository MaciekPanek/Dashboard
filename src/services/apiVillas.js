import supabase from "./supabase";

export async function getVillas() {
  const { data, error } = await supabase.from("Villas").select("*");

  if (error) {
    console.error(error);
    throw new Error("Villa could not be loaded");
  }

  return data;
}
