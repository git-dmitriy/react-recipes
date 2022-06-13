import { useEffect } from 'react';
import { useLocation } from 'react-router';

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  /* 
    Test scroll after render
  
  */

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
