import { Outlet } from 'react-router-dom';
import NavBar from './features/navigation/Navbar';

function AppLayout() {
  return (
    <div className=' flex flex-row '>
      <NavBar />

      <main className=' absolute left-[15%] md:left-[25%] xl:left-[15%] w-[85%] md:w-3/4 xl:w-[85%] '>
        <div className='text-center dark:bg-neutral-400  bg-neutral-300 text-neutral-600 dark:text-neutral-800 italic '>
          The data time period is set for 17/11/2023 for presentational reasons.
        </div>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
