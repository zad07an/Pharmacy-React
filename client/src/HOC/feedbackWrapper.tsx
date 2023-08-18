import React from "react";
import { usePharmacyContext } from "../context/PharmacyProvider";

interface FeedbackProps {
  handleOpenModal: () => void;
}

function feedbackWrapper(Component: React.FC<FeedbackProps>) {
  return () => {
    const { handleOpenModal } = usePharmacyContext();
    return <Component handleOpenModal={handleOpenModal} />;
  };
}

export default feedbackWrapper;
