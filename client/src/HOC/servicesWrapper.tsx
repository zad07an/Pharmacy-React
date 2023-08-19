import React from "react";
import { usePharmacyContext } from "../context/PharmacyProvider";

interface ServicesProps {
  handleOpenModal: () => void;
  handleCloseModal: () => void;
  isModalOpen: boolean;
  isCallModalOpen: boolean;
  handleCloseCallModal: () => void;
}

function servicesWrapper(Component: React.FC<ServicesProps>) {
  return () => {
    const {
      handleOpenModal,
      isModalOpen,
      handleCloseModal,
      isCallModalOpen,
      handleCloseCallModal
    } = usePharmacyContext();

    return (
      <Component
        handleOpenModal={handleOpenModal}
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
        isCallModalOpen={isCallModalOpen}
        handleCloseCallModal={handleCloseCallModal}
      />
    );
  };
}

export default servicesWrapper;
