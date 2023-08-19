import { useRef, ReactNode } from "react";
import { IoClose } from "react-icons/io5";
import Subtitle from "../ui/Subtitle";
import Paragraph from "../ui/Paragraph";
import useClickOutside from "../../hooks/useClickOutside";
import cn from "../../utils/tailwindMerge";

interface Props {
  title: string;
  description?: string;
  body: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

function Modal({ title, description, body, isOpen, onClose, className }: Props) {
  const modalRef = useRef<HTMLDivElement | null>(null);
  useClickOutside(modalRef, onClose);

  return (
    <div
      ref={modalRef}
      className={` ${
        isOpen ? "opacity-100 scale-100" : "opacity-0 scale-0"
      } lg:w-1/2 md:w-3/4 sm:w-11/12 w-full sm:h-fit h-[calc(100%-80px)] fixed left-0 bottom-0 sm:inset-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 bg-white z-50 shadow-md rounded-lg transition-all duration-200`}
    >
      <div
        className={cn(
          " w-full h-full flex items-center justify-center flex-col gap-6 relative px-6 py-20 text-center",
          className || ""
        )}
      >
        <button
          className=" text-3xl absolute xs:top-6 xs:right-6 top-2 right-2 text-green-1"
          onClick={onClose}
        >
          <IoClose />
        </button>
        <header className=" flex items-center justify-center flex-col gap-6 text-center">
          <Subtitle>{title}</Subtitle>
          {description ? <Paragraph>{description}</Paragraph> : null}
        </header>
        {body}
      </div>
    </div>
  );
}

export default Modal;
