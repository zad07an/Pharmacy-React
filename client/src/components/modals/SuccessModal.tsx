import { IoClose } from "react-icons/io5";
import Subtitle from "../ui/Subtitle";
import Paragraph from "../ui/Paragraph";
import Image from "../ui/Image";
import { useRef } from "react";
import useClickOutside from "../../hooks/useClickOutside";
import { usePharmacyContext } from "../../context/PharmacyProvider";

function SuccessModal() {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const { handleCloseModal, isSuccess } = usePharmacyContext();

  useClickOutside(modalRef, handleCloseModal);

  return (
    <div
      ref={modalRef}
      className={` ${
        isSuccess ? "opacity-100 scale-100" : "opacity-0 scale-0"
      } lg:w-1/2 md:w-3/4 sm:w-11/12 w-full sm:h-fit h-[calc(100%-80px)] fixed left-0 bottom-0 sm:inset-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 bg-white z-50 shadow-md rounded-lg transition-all duration-200`}
    >
      <div className=" w-full h-full flex items-center justify-center flex-col gap-6 relative px-6 py-20 text-center">
        <button
          className=" text-3xl absolute top-6 right-6 text-green-1"
          onClick={handleCloseModal}
        >
          <IoClose />
        </button>
        <Subtitle>ՇՆՈՐՀԱԿԱԼՈՒԹՅՈՒՆ</Subtitle>
        <Paragraph>ՄԵՐ ՄԱՍՆԱԳԵՏԸ ԿՊԱՏԱՍԽԱՆԻ ՁԵԶ ԷԼ․ՓՈՍՏԻ ՄԻՋՈՑՈՎ</Paragraph>
        <div
          className=" w-32 aspect-square flex items-center justify-center mt-6"
          style={{ backgroundImage: `url("/assets/Ellipse 12.svg")`, backgroundSize: "cover" }}
        >
          <Image src="/assets/check.svg" className=" w-16" />
        </div>
      </div>
    </div>
  );
}

export default SuccessModal;
