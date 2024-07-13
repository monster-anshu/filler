import React, { FC, useRef } from 'react';
import { twMerge } from 'tailwind-merge';

export interface IBackdropProps {
  className?: string;
  onClick?: () => void;
}

const Backdrop: FC<IBackdropProps> = ({ className, onClick }) => {
  const backdropRef = useRef<HTMLDivElement>(null);
  return (
    <div
      className={twMerge(
        'fixed bottom-0 left-0 right-0 top-0 z-[20] bg-black/50',
        className
      )}
      style={{
        backdropFilter: 'blur(1px)',
      }}
      onClick={(e) => {
        if (e.target === backdropRef.current) {
          onClick?.();
        }
      }}
      ref={backdropRef}
    />
  );
};
export default Backdrop;
