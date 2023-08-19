import { memo } from "react";
import Image from "../components/ui/Image";
import SingleProductSkeleton from "../components/single-product-skeleton/SingleProductSkeleton";
import singleProductWrapper from "../HOC/singleProductWrapper";
import Subtitle from "../components/ui/Subtitle";
import Paragraph from "../components/ui/Paragraph";
import Container from "../components/ui/Container";

const SingleProduct = singleProductWrapper(({ isLoading, drug, handleSelectSize, sizeIndex }) => (
  <Container className=" py-20">
    {isLoading ? (
      <SingleProductSkeleton />
    ) : (
      <div className=" w-full grid lg:grid-cols-2 gap-10">
        <div className=" sm:w-fit w-full aspect-video flex items-center justify-center justify-self-center rounded-2xl p-28 bg-gray-1 relative overflow-hidden">
          <section className=" sm:w-fit min-w-[220px] aspect-video">
            <Image src={drug?.image} />
          </section>
          <div
            className={` ${
              drug?.isSterile ? "flex" : "hidden"
            } items-center justify-center text-white absolute sm:-top-40 sm:-right-40 xs:-top-32 xs:-right-32 xxs:-top-20 xxs:-right-20 -top-14 -right-14 z-10 w-3/4 aspect-square font-semibold`}
          >
            <div className="flex items-center justify-center bg-green-1 w-full h-fit rotate-45 py-1">
              <p className=" uppercase">ՍՏԵՐԻԼ</p>
            </div>
          </div>
        </div>
        <div className=" flex items-start flex-col gap-6">
          <Subtitle className=" uppercase">{drug?.title}</Subtitle>
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
          <Paragraph>{drug?.body}</Paragraph>
        </div>
      </div>
    )}
  </Container>
));

export default memo(SingleProduct);
