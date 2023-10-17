import supabase, { supabaseUrl } from "./supabase";

export async function getVillas() {
  const { data, error } = await supabase.from("Villas").select("*");

  if (error) {
    console.error(error);
    throw new Error("Villa could not be loaded");
  }

  return data;
}

// export async function createNewVilla(newVilla) {
//   const { data, error } = await supabase
//     .from("Villas")
//     .insert([{ ...newVilla }]);

//   if (error) {
//     console.error(error);
//     throw new Error("Villa could not be created");
//   }

//   return data;
// }

export async function createEditVilla(newVilla, id) {
  const hasImagePath = newVilla.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newVilla.image.name}`.replaceAll(
    "/",
    ""
  );

  console.log(newVilla);
  console.log(imageName);

  const imagePatch = hasImagePath
    ? newVilla.image
    : `${supabaseUrl}/storage/v1/object/public/villa-images/${imageName}`;

  console.log(imagePatch);

  // 1. Create/edit Cabin
  let query = supabase.from("Villas");

  // A) CREATE
  if (!id) query = query.insert([{ ...newVilla, image: imagePatch }]);

  // B) EDIT
  if (id) query = query.update({ ...newVilla, image: imagePatch }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Villa could not be created");
  }

  // 2. Upload Image
  if (hasImagePath) return;

  const { error: storageError } = await supabase.storage
    .from("villa-images")
    .upload(imageName, newVilla.image);

  // 3. Delete cabin if there was an error uploading image
  if (storageError) {
    await supabase.from("Villas").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "Villa image could not be uploaded and cabin was not created"
    );
  }

  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("Villas").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Villa could not be deleted");
  }

  return data;
}
