import { useSelector } from 'react-redux'
import { useDarkMode } from '../../context/DarkModeContext';
import {HiMoon, HiSun} from 'react-icons/hi2'


export default function Username() {
  const {username} = useSelector(state=>state.user)
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className='flex gap-3 items-center width-[10px]'>
      {username && (
        <div className="hidden text-sm font-semibold md:block">{username}</div>
        )}
        <button className='text-xl' onClick={toggleDarkMode}>{isDarkMode ? <HiSun /> : <HiMoon/>}</button>
    </div>
  );
}
