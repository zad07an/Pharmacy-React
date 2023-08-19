import React from "react";
import { usePharmacyContext } from "../context/PharmacyProvider";

export interface FeedbackProps {
  isModalOpen: boolean;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
}

function feedbackWrapper(Component: React.FC<FeedbackProps>) {
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

export default feedbackWrapper;
