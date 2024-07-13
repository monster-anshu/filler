import React, { FC, useContext } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { twMerge } from 'tailwind-merge';
import modalContext from './modalContext';

export interface IModalHeaderProps extends React.ComponentProps<'div'> {
  closeButton?: boolean;
}

const ModalHeader: FC<IModalHeaderProps> = ({
  className,
  children,
  closeButton = true,
  ...props
}) => {
  const { onHide } = useContext(modalContext) || {};
  return (
    <div
      {...props}
      className={twMerge(
        'bg-s1 flex items-center justify-between rounded-t-lg border-b px-4 py-3',
        className
      )}
    >
      <div className='font-medium'>{children}</div>
      {closeButton && (
        <button aria-label='Close' className='ml-auto' onClick={onHide}>
          <RxCross2 size={20} />
        </button>
      )}
    </div>
  );
};

export default ModalHeader;
