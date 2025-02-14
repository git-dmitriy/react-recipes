import {useContext} from 'react';
import {AppContext} from '@app/context/AppContext.ts';
import {MdDarkMode, MdLightMode} from 'react-icons/md';

export const ThemeSwitcher: React.FC = () => {
    const {state, switchTheme} = useContext(AppContext);

    const onClickHandler = () => {
        if (state.theme === 'dark') {
            switchTheme('light');
        }
        if (state.theme === 'light') {
            switchTheme('dark');
        }
    };

    return (
        <button
            className='w-8 h-7 text-3xl relative overflow-hidden sm:hover:opacity-70 sm:transition-opacity'
            onClick={onClickHandler}
        >
      <span
          className={`${
              state.theme === 'dark' ? 'rotate-180' : ''
          } absolute top-0 left-0 duration-200 transition-transform`}
      >
        <MdLightMode/>
        <MdDarkMode className='rotate-180'/>
      </span>
        </button>
    );
};



// export const ThemeSwitcher = (onClickHandler: ()=>void, theme: string ) => {
// const {state, switchTheme} = useContext(AppContext);
//
// // декомпозировать этот функционал
//
// const onClickHandler = () => {
//     if (state.theme === 'dark') {
//         switchTheme('light');
//     }
//     if (state.theme === 'light') {
//         switchTheme('dark');
//     }
// };