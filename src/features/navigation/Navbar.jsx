import Uploader from '../../data/Uploader';
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
  return (
    <>
      <nav className='bg-stone-100 h-screen w-[15%] flex items-start border-r-2 border-r-neutral-300   flex-col  fixed '>
        <div className='flex items-center gap-5 border-b-2 border-b-neutral-300 py-5 w-full pl-12  '>
          <img src='/photo.jpeg' className='w-20 h-20 rounded-full object-cover  ' />
          <p className='text-3xl text-neutral-700 '>Name</p>
        </div>
        <ul className='flex flex-col items-start px-4  border-b-2 border-b-neutral-300  w-full py-20 '>
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
        <div className=' flex items-end w-full h-full  '>
          <button className='pl-12 py-10 text-3xl text-neutral-500 mb-5 flex flex-row items-center gap-3  '>
            <HiArrowLeftOnRectangle />
            <span>Logout</span>
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
