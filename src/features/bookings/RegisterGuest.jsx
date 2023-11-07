import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import { HiOutlineArrowRight, HiOutlineArrowUturnLeft } from "react-icons/hi2";
import { useNavigate, useParams } from "react-router-dom";
import { useCreateGuest } from "../../hooks/useCreateGuest";
import { useVillaDetails } from "../../context/VillaDetailsContext";
import { useState } from "react";
import { useGuests } from "../../hooks/useGuests";

function RegisterGuest() {
  const navigate = useNavigate();
  const { isCreating, createGuest } = useCreateGuest();
  const { guestId, setGuestId } = useVillaDetails();
  const [gotToBooking, setGoToBooking] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { villaName } = useParams("villaName");

  const onSubmit = (data) => {
    createGuest(data);
    setGoToBooking(true);

    reset();
  };

  function handleGoToBooking(e) {
    e.preventDefault();
    if (guestId) {
      navigate(`/bookings/newbooking/${villaName}/${guestId}`);
      setGuestId(null);
    } else {
      navigate("/bookings");
    }
    setGoToBooking(false);
  }

  return (
    <section className="bg-stone-100 min-h-screen ">
      <div className="flex justify-center min-h-screen w-full items-center ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" flex flex-col w-3/4 "
        >
          <h1 className="text-center italic text-[50px] text-neutral-500 py-8  border-b-solid border-neutral-200 border-b-2 ">
            First register your new guest here!
          </h1>
          <FormRow error={errors?.fullName?.message}>
            <input
              {...register("fullName", {
                required: "This field is required!",
              })}
              id="fullName"
              autoComplete="name"
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
              autoComplete="email"
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
              autoComplete="tel-national"
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
              autoComplete="country-name"
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
              autoComplete="no-autofill"
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
            {gotToBooking ? (
              <button
                onClick={handleGoToBooking}
                className="rounded-full px-6 py-2 bg-neutral-500 border-solid border-neutral-400  text-neutral-50 flex items-center gap-2 hover:scale-105 duration-300 "
              >
                Book this guest
              </button>
            ) : (
              <button
                type="submit"
                className="rounded-full px-6 py-2 bg-neutral-400 border-solid border-neutral-400  text-neutral-50 flex items-center gap-2 hover:scale-105 duration-300 "
              >
                Register new guest
                <HiOutlineArrowRight />
              </button>
            )}
          </FormRow>
        </form>
      </div>
    </section>
  );
}

export default RegisterGuest;
