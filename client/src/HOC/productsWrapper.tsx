import React, { useMemo } from "react";
import { DrugProps } from "../lib/models";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";

export interface ProductsProps {
  isLoading: boolean;
  filteredProducts: DrugProps[] | null | undefined;
}

function productsWrapper(Component: React.FC<ProductsProps>) {
  return () => {
    const { categoryId } = useParams();
    const { isLoading, data: drugs } = useFetch<DrugProps[]>("drugs");

    const filteredProducts = useMemo(() => {
      return categoryId !== "all" ? drugs?.filter(drug => drug?.category === categoryId) : drugs;
    }, [categoryId, drugs]);

    return <Component isLoading={isLoading} filteredProducts={filteredProducts} />;
  };
}

export default productsWrapper;
