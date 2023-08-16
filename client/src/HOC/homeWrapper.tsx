import React from "react";
import { DrugProps } from "../lib/models";
import useFetch from "../hooks/useFetch";
import { NavigateFunction, useNavigate } from "react-router-dom";

interface HomeProps {
  navigate: NavigateFunction;
  isLoading: boolean;
  drugs: DrugProps[] | null;
}

function homeWrapper(Component: React.FC<HomeProps>) {
  return () => {
    const navigate = useNavigate();
    const { isLoading, data: drugs } = useFetch<DrugProps[]>("drugs");

    return <Component isLoading={isLoading} drugs={drugs} navigate={navigate} />;
  };
}

export default homeWrapper;
