import Paragraph from "../components/ui/Paragraph";
import Image from "../components/ui/Image";
import Subtitle from "../components/ui/Subtitle";
import Container from "../components/ui/Container";
import servicesWrapper from "../HOC/servicesWrapper";

const Services = servicesWrapper(() => {
  return (
    <Container className=" lg:px-20 md:px10 px-5 gap-20 lg:pb-56 pb-32 lg:pt-32 pt-24">
      <div className=" w-full grid lg:grid-cols-2 lg:gap-10 gap-20 items-start lg:mb-20 lg:mt-0 mt-5">
        <div className=" flex items-start lg:justify-start justify-center flex-col gap-6">
          <Subtitle className=" lg:mx-0 mx-auto lg:text-start text-center">
            ԲԺՇԿԱԿԱՆ ՊԱՐԱԳԱՆԵՐԻ ՍՏԵՐԻԼԻԶԱՑՈՒՄ
          </Subtitle>
          <Paragraph>
            Բինտեր, թանզիֆե մանրէազերծված բժշկական անձեռոցիկներ, մանրէազերծված և ոչ մանրէազերծված
            բժշկական վիրակապեր արտադրող;Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Paragraph>
        </div>
        <div className=" w-full flex items-center justify-center">
          <div className=" w-fit aspect-video relative">
            <Image src="/assets/image5.png" />
            <div className=" sm:w-fit w-64 absolute lg:-bottom-44 -bottom-20 -right-28 -z-10">
              <Image src="/assets/Ellipse 1.svg" className=" w-auto h-auto rotate-[28deg]" />
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full grid lg:grid-cols-2 gap-10 items-start lg:mt-0 mt-10">
        <div className=" flex items-start lg:justify-start justify-center flex-col gap-6 lg:order-2 order-1">
          <Subtitle className=" lg:mx-0 mx-auto lg:text-start text-center">
            ԱՆՀԱՏԱԿԱՆ ՊԱՏՎԵՐ
          </Subtitle>
          <Paragraph>
            Բինտեր, թանզիֆե մանրէազերծված բժշկական անձեռոցիկներ, մանրէազերծված և ոչ մանրէազերծված
            բժշկական վիրակապեր արտադրող;Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Paragraph>
        </div>
        <div className=" w-full flex items-center justify-center lg:order-1 order-2 lg:mb-0 mb-10">
          <div className=" w-fit relative">
            <Image src="/assets/image6.png" />
            <div className=" sm:w-fit w-56 absolute lg:-bottom-40 -bottom-20 -left-20 -z-10">
              <Image src="/assets/Ellipse 1.svg" className=" -rotate-[28deg] -scale-x-100" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
});

export default Services;
