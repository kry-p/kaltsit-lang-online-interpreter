/**
 * Window size hook
 */
import { useState, useEffect } from 'react';

export default function useWindow() {
  const [windowInfo, setWindowInfo] = useState({
    width: 0,
    height: 0,
  });

  const handleResize = () => {
    setWindowInfo({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (typeof window !== 'undefined') {
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
    return;
  }, []);

  return windowInfo;
}
