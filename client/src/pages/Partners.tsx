import Container from "../components/ui/Container";
import partnersWrapper, { PartnersProps } from "../HOC/partnersWrapper";
import Image from "../components/ui/Image";
import Skeleton from "react-loading-skeleton";
import Subtitle from "../components/ui/Subtitle";
import useMyMemo from "../hooks/useMyMemo";

const Partners = partnersWrapper(({ isLoading, partners }) => {
  return (
    <Container className=" lg:px-20 md:px-10 px-5 pb-20 pt-32">
      <Subtitle className=" mb-10">ԳՈՐԾԸՆԿԵՐՆԵՐ</Subtitle>
      <div className=" w-full grid lg:grid-cols-3 sm:grid-cols-2 gap-x-6 gap-y-12">
        {isLoading
          ? [...Array(6).keys()]?.map((index: number) => (
              <div
                key={index}
                className=" flex items-center justify-center px-6 rounded-xl bg-gray-1 py-32"
              >
                <Skeleton height={280} containerClassName="flex-1" />
              </div>
            ))
          : partners?.map((partner, index: number) => (
              <div
                key={index}
                className=" flex items-center justify-center px-6 rounded-xl bg-gray-1 overflow-hidden py-32"
              >
                <Image src={partner?.image} />
              </div>
            ))}
      </div>
    </Container>
  );
});

export default useMyMemo<PartnersProps>(Partners);
