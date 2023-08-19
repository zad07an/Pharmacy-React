import React from "react";
import { DrugProps } from "../lib/models";
import useFetch from "../hooks/useFetch";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { usePharmacyContext } from "../context/PharmacyProvider";

export interface HomeProps {
  navigate: NavigateFunction;
  isLoading: boolean;
  drugs: DrugProps[] | null;
  isModalOpen: boolean;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
}

function homeWrapper(Component: React.FC<HomeProps>) {
  return () => {
    const navigate = useNavigate();
    const { isLoading, data: drugs } = useFetch<DrugProps[]>("drugs");
    const { handleOpenModal, isModalOpen, handleCloseModal } = usePharmacyContext();

    return (
      <Component
        isLoading={isLoading}
        drugs={drugs}
        navigate={navigate}
        isModalOpen={isModalOpen}
        handleOpenModal={handleOpenModal}
        handleCloseModal={handleCloseModal}
      />
    );
  };
}

export default homeWrapper;
