import { useState } from 'react';

import Loader from '../../ui/Loader';
import { useLogin } from '../../hooks/useLogin';
import LoginFormRow from '../../ui/LoginFormRow';

function LoginForm() {
  const [email, setEmail] = useState('maciek@example.com');
  const [password, setPassword] = useState('123456');
  const { onLogin, onLoginLoad } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;

    onLogin(
      { email, password },
      {
        onSettled: () => {
          setEmail('');
          setPassword('');
        },
      }
    );
  }

  return (
    <div className=' flex flex-col justify-center items-center  '>
      <img src='/logo.png' />
      <h1 className='text-center italic text-[50px] text-neutral-500 dark:text-neutral-300 py-8   '>
        Log in to your account!
      </h1>
      <form
        onSubmit={handleSubmit}
        className='border border-neutral-400 flex flex-col rounded-xl bg-neutral-200 dark:bg-neutral-600 w-full '>
        <LoginFormRow label='Email address'>
          <input
            type='email'
            id='email'
            placeholder='Email address'
            // This makes this form better for password managers
            autoComplete='username'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={onLoginLoad}
            className='inputStyle w-full mx-5'
          />
        </LoginFormRow>
        <LoginFormRow label='Password'>
          <input
            type='password'
            id='password'
            placeholder='Password'
            autoComplete='current-password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={onLoginLoad}
            className='inputStyle w-full mx-5 '
          />
        </LoginFormRow>
        <LoginFormRow className={'items-center justify-center '}>
          <button size='large' disabled={onLoginLoad} className='buttonStyle w-1/3   '>
            {!onLoginLoad ? 'Login' : <Loader />}
          </button>
        </LoginFormRow>
      </form>
    </div>
  );
}

export default LoginForm;
