import React, { FC } from 'react';
import { twMerge } from 'tailwind-merge';

export interface IModalFooterProps extends React.ComponentProps<'div'> {}

const ModalFooter: FC<IModalFooterProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      {...props}
      className={twMerge(
        'flex items-center justify-end gap-3 px-4 pb-4',
        className
      )}
    >
      {children}
    </div>
  );
};

export default ModalFooter;
