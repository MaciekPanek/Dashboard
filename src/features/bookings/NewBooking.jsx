import { useNavigate, useParams } from 'react-router-dom';
import { useGuests } from '../../hooks/useGuests';
import { useVillas } from '../../hooks/useVillas';
import NotFound from '../../ui/NotFound';
import { useForm } from 'react-hook-form';
import FormRow from '../../ui/FormRow';
import { HiOutlineArrowRight, HiOutlineArrowUturnLeft } from 'react-icons/hi2';
import { useCreateBooking } from '../../hooks/useCreateBooking';

function NewBooking() {
  const { villaName, guestId } = useParams();
  const navigate = useNavigate();
  const { guests } = useGuests();
  const { villas } = useVillas();
  const { isCreating, createBooking } = useCreateBooking();

  const isVillasValid = Array.isArray(villas) && villas.some((villa) => villa.name === villaName);
  const isGuestsValid = Array.isArray(guests) && guests.some((guest) => guest.id.toString() === guestId);

  let villaId = null;
  let villaPrice = null;
  let villaCapacity = null;

  if (isVillasValid) {
    const matchingVilla = villas.find((villa) => villa.name === villaName);
    if (matchingVilla) {
      villaId = matchingVilla.id;
      villaPrice = matchingVilla.price;
      villaCapacity = matchingVilla.capacity;
    }
  }

  const validateGuestsNum = (value, villaCapacity) => {
    if (value > villaCapacity) {
      return `Number of guests cannot exceed ${villaCapacity}.`;
    }
    return true; // Return true if the validation passes
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const arrivalDate = new Date(data.arrivalDate);
    const departureDate = new Date(data.departureDate);
    const guestNum = data.guestsNum;
    const timeDifference = departureDate - arrivalDate;

    const days = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    const bookingCost = days * guestNum * villaPrice;

    createBooking({
      ...data,
      cost: bookingCost,
      villaId: villaId,
      guestId: +guestId,
    });
    navigate('/');
  };

  if (!isVillasValid || !isGuestsValid) {
    return <NotFound />;
  }
  return (
    <section className='bg-stone-100 dark:bg-dark-600 min-h-screen '>
      <div className='flex justify-center min-h-screen w-full items-center '>
        <form onSubmit={handleSubmit(onSubmit)} className=' flex flex-col w-3/4 '>
          <h1 className='text-center italic text-[50px] text-neutral-500 py-8  dark:text-neutral-300 border-b-solid border-neutral-200 border-b-2 dark:border-neutral-500 '>
            Secondly, book your guest here!
          </h1>
          <FormRow error={errors?.arrivalDate?.message}>
            <input
              {...register('arrivalDate', {
                required: 'This field is required!',
              })}
              id='arrivalDate'
              autoComplete='no-autofill'
              placeholder='Date of arrival'
              type='date'
              className='inputStyle'
            />
          </FormRow>
          <FormRow error={errors?.departureDate?.message}>
            <input
              {...register('departureDate', {
                required: 'This field is required!',
              })}
              placeholder='Date of departure'
              autoComplete='no-autofill'
              id='departureDate'
              type='date'
              className='inputStyle'
            />
          </FormRow>
          <FormRow error={errors?.guestsNum?.message}>
            <input
              {...register('guestsNum', {
                required: 'This field is required!',
                validate: (value) => validateGuestsNum(value, villaCapacity),
              })}
              id='guestsNum'
              autoComplete='no-autofill'
              placeholder='Number of guests'
              type='number'
              className='inputStyle'
            />
          </FormRow>
          <FormRow error={errors?.notes?.message}>
            <textarea
              {...register('notes')}
              autoComplete='no-autofill'
              placeholder='Special requests'
              id='notes'
              type='text'
              className='border-2 border-dashed  border-neutral-400 sm:w-1/2 px-3 dark:bg-neutral-500 text-neutral-500 dark:text-neutral-300 outline-none  dark:placeholder:text-neutral-200 '
            />
          </FormRow>
          <FormRow className='border-none flex gap-5'>
            <button
              onClick={(e) => {
                e.preventDefault();
                navigate(-1);
              }}
              className='buttonStyle '>
              Back
              <HiOutlineArrowUturnLeft />
            </button>

            <button type='submit' className='buttonStyle '>
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
