import React, { useEffect, useRef } from 'react';

interface PropsType {
  children: React.ReactNode;
  onOutsideClick: () => void;
}
export const ModalHelper = ({children, onOutsideClick}:PropsType) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event:MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        onOutsideClick();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onOutsideClick]);

  return <div  ref={wrapperRef}>{children}</div>;
};

