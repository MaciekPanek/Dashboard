import { useUser } from '../../hooks/useUser';

function UserAvatar() {
  const { user } = useUser();

  const { fullName, avatar } = user.user_metadata;

  return (
    <div className='flex items-center justify-center gap-3   py-5 w-full md:px-4  border-b-2 border-b-neutral-300 dark:border-b-neutral-500  '>
      <img
        src={avatar || '/default-user-image.png'}
        alt={`avatar of ${fullName}`}
        className='w-12 h-12 rounded-full object-cover  '
      />
      <span className=' md:text-xl lg:text-2xl text-neutral-600 dark:text-neutral-300 hidden md:inline '>
        {fullName}
      </span>
    </div>
  );
}

export default UserAvatar;
