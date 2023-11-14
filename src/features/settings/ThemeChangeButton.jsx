import { useDarkMode } from '../../context/DarkModeContext';
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi2';

function ThemeChangeButton() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <button onClick={toggleDarkMode} className='buttonStyle'>
      {isDarkMode && 'Change to light mode'}
      {!isDarkMode && 'Change to dark mode'}
      {!isDarkMode && <HiOutlineMoon />}
      {isDarkMode && <HiOutlineSun />}
    </button>
  );
}

export default ThemeChangeButton;
