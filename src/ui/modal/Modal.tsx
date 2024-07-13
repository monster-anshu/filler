import { FC, ReactNode, useId } from "react";
import { twMerge } from "tailwind-merge";
import ModalBase from "./ModalBase";
import ModalBody from "./ModalBody";
import ModalFooter from "./ModalFooter";
import ModalHeader from "./ModalHeader";
import modalContext from "./modalContext";
import Backdrop from "./Backdrop";
import { createPortal } from "react-dom";

export interface IModalProps {
  children?: ReactNode;
  className?: string;
  backdropClassName?: string;
  open?: boolean;
  onHide?: () => void;
  wrapperId?: string;
  hideOnBackdropClick?: boolean;
}

const Modal: FC<IModalProps> = ({
  open,
  onHide,
  children,
  className,
  wrapperId,
  hideOnBackdropClick = false,
}) => {
  const randomId = useId();

  if (!open) return null;
  return createPortal(
    <div>
      <Backdrop onClick={hideOnBackdropClick ? onHide : undefined} />
      <modalContext.Provider
        value={{
          onHide,
        }}
      >
        <ModalBase className={twMerge("overflow-auto", className)}>
          {children}
        </ModalBase>
      </modalContext.Provider>
    </div>,
    document.body
  );
};

Modal.displayName = "Modal";

export default Object.assign(Modal, {
  Body: ModalBody,
  Header: ModalHeader,
  Footer: ModalFooter,
});
