import { PropsWithChildren } from 'react';
import ReactModal from 'react-modal';

type ModalProps = {
  isOpen: boolean;
  modalClassName?: string;
  overlayClassName?: string;
};

export const Modal = ({
  isOpen,
  children,
  modalClassName,
  overlayClassName,
}: PropsWithChildren<ModalProps>) => {
  return (
    <ReactModal
      isOpen={isOpen}
      className={modalClassName}
      overlayClassName={overlayClassName}
      shouldCloseOnOverlayClick
    >
      {children}
    </ReactModal>
  );
};
