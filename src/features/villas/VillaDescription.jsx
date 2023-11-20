function VillaDescription({ selectedVilla }) {
  const { name, capacity, price, image, description } = selectedVilla;

  return (
    <div className='flex gap-10 flex-col xl:flex-row'>
      <img src={image} className='  rounded-xl w-[400px]  h-[300px] object-cover  ' />

      <div className=''>
        <div className='text-neutral-600  dark:text-neutral-200  text-3xl py-2 italic'>Villa: {name}</div>
        <div className='text-neutral-600   dark:text-neutral-300 text-xl py-2 italic leading-5 '>
          Price: ${price} per night{' '}
        </div>
        <div className='text-neutral-600  dark:text-neutral-300  text-xl py-2 italic leading-5'>
          Capacity: {capacity}
        </div>
        <div className='text-neutral-600   dark:text-neutral-300 text-lg py-2 italic leading-5'>{description}</div>
      </div>
    </div>
  );
}

export default VillaDescription;
