import { useDarkMode } from '../../context/DarkModeContext';

function ThemeChangeButton() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <button
      onClick={toggleDarkMode}
      className='rounded-full px-6 py-2 bg-neutral-400 border-solid border-neutral-400  text-neutral-50 flex items-center gap-2 hover:scale-105 duration-300'>
      Change theme
    </button>
  );
}

export default ThemeChangeButton;
