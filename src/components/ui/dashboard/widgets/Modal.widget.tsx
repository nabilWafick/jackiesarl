import { FC, ReactNode } from "react";
import "../../../../assets/css/Sidebar.css";

interface ModalProps {
  label: string;
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({ label, children }) => {
  return (
    <dialog id={label} className=" relative sidebar bg-backgroundColor ">
      {children}
    </dialog>
  );
};

export default Modal;
