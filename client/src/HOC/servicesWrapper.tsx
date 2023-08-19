import React from "react";
import { usePharmacyContext } from "../context/PharmacyProvider";

interface ServicesProps {
  handleOpenModal: () => void;
  handleCloseModal: () => void;
  isModalOpen: boolean;
}

function servicesWrapper(Component: React.FC<ServicesProps>) {
  return () => {
    const { handleOpenModal, isModalOpen, handleCloseModal } = usePharmacyContext();

    return (
      <Component
        handleOpenModal={handleOpenModal}
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
      />
    );
  };
}

export default servicesWrapper;
