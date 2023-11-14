import { useNavigate } from 'react-router-dom';
import { useCreateVilla } from '../../hooks/useCreateVilla';
import { useForm } from 'react-hook-form';
import FormRow from '../../ui/FormRow';
import { HiOutlineArrowUturnLeft, HiOutlineDocumentCheck } from 'react-icons/hi2';
import Loader from '../../ui/Loader';
import { useVillaDetails } from '../../context/VillaDetailsContext';
import { useEditVilla } from '../../hooks/useEditVilla';

function EditVilla({ selectedVilla }) {
  const navigate = useNavigate();
  const { isCreating, createVilla } = useCreateVilla();
  const { editVilla } = useEditVilla();

  const { id } = selectedVilla || { id: null };

  const { isEditModalVisible, handleEditModalToggle } = useVillaDetails();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: selectedVilla,
  });

  const onSubmit = (data) => {
    const image = typeof data.image === 'string' ? data.image : data.image[0];

    if (isEditModalVisible)
      editVilla(
        { newVillaData: { ...data, image }, id },
        {
          onSuccess: (data) => {
            reset();
            handleEditModalToggle?.();
          },
        }
      );
    else
      createVilla(
        { ...data, image: image },
        {
          onSuccess: (data) => {
            reset();
          },
        }
      );
  };

  if (isCreating) return <Loader />;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-3/4'>
      <FormRow>
        <input {...register('name')} placeholder='Name' type='text' className='inputStyle' />
        <span>{errors?.name?.message}</span>
      </FormRow>
      <FormRow>
        <input
          {...register('capacity', {
            required: 'This field is required',
          })}
          placeholder='Capacity'
          type='text'
          className='inputStyle'
        />
        <span></span>
      </FormRow>
      <FormRow>
        <input {...register('price')} placeholder='Price' type='number' className='inputStyle' />
        <span></span>
      </FormRow>
      <FormRow>
        <input
          {...register('image')}
          placeholder='image'
          id='image'
          accept='image/*'
          type='file'
          className='mb-3 px-1 file:rounded-full file:bg-neutral-200 dark:file:bg-neutral-200 file:border-solid file:border-neutral-400  file:text-neutral-400  text-neutral-500 file:px-6 file:py-2 file:mr-5 file:hover:cursor-pointer'
        />
        <span></span>
      </FormRow>
      <FormRow>
        <textarea
          {...register('description')}
          placeholder='Description'
          type='text'
          className='border-2 border-dashed border-neutral-400 dark:bg-neutral-200 w-1/2 px-3 text-neutral-500 outline-none'
        />
        <span></span>
      </FormRow>
      <FormRow className='border-none flex gap-5'>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleEditModalToggle();
            navigate(-1);
          }}
          className='buttonStyle'>
          Back
          <HiOutlineArrowUturnLeft />
        </button>
        <button type='submit' className='buttonStyle'>
          {isEditModalVisible ? 'Edit villa' : 'Create new villa'} <HiOutlineDocumentCheck />
        </button>
      </FormRow>
    </form>
  );
}

export default EditVilla;
