import Uploader from '../../data/Uploader';
import { useLogout } from '../../hooks/useLogout';
import UserAvatar from '../authentication/UserAvatar';
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
  const { logout } = useLogout();

  return (
    <>
      <nav className='bg-stone-100 dark:bg-dark-700 h-screen w-[15%] md:w-1/4 xl:w-[15%] flex items-start border-r-2 border-r-neutral-300 dark:border-r-neutral-500 flex-col fixed '>
        <div className=' w-full py-5  flex flex-col justify-center items-center gap-3 border-b-2 border-b-neutral-300 dark:border-b-neutral-500 '>
          <img src='/logo.png' className='md:w-[100px] w-[50px] ' alt='logo' />
          <h1 className='text-3xl italic dark:text-neutral-300 text-neutral-500 hidden md:inline '>Villa Rental</h1>
        </div>
        <UserAvatar />

        <ul className='flex flex-col items-start md:px-4 px-2   border-b-2 border-b-neutral-300 dark:border-b-neutral-500   w-full pb-10 pt-5'>
          <NavItem to='/'>
            <HiOutlineHome />
            <span className='hidden md:inline'>Home</span>
          </NavItem>
          <NavItem to='/bookings'>
            <HiOutlineCalendarDays />
            <span className='hidden md:inline'>Bookings</span>
          </NavItem>
          <NavItem to='/villas'>
            <HiOutlineHomeModern />
            <span className='hidden md:inline'>Villas</span>
          </NavItem>
          <NavItem to='/guests'>
            <HiOutlineUsers />
            <span className='hidden md:inline'>Guests</span>
          </NavItem>
          <NavItem to='/settings'>
            <HiOutlineCog6Tooth />
            <span className='hidden md:inline'>Settings</span>
          </NavItem>
        </ul>
        {/* <Uploader />
        <ThemeChangeButton /> */}
        <div className=' flex items-end justify-center w-full h-full  '>
          <button
            onClick={() => logout()}
            className='  py-10 text-3xl text-neutral-500 dark:text-neutral-300 mb-5 flex flex-row items-center gap-3  '>
            <HiArrowLeftOnRectangle />
            <span className='hidden md:inline'>Logout</span>
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
