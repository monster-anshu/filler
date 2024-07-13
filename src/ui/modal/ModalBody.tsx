import React, { FC } from 'react';
import { twMerge } from 'tailwind-merge';

export interface IModalBodyProps extends React.ComponentProps<'div'> {}

const ModalBody: FC<IModalBodyProps> = ({ className, children, ...props }) => {
  return (
    <div {...props} className={twMerge('p-4', className)}>
      {children}
    </div>
  );
};

export default ModalBody;
