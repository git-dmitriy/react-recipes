import {MdDarkMode, MdLightMode} from 'react-icons/md';
import {useAppStore} from '@/store/useAppStore';

export const ThemeSwitcher: React.FC = () => {
    const theme = useAppStore((store) => store.theme);
    const switchTheme = useAppStore((store) => store.switchTheme);

    const onClickHandler = () => {
        switchTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <button
            className="w-8 h-7 text-3xl relative overflow-hidden hover:opacity-70 focus-visible:opacity-70 transition-opacity cursor-pointer"
            onClick={onClickHandler}
        >
          <span
              className={`${
                  theme === 'dark' ? 'rotate-180' : ''
              } absolute top-0 left-0 duration-200 transition-transform`}
          >
            <MdLightMode/>
            <MdDarkMode className='rotate-180'/>
          </span>
        </button>
    );
};
