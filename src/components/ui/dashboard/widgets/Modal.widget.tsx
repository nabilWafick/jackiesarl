import { FC, ReactNode } from "react";

interface ModalProps {
  label: string;
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({ label, children }) => {
  return <dialog id={label}>{children}</dialog>;
};

export default Modal;
