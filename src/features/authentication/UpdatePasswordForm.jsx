import { useForm } from 'react-hook-form';
import { useUpdateUser } from '../../hooks/useUpdateUser';
import FormRow from '../../ui/FormRow';

function UpdatePasswordForm() {
  const { register, handleSubmit, formState, getValues, reset } = useForm();
  const { errors } = formState;

  const { updateUser, isUpdating } = useUpdateUser();

  function onSubmit({ password }) {
    updateUser({ password }, { onSuccess: reset });
  }

  return (
    <div className=' flex flex-col justify-center items-center w-3/4 mb-32 '>
      <h3 className='text-center italic text-[40px] text-neutral-500 dark:text-neutral-300 py-3 pt-10 '>
        Update password!
      </h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='border border-neutral-300 flex flex-col rounded-xl bg-neutral-200 dark:bg-neutral-600 w-full px-5 '>
        <FormRow error={errors?.password?.message}>
          <input
            type='password'
            className='inputStyle'
            placeholder='Password (min 8 characters)'
            id='passwordUpdate'
            autoComplete='current-password'
            disabled={isUpdating}
            {...register('password', {
              required: 'This field is required',
              minLength: {
                value: 8,
                message: 'Password needs a minimum of 8 characters',
              },
            })}
          />
        </FormRow>

        <FormRow error={errors?.passwordConfirm?.message}>
          <input
            type='password'
            placeholder='Repeat password'
            className='inputStyle'
            autoComplete='new-password'
            id='passwordConfirmUpdate'
            disabled={isUpdating}
            {...register('passwordConfirm', {
              required: 'This field is required',
              validate: (value) => getValues().password === value || 'Passwords need to match',
            })}
          />
        </FormRow>
        <FormRow className={'justify-end gap-5 '}>
          <button onClick={reset} className='buttonStyle' type='reset'>
            Cancel
          </button>
          <button className='buttonStyle' disabled={isUpdating}>
            Update password
          </button>
        </FormRow>
      </form>
    </div>
  );
}

export default UpdatePasswordForm;
