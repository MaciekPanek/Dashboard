import { useForm } from "react-hook-form";
import FormInput from "../../ui/FormInput";

function AddNewVilla() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <section className="bg-stone-100 min-h-screen ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-slate-500 w-full h-[800px] gap-3 flex flex-col "
      >
        <input {...register("Name")} placeholder="Name" type="text" />
        <input {...register("Capacity")} placeholder="Capacity" type="text" />
        <input {...register("Img")} placeholder="Img" type="file" />
        <input {...register("Price")} placeholder="Price" type="number" />
        <textarea
          {...register("Description")}
          placeholder="Description"
          type="text"
        />
      </form>
      <button type="submit" className="bg-neutral-500">
        Create new villa
      </button>
    </section>
  );
}

export default AddNewVilla;
