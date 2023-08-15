import { useNavigate } from "react-router-dom";
import { DrugProps } from "../../lib/models";
import Image from "../ui/Image";
import Button from "../ui/Button";

interface Props {
  drug: DrugProps;
}

function Drug({ drug }: Props) {
  const navigate = useNavigate();

  return (
    <article className=" flex items-center flex-col gap-6 text-center p-6 rounded-xl bg-gray-1 relative overflow-hidden">
      <section
        className={` ${
          drug?.isSterile ? "flex" : "hidden"
        } items-center justify-center text-white absolute lg:-top-24 lg:-right-24 md:-top-20 md:-right-20 sm:-top-14 sm:-right-14 xs:-top-28 xs:-right-28 xxs:-top-20 xxs:-right-20 xxxs:-top-16 xxxs:-right-16 -top-12 -right-12  z-10 w-3/4 aspect-square font-semibold`}
      >
        <div className="flex items-center justify-center bg-green-1 w-full h-fit rotate-45 py-1">
          <p className=" uppercase">ՍՏԵՐԻԼ</p>
        </div>
      </section>
      <section className=" sm:w-full w-64 h-64 aspect-video flex items-center justify-center">
        <Image src={drug?.image} />
      </section>
      <section className=" text-start">
        <h2 className="uppercase font-semibold">{drug?.title}</h2>
      </section>
      <section className=" flex items-center flex-wrap gap-4">
        <div className=" flex items-center justify-center grow overflow-hidden gap-2 px-4 py-2 border-2 border-green-1 rounded-full">
          <Image src="/assets/arrows.svg" className=" rotate-90" />
          <span>{drug?.sizes[0].height}սմ</span>
          <Image src="/assets/arrows.svg" />
          <span>{drug?.sizes[0].width}սմ</span>
        </div>
        <div className=" flex items-center justify-center grow gap-2">
          <Image src="/assets/layer1.svg" />
          {drug?.layers} շերտ
        </div>
        <div className=" flex items-center justify-center grow gap-2">
          <Image src="/assets/layer2.svg" />
          {drug?.packs} հատ
        </div>
      </section>
      <Button onClick={() => navigate(`/products/product/${drug?.category}/${drug?.id}`)}>
        ՏԵՍՆԵԼ Ավելին
      </Button>
    </article>
  );
}

export default Drug;
