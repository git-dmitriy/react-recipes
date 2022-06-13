import { useEffect, useContext, useRef } from 'react';
import { AppContext } from 'context/AppContext';

export const Theme = () => {
  /* 

  check if classes add to body

*/

  const { state } = useContext(AppContext);

  const darkClasses = useRef([
    'bg-gray-800',
    'selection:bg-red-400',
    'selection:text-gray-900',
  ]);
  const lightClasses = useRef([
    'bg-yellow-200',
    'selection:bg-yellow-400',
    'selection:text-gray-800',
  ]);

  useEffect(() => {
    if (state.theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.body.classList.add(...darkClasses.current);
      document.body.classList.remove(...lightClasses.current);
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove(...darkClasses.current);
      document.body.classList.add(...lightClasses.current);
    }
  }, [state]);

  return null;
};
