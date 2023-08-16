import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import { DrugProps } from "../lib/models";
import { useParams } from "react-router-dom";

interface SingleProductProps {
  isLoading: boolean;
  sizeIndex: number;
  drug: DrugProps | null;
  handleSelectSize: (index: number) => void;
}

function singleProductWrapper(Component: React.FC<SingleProductProps>) {
  return () => {
    const { id } = useParams();
    const [sizeIndex, setSizeIndex] = useState<number>(0);
    const { isLoading, data: drug } = useFetch<DrugProps>("drugs/" + id);

    const handleSelectSize = (index: number) => setSizeIndex(index);

    return (
      <Component
        isLoading={isLoading}
        drug={drug}
        handleSelectSize={handleSelectSize}
        sizeIndex={sizeIndex}
      />
    );
  };
}

export default singleProductWrapper;
