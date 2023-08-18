import React from "react";
import useFetch from "../hooks/useFetch";
import { PartnerProps } from "../lib/models";

interface PartnersProps {
  isLoading: boolean;
  partners: PartnerProps[] | null;
}

function partnersWrapper(Component: React.FC<PartnersProps>) {
  return () => {
    const { isLoading, data: partners } = useFetch<PartnerProps[]>("partners");

    return <Component isLoading={isLoading} partners={partners} />;
  };
}

export default partnersWrapper;
