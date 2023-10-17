import supabase, { supabaseUrl } from "./supabase";

export async function getVillas() {
  const { data, error } = await supabase.from("Villas").select("*");

  if (error) {
    console.error(error);
    throw new Error("Villa could not be loaded");
  }

  return data;
}

export async function createNewVilla(newVilla) {
  const { data, error } = await supabase
    .from("Villas")
    .insert([{ ...newVilla }]);

  if (error) {
    console.error(error);
    throw new Error("Villa could not be created");
  }

  return data;
}

export async function createEditVilla(newVilla, id) {
  const hasImagePath = newVilla?.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newVilla.image[0].name}`.replaceAll(
    "/",
    ""
  );

  console.log(newVilla);
  const imagePath = hasImagePath
    ? newVilla.image
    : `${supabaseUrl}/storage/v1/object/public/villa-images/${imageName}`;

  console.log(imageName);

  // 1. Create/edit villa
  let query = supabase.from("Villas");

  // A) CREATE
  if (!id) query = query.insert([{ ...newVilla, image: imagePath }]);

  // B) EDIT
  if (id) query = query.update({ ...newVilla, image: imagePath }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Villa could not be created");
  }

  // 2. Upload image
  if (hasImagePath) return data;

  const { error: storageError } = await supabase.storage
    .from("villa-images")
    .upload(imageName, newVilla.image);

  // 3. Delete the villa IF there was an error uplaoding image
  if (storageError) {
    await supabase.from("Villas").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "Villa image could not be uploaded and the villa was not created"
    );
  }
  console.log(data);

  return data;
}
