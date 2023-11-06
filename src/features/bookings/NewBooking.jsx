import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import {
  HiOutlineArrowUturnLeft,
  HiOutlineDocumentCheck,
} from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { useCreateGuest } from "../../hooks/useCreateGuest";

function NewBooking() {
  const navigate = useNavigate();
  const { isCreating, createGuest } = useCreateGuest();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createGuest(data);
    reset();
    // navigate("")
  };

  return (
    <section className="bg-stone-100 min-h-screen ">
      <div className="flex justify-center min-h-screen w-full items-center ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" flex flex-col w-3/4 "
        >
          <h1 className="text-center italic text-[50px] text-neutral-500 py-8  border-b-solid border-neutral-200 border-b-2 ">
            Register your new guest here!
          </h1>
          <FormRow error={errors?.fullName?.message}>
            <input
              {...register("fullName", {
                required: "This field is required!",
              })}
              id="fullName"
              placeholder="Fullname"
              type="text"
              className="inputStyle"
            />
          </FormRow>
          <FormRow error={errors?.email?.message}>
            <input
              {...register("email", {
                required: "This field is required!",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address!",
                },
              })}
              placeholder="Email"
              id="email"
              type="text"
              className="inputStyle"
            />
          </FormRow>
          <FormRow error={errors?.phoneNumber?.message}>
            <input
              {...register("phoneNumber", {
                required: "This field is required!",
                minLength: {
                  value: 9,
                  message: "Phone number should be at least 9 digits long!",
                },
              })}
              placeholder="Phone number"
              id="phone-number"
              type="text"
              className="inputStyle"
            />
          </FormRow>
          <FormRow error={errors?.country?.message}>
            <input
              {...register("country", {
                required: "This field is required!",
              })}
              placeholder="Country"
              id="country"
              type="text"
              className=" inputStyle "
            />
          </FormRow>
          <FormRow error={errors?.flag?.message}>
            <input
              {...register("flag", {
                required: "This field is required!",
              })}
              id="flag"
              placeholder="Add country emote"
              type="text"
              className="inputStyle "
            />
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
              Register new guest <HiOutlineDocumentCheck />
            </button>
          </FormRow>
        </form>
      </div>
    </section>
  );
}

export default NewBooking;
