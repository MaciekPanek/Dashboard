import Uploader from '../../data/Uploader';
import { useLogout } from '../../hooks/useLogout';
import Loader from '../../ui/Loader';
import ThemeChangeButton from '../settings/ThemeChangeButton';
import NavItem from './NavItem';

import {
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
  HiOutlineCog6Tooth,
  HiArrowLeftOnRectangle,
  HiOutlineCalendarDays,
} from 'react-icons/hi2';

function Navbar() {
  const { logout, isLoading } = useLogout();

  return (
    <>
      <nav className='bg-stone-100 dark:bg-dark-700 h-screen w-[15%] flex items-start border-r-2 border-r-neutral-300  dark:border-r-neutral-500   flex-col  fixed '>
        <div className=' w-full py-5  flex justify-center  border-b-2 border-b-neutral-300 dark:border-b-neutral-500 '>
          <img src='/logo.png' className='w-[100px]' alt='logo' />
        </div>
        <div className='flex items-center gap-3   py-5 w-full px-4  border-b-2 border-b-neutral-300 dark:border-b-neutral-500  '>
          <img src='/photo.jpeg' alt='profile-picture' className='w-12 h-12 rounded-full object-cover  ' />
          <p className='text-2xl text-neutral-600 dark:text-neutral-300 '>Name</p>
        </div>

        <ul className='flex flex-col items-start px-4  border-b-2 border-b-neutral-300 dark:border-b-neutral-500   w-full pb-10 pt-5'>
          <NavItem to='/'>
            <HiOutlineHome />
            <span>Home</span>
          </NavItem>
          <NavItem to='/bookings'>
            <HiOutlineCalendarDays />
            <span>Bookings</span>
          </NavItem>
          <NavItem to='/villas'>
            <HiOutlineHomeModern />
            <span>Villas</span>
          </NavItem>
          <NavItem to='/guests'>
            <HiOutlineUsers />
            <span>Guests</span>
          </NavItem>
          <NavItem to='/settings'>
            <HiOutlineCog6Tooth />
            <span>Settings</span>
          </NavItem>
        </ul>
        <Uploader />
        <ThemeChangeButton />
        <Loader />
        <div className=' flex items-end w-full h-full  '>
          <button
            onClick={() => logout()}
            className='pl-12 py-10 text-3xl text-neutral-500 dark:text-neutral-300 mb-5 flex flex-row items-center gap-3  '>
            <HiArrowLeftOnRectangle />
            <span>Logout</span>
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
