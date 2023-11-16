import SignupForm from '../features/authentication/SignupForm';
import UpdateUserDataForm from '../features/authentication/UpdateUserDataForm';
import ThemeChangeButton from '../features/settings/ThemeChangeButton';

function Settings() {
  return (
    <section className=' dark:bg-dark-600 bg-stone-100 h-screen '>
      <div className='flex justify-end mr-20 pt-10 '>
        <ThemeChangeButton />
      </div>
      <div className='flex justify-center '>
        <SignupForm />
      </div>
      <div className='flex justify-center '>
        <UpdateUserDataForm />
      </div>
    </section>
  );
}

export default Settings;
