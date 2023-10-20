import { useNavigate } from "react-router-dom";
import { useCreateVilla } from "../../hooks/useCreateVilla";
import { useForm } from "react-hook-form";
import FormRow from "./FormRow";
import {
  HiOutlineArrowUturnLeft,
  HiOutlineDocumentCheck,
} from "react-icons/hi2";
import Loader from "../../ui/Loader";

function EditVilla() {
  const navigate = useNavigate();
  const { isCreating, createVilla } = useCreateVilla();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const image = typeof data.image === "string" ? data.image : data.image[0];

    createVilla({ ...data, image: image });
    navigate(-1);
  };

  if (isCreating) return <Loader />;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-col w-3/4 ">
      <FormRow>
        <input
          {...register("name")}
          placeholder="Name"
          type="text"
          className="inputStyle"
        />
        <span></span>
      </FormRow>
      <FormRow>
        <input
          {...register("capacity")}
          placeholder="Capacity"
          type="text"
          className="inputStyle"
        />
        <span></span>
      </FormRow>
      <FormRow>
        <input
          {...register("price")}
          placeholder="Price"
          type="number"
          className="inputStyle"
        />
        <span></span>
      </FormRow>
      <FormRow>
        <input
          {...register("image")}
          placeholder="image"
          id="image"
          accept="image/*"
          type="file"
          className=" mb-3 px-1 file:rounded-full file:bg-neutral-200 file:border-solid file:border-neutral-400  file:text-neutral-400  text-neutral-500 file:px-6 file:py-2 file:mr-5 file:hover:cursor-pointer "
        />

        <span></span>
      </FormRow>
      <FormRow>
        <textarea
          {...register("description")}
          placeholder="Description"
          type="text"
          className="border-2 border-dashed border-neutral-400 w-1/2 px-3 text-neutral-500 outline-none  "
        />
        <span></span>
      </FormRow>
      <FormRow className="border-none flex gap-5">
        <button
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
          className="rounded-full px-6 py-2 bg-neutral-400 border-solid border-neutral-400  text-neutral-50 flex items-center gap-2 hover:scale-105 duration-300 "
        >
          Back
          <HiOutlineArrowUturnLeft />
        </button>
        <button
          type="submit"
          className="rounded-full px-6 py-2 bg-neutral-400 border-solid border-neutral-400  text-neutral-50 flex items-center gap-2 hover:scale-105 duration-300 "
        >
          Create new villa <HiOutlineDocumentCheck />
        </button>
      </FormRow>
    </form>
  );
}

export default EditVilla;
