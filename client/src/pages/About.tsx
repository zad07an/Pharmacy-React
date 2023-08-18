import { memo } from "react";
import aboutWrapper from "../HOC/aboutWrapper";
import Image from "../components/ui/Image";
import Subtitle from "../components/ui/Subtitle";
import Paragraph from "../components/ui/Paragraph";
import Container from "../components/ui/Container";

const About = aboutWrapper(() => {
  return (
    <Container className=" lg:px-20 md:px-10 px-5 gap-20 lg:pb-56 pb-32 pt-24">
      <Subtitle className=" mt-10">ՄԵՐ ՄԱՍԻՆ</Subtitle>
      <div className=" w-full grid lg:grid-cols-2 lg:gap-10 gap-20 items-start lg:mb-40 xs:mt-0 mt-10">
        <div className=" w-full flex items-center justify-center">
          <div className=" w-fit aspect-video relative">
            <Image src="/assets/image3.png" />
            <div className=" sm:w-fit w-64 absolute lg:-bottom-60 -bottom-20 -left-44 -z-10">
              <Image src="/assets/Ellipse 1.svg" className=" w-auto h-auto rotate-90" />
            </div>
          </div>
        </div>
        <Paragraph className="lg:mt-0 mt-10">
          Բինտեր, թանզիֆե մանրէազերծված բժշկական անձեռոցիկներ, մանրէազերծված և ոչ մանրէազերծված
          բժշկական վիրակապեր արտադրող;Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
          the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
          release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is
          simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived not only five
          centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Paragraph>
      </div>
      <div className=" w-full grid lg:grid-cols-2 gap-10 items-start lg:mt-0 xs:mt-0 mt-20">
        <Paragraph className=" lg:mt-0 mt-10 lg:order-1 order-2">
          Բինտեր, թանզիֆե մանրէազերծված բժշկական անձեռոցիկներ, մանրէազերծված և ոչ մանրէազերծված
          բժշկական վիրակապեր արտադրող;Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
          the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
          release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is
          simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived not only five
          centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Paragraph>
        <div className=" w-full flex items-center justify-center lg:order-2 order-1 lg:mb-0 mb-10">
          <div className=" w-fit relative">
            <Image src="/assets/image4.png" />
            <div className=" sm:w-fit w-56 absolute lg:-bottom-40 -bottom-20 -right-5 -z-10">
              <Image src="/assets/Ellipse 1.svg" className=" rotate-[26deg]" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
});

export default memo(About);
