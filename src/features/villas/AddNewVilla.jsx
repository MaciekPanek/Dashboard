import { useForm } from "react-hook-form";
import FormInput from "../../ui/FormInput";
import FormRow from "./FormRow";
import { HiOutlineDocumentCheck } from "react-icons/hi2";

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
      <div className="flex justify-center min-h-screen w-full items-center ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" flex flex-col w-3/4 "
        >
          <h1 className="text-center italic text-[50px] text-neutral-500 py-8  border-b-solid border-neutral-200 border-b-2 ">
            Create new villa for your guests!
          </h1>
          <FormRow>
            <input
              {...register("Name")}
              placeholder="Name"
              type="text"
              className="inputStyle"
            />
            <span></span>
          </FormRow>
          <FormRow>
            <input
              {...register("Capacity")}
              placeholder="Capacity"
              type="text"
              className="inputStyle"
            />
            <span></span>
          </FormRow>
          <FormRow>
            <input
              {...register("Price")}
              placeholder="Price"
              type="number"
              className="inputStyle"
            />
            <span></span>
          </FormRow>
          <FormRow>
            <input
              {...register("Img")}
              placeholder="Img"
              type="file"
              className=" mb-3 px-1 file:rounded-full file:bg-neutral-200 file:border-solid file:border-neutral-400  file:text-neutral-400  text-neutral-500 file:px-6 file:py-2 file:mr-5 file:hover:cursor-pointer "
            />

            <span></span>
          </FormRow>
          <FormRow>
            <textarea
              {...register("Description")}
              placeholder="Description"
              type="text"
              className="border-2 border-dashed border-neutral-400 w-1/2 px-3 text-neutral-500 outline-none  "
            />
            <span></span>
          </FormRow>
          <FormRow className="border-none">
            <button
              type="submit"
              className="rounded-full px-6 py-2 bg-neutral-400 border-solid border-neutral-400  text-neutral-50 flex items-center gap-2 hover:scale-105 duration-300 "
            >
              Create new villa <HiOutlineDocumentCheck />
              Create new villa <HiOutlineDocumentCheck />
            </button>
          </FormRow>
        </form>
      </div>
    </section>
  );
}

export default AddNewVilla;
