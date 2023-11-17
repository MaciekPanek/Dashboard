// import { villas } from "../data/villas";
import { NavLink } from 'react-router-dom';
import Villa from '../features/villas/Villa';
import { useVillas } from '../hooks/useVillas';
import Loader from '../ui/Loader';
import NotFound from '../ui/NotFound';
import { useVillaContext } from '../context/VillaContext';

function Villas() {
  const { isLoading, villas } = useVillas();
  const { villas: contextVillas } = useVillaContext();

  if (isLoading) {
    return <Loader />;
  }

  if (!villas || villas.length === 0) {
    return <NotFound />;
  }

  // Use contextVillas if available, otherwise fallback to fetched villas
  const displayVillas = contextVillas.length > 0 ? contextVillas : villas;

  return (
    <section className='grid grid-cols-fluid gap-10  bg-stone-100 dark:bg-dark-600 min-h-screen auto-rows-max p-10'>
      {displayVillas.map((villa) => (
        <Villa villa={villa} key={villa.id} />
      ))}
      <NavLink
        to={'/villas/newvilla'}
        className='w-[400px] hover:scale-105 h-[300px] ease-in-out duration-300 hover:cursor-pointer '>
        <div>
          <div className=' rounded-xl min-w-[400px]  h-[300px] border-dashed border-neutral-400 dark:border-neutral-300 border-[3px] flex justify-center items-center text-2xl  '>
            <span className='text-neutral-500 dark:text-neutral-300 italic'>Add new Villa...</span>
          </div>
        </div>
      </NavLink>
    </section>
  );
}

export default Villas;
