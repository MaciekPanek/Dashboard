import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Loader from './Loader';
import { useUser } from '../hooks/useUser';

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  const { isLoading, isAuthenticated } = useUser();

  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate('/login');
    },
    [isLoading, isAuthenticated, navigate]
  );

  if (isLoading)
    return (
      <div className='h-screen bg-neutral-100 dark:bg-dark-600 flex items-center justify-center '>
        <Loader />
      </div>
    );

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
