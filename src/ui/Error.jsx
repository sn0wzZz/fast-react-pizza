import { useNavigate, useRouteError } from 'react-router-dom';
import LinkButton from './LinkButton';

function NotFound() {
  const navigate = useNavigate();
  const error = useRouteError()

  return (
    <div className='px-3 h-screen py-6 space-y-2 dark:bg-stone-900'>
      <h1 className='font-semibold dark:text-stone-50'>Something went wrong 😢</h1>
      <p className='text-red-400'>{error.data || error.message}</p>
      <LinkButton to='-1'>&larr; Go back</LinkButton>
      
    </div>
  );
}

export default NotFound;
