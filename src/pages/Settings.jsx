import ThemeChangeButton from '../features/settings/ThemeChangeButton';

function Settings() {
  return (
    <section className=' dark:bg-dark-600 bg-stone-100 h-screen '>
      <div className='flex justify-center py-20 '>
        <ThemeChangeButton />
      </div>
      <div className='flex justify-center '>
        <p className='text-[50px] text-neutral-500 dark:text-neutral-300 pb-5 italic '>More Settings to come!</p>
      </div>
    </section>
  );
}

export default Settings;
