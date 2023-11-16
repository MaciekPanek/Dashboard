import { useForm } from 'react-hook-form';
import { useSignup } from '../../hooks/useSignup';
import FormRow from '../../ui/FormRow';

function SignupForm() {
  const { isLoading, signup } = useSignup();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  function onSubmit({ fullName, email, password }) {
    signup({ fullName, email, password }, { onSettled: () => reset });
  }

  return (
    <div className=' flex flex-col justify-center items-center w-3/4 '>
      <h1 className='text-center italic text-[50px] text-neutral-500 dark:text-neutral-300 pb-3 '>Create new user!</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='border border-neutral-300 flex flex-col rounded-xl bg-neutral-200 dark:bg-neutral-600 w-full px-5 '>
        <FormRow error={errors?.fullName?.message} className={'border-b-neutral-300'}>
          <input
            className='inputStyle'
            placeholder='Full name'
            type='text'
            id='fullName'
            disabled={isLoading}
            {...register('fullName', { required: 'this field is required' })}
          />
        </FormRow>

        <FormRow error={errors?.email?.message} className={'border-b-neutral-300'}>
          <input
            className='inputStyle'
            placeholder='Email'
            type='email'
            id='email'
            disabled={isLoading}
            {...register('email', {
              required: 'this field is required',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Please provide valid email address.',
              },
            })}
          />
        </FormRow>

        <FormRow error={errors?.password?.message} className={'border-b-neutral-300'}>
          <input
            className='inputStyle'
            type='password'
            placeholder='Password (min 8 characters)'
            id='password'
            disabled={isLoading}
            {...register('password', {
              required: 'this field is required',
              minLength: {
                value: 8,
                message: 'Password needs a minimum of 8 characters.',
              },
            })}
          />
        </FormRow>

        <FormRow error={errors?.passwordConfirm?.message} className={'border-b-neutral-300'}>
          <input
            className='inputStyle'
            placeholder='Repeat password'
            type='password'
            id='passwordConfirm'
            disabled={isLoading}
            {...register('passwordConfirm', {
              required: 'this field is required',
              validate: (value) => value === getValues().password || 'Password need to match.',
            })}
          />
        </FormRow>

        <FormRow className={'justify-end gap-5 border-none'}>
          {/* type is an HTML attribute! */}
          <button className='buttonStyle' type='reset' disabled={isLoading} onClick={reset}>
            Cancel
          </button>
          <button className='buttonStyle' disabled={isLoading}>
            Create new user
          </button>
        </FormRow>
      </form>
    </div>
  );
}

export default SignupForm;
