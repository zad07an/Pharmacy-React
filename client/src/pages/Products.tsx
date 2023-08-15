import { memo } from "react";
import Drug from "../components/drug/Drug";
import DrugSkeleton from "../components/drug/DrugSkeleton";
import productsWrapper from "../HOC/productsWrapper";

const Products = productsWrapper(({ isLoading, filteredProducts }) => {
  return (
    <section className="w-full min-h-screen flex items-center flex-col pb-20 pt-20 relative">
      <div className=" w-full grid lg:grid-cols-3 sm:grid-cols-2 gap-x-6 gap-y-12">
        {isLoading ? (
          [...Array(8).keys()].map((index: number) => <DrugSkeleton key={index} />)
        ) : filteredProducts?.length ? (
          filteredProducts?.map(drug => <Drug key={drug?.id} drug={drug} />)
        ) : (
          <div className=" w-full flex items-center justify-center absolute left-0">
            <p className=" text-2xl uppercase">Ապրանքը վերջացել է</p>
          </div>
        )}
      </div>
    </section>
  );
});

export default memo(Products);
