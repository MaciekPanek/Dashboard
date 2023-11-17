import { HiArrowLongRight } from 'react-icons/hi2';
import { NavLink } from 'react-router-dom';

function Villa({ villa }) {
  const { name, capacity, price, image, id } = villa;

  return (
    <div className='lg:w-[400px] w-[300px] hover:cursor-pointer justify-self-center   h-max '>
      <div>
        <img className=' rounded-xl lg:min-w-[400px] min-w-[300px]  h-[300px] object-cover ' src={image} alt={name} />
      </div>

      <div className='  lg:w-[400px] w-[300px]  h-[200px'>
        <div className='text-neutral-800 dark:text-neutral-200 text-xl py-2 italic leading-5  '>Villa: {name}</div>
        <p className='text-neutral-600 dark:text-neutral-400 text-lg font-light italic leading-6  '>
          Capacity: {capacity} people
        </p>
        <p className='text-neutral-600 dark:text-neutral-400  text-lg font-light italic leading-6'>
          Price: ${price} per night
        </p>
        <NavLink
          to={`/villas/${id}`}
          className=' text-neutral-500 text-lg font-light  dark:text-neutral-300  italic flex flex-row items-center gap-2 hover:scale-105 ease-in-out duration-300 '>
          See more details <HiArrowLongRight />
        </NavLink>
      </div>
    </div>
  );
}

export default Villa;
