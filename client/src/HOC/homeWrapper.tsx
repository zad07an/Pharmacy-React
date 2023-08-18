import React, { useState } from "react";
import { DrugProps } from "../lib/models";
import useFetch from "../hooks/useFetch";
import { NavigateFunction, useNavigate } from "react-router-dom";
import useClickOutside from "../hooks/useClickOutside";
import { usePharmacyContext } from "../context/PharmacyProvider";

interface HomeProps {
  navigate: NavigateFunction;
  isLoading: boolean;
  drugs: DrugProps[] | null;
  isSuccess: boolean;
  handleOpenModal: () => void;
}

function homeWrapper(Component: React.FC<HomeProps>) {
  return () => {
    const navigate = useNavigate();
    const { isLoading, data: drugs } = useFetch<DrugProps[]>("drugs");
    const { handleOpenModal, isSuccess } = usePharmacyContext();

    return (
      <Component
        isLoading={isLoading}
        drugs={drugs}
        navigate={navigate}
        isSuccess={isSuccess}
        handleOpenModal={handleOpenModal}
      />
    );
  };
}

export default homeWrapper;
