import { useForm } from 'react-hook-form';
import FormRow from '../../ui/FormRow';
import { HiOutlineArrowRight, HiOutlineArrowUturnLeft, HiOutlineBookmark } from 'react-icons/hi2';
import { useNavigate, useParams } from 'react-router-dom';
import { useCreateGuest } from '../../hooks/useCreateGuest';
import { useVillaDetails } from '../../context/VillaDetailsContext';
import { useState } from 'react';

function RegisterGuest() {
  const navigate = useNavigate();
  const { createGuest } = useCreateGuest();
  const { guestId, setGuestId } = useVillaDetails();
  const [goToBooking, setGoToBooking] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { villaName } = useParams('villaName');

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
      navigate('/');
    }
    setGoToBooking(false);
  }

  return (
    <section className='bg-stone-100 dark:bg-dark-600 min-h-screen '>
      <div className='flex justify-center min-h-screen w-full items-center '>
        <form onSubmit={handleSubmit(onSubmit)} className=' flex flex-col w-3/4 '>
          <h1 className='text-center italic text-[50px] text-neutral-500 dark:text-neutral-300 py-8  border-b-solid border-neutral-200 dark:border-neutral-500 border-b-2 '>
            First register your new guest here!
          </h1>
          {!guestId && (
            <>
              <FormRow error={errors?.fullName?.message}>
                <input
                  {...register('fullName', {
                    required: 'This field is required!',
                  })}
                  id='fullName'
                  autoComplete='name'
                  placeholder='Fullname'
                  type='text'
                  className='inputStyle'
                />
              </FormRow>
              <FormRow error={errors?.email?.message}>
                <input
                  {...register('email', {
                    required: 'This field is required!',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address!',
                    },
                  })}
                  placeholder='Email'
                  autoComplete='email'
                  id='email'
                  type='text'
                  className='inputStyle'
                />
              </FormRow>
              <FormRow error={errors?.phoneNumber?.message}>
                <input
                  {...register('phoneNumber', {
                    required: 'This field is required!',
                    minLength: {
                      value: 9,
                      message: 'Phone number should be at least 9 digits long!',
                    },
                  })}
                  autoComplete='tel-national'
                  placeholder='Phone number'
                  id='phone-number'
                  type='text'
                  className='inputStyle'
                />
              </FormRow>
              <FormRow error={errors?.country?.message}>
                <input
                  {...register('country', {
                    required: 'This field is required!',
                  })}
                  placeholder='Country'
                  autoComplete='country-name'
                  id='country'
                  type='text'
                  className=' inputStyle '
                />
              </FormRow>
              <FormRow error={errors?.flag?.message}>
                <input
                  {...register('flag', {
                    required: 'This field is required!',
                  })}
                  id='flag'
                  autoComplete='no-autofill'
                  placeholder='Add country emote'
                  type='text'
                  className='inputStyle '
                />
              </FormRow>
            </>
          )}
          <FormRow className={` ${guestId && 'justify-center'} border-none flex gap-5`}>
            <button
              onClick={(e) => {
                e.preventDefault();
                setGuestId(null);
                navigate(-1);
              }}
              className='buttonStyle'>
              Back
              <HiOutlineArrowUturnLeft />
            </button>

            {goToBooking ? (
              <button onClick={handleGoToBooking} className='buttonStyle  '>
                Book this guest
                <HiOutlineBookmark />
              </button>
            ) : (
              <button type='submit' className='buttonStyle'>
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
