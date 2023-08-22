import { FC, ReactNode } from "react";

interface ModalProps {
  label: string;
  children: ReactNode;
}

export function toggleModal(id: string) {
  const modal = document.getElementById(id) as HTMLDialogElement;

  const modalIsOpen = modal?.open;

  if (modal) {
    if (modalIsOpen) {
      modal.close();
    } else {
      modal.showModal();
    }
  }
}

const Modal: FC<ModalProps> = ({ label, children }) => {
  return <dialog id={label}>{children}</dialog>;
};

export default Modal;
