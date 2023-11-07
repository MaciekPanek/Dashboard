import { useNavigate, useParams } from "react-router-dom";
import { useGuests } from "../../hooks/useGuests";
import { useVillas } from "../../hooks/useVillas";
import NotFound from "../../ui/NotFound";
import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import { HiOutlineArrowRight, HiOutlineArrowUturnLeft } from "react-icons/hi2";

function NewBooking() {
  const { villaName, guestId } = useParams();
  const navigate = useNavigate();
  const { guests } = useGuests();
  const { villas } = useVillas();

  const isVillasValid =
    Array.isArray(villas) && villas.some((villa) => villa.name === villaName);
  const isGuestsValid =
    Array.isArray(guests) &&
    guests.some((guest) => guest.id.toString() === guestId);

  // Display the error component if either the villaName or guestId is not valid

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  if (!isVillasValid || !isGuestsValid) {
    return <NotFound />;
  }
  return (
    <section className="bg-stone-100 min-h-screen ">
      <div className="flex justify-center min-h-screen w-full items-center ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" flex flex-col w-3/4 "
        >
          <h1 className="text-center italic text-[50px] text-neutral-500 py-8  border-b-solid border-neutral-200 border-b-2 ">
            Secondly, book your guest here!
          </h1>
          <FormRow error={errors?.arrivalDate?.message}>
            <input
              {...register("arrivalDate", {
                required: "This field is required!",
              })}
              id="arrivalDate"
              autoComplete="no-autofill"
              placeholder="Date of arrival"
              type="date"
              className="inputStyle"
            />
          </FormRow>
          <FormRow error={errors?.departureDate?.message}>
            <input
              {...register("departureDate", {
                required: "This field is required!",
              })}
              placeholder="Date of departure"
              autoComplete="no-autofill"
              id="departureDate"
              type="date"
              className="inputStyle"
            />
          </FormRow>
          <FormRow error={errors?.guestNum?.message}>
            <input
              {...register("guestNum", {
                required: "This field is required!",
              })}
              id="guestNum"
              autoComplete="no-autofill"
              placeholder="Number of guests"
              type="number"
              className="inputStyle "
            />
          </FormRow>
          <FormRow error={errors?.notes?.message}>
            <textarea
              {...register("notes")}
              autoComplete="no-autofill"
              placeholder="Special requests"
              id="notes"
              type="text"
              className="border-2 border-dashed border-neutral-400 w-1/2 px-3 text-neutral-500 outline-none"
            />
          </FormRow>
          <FormRow error={errors?.cost?.message}>
            <input
              {...register("cost")}
              placeholder="Cost"
              autoComplete="no-autofill"
              id="cost"
              type="number"
              className=" inputStyle "
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
              Register new guest
              <HiOutlineArrowRight />
            </button>
          </FormRow>
        </form>
      </div>
    </section>
  );
}

export default NewBooking;
