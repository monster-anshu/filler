import React, { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import styles from './modal.module.scss';

export interface IModalBaseProps extends React.ComponentProps<'div'> {}

const ModalBase: FC<IModalBaseProps> = ({ className, children, ...props }) => {
  return (
    <div
      {...props}
      className={twMerge(
        'fixed z-20 max-w-lg origin-top rounded-lg bg-white shadow-md',
        'left-2 right-2 top-1/2 mx-auto max-h-[98%] -translate-y-1/2 transform',
        className,
        styles.modal
      )}
    >
      {children}
    </div>
  );
};

export default ModalBase;
