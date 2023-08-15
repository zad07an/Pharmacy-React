import { memo } from "react";
import Image from "../components/ui/Image";
import SingleProductSkeleton from "../components/single-product-skeleton/SingleProductSkeleton";
import singleProductWrapper from "../HOC/singleProductWrapper";

const SingleProduct = singleProductWrapper(({ isLoading, drug, handleSelectSize, sizeIndex }) => {
  console.log("SingleProduct page rendering");
  return (
    <section className="w-full min-h-screen flex items-center flex-col pb-20 pt-20">
      {isLoading ? (
        <SingleProductSkeleton />
      ) : (
        <div className=" w-full grid lg:grid-cols-2 gap-10">
          <div className=" w-fit aspect-video flex items-center justify-self-center rounded-2xl p-28 bg-gray-1 relative overflow-hidden">
            <Image src={drug?.image} />
            <div
              className={` ${
                drug?.isSterile ? "flex" : "hidden"
              } items-center justify-center text-white absolute sm:-top-40 sm:-right-40 xs:-top-32 xs:-right-32 -top-20 -right-20 z-10 w-3/4 aspect-square font-semibold`}
            >
              <div className="flex items-center justify-center bg-green-1 w-full h-fit rotate-45 py-1">
                <p className=" uppercase">ՍՏԵՐԻԼ</p>
              </div>
            </div>
          </div>
          <div className=" flex items-start flex-col gap-6">
            <div>
              <h2 className=" text-3xl text-green-1 font-semibold uppercase">{drug?.title}</h2>
            </div>
            <div className=" flex items-center justify-start flex-wrap gap-6">
              {drug?.sizes?.map((size, index: number) => (
                <div
                  key={index}
                  className={` flex items-center justify-center grow overflow-hidden gap-2 px-4 py-2 border-2 ${
                    index === sizeIndex ? "border-green-1 text-green-1" : "border-black text-black"
                  } rounded-full cursor-pointer`}
                  onClick={() => handleSelectSize(index)}
                >
                  <Image src="/assets/arrows.svg" className=" rotate-90" />
                  <span>{size?.height}սմ</span>
                  <Image src="/assets/arrows.svg" />
                  <span>{size?.width}սմ</span>
                </div>
              ))}
            </div>
            <div className=" flex items-center justify-start flex-wrap gap-6">
              <div className=" flex items-center justify-center grow gap-2">
                <Image src="/assets/layer1.svg" />
                {drug?.layers} շերտ
              </div>
              <div className=" flex items-center justify-center grow gap-2">
                <Image src="/assets/layer2.svg" />
                {drug?.packs} հատ
              </div>
            </div>
            <div>
              <p>{drug?.body}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
});

export default memo(SingleProduct);
