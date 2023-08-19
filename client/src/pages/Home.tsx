import { memo } from "react";
import Image from "../components/ui/Image";
import Drug from "../components/drug/Drug";
import DrugSkeleton from "../components/drug/DrugSkeleton";
import Skeleton from "react-loading-skeleton";
import homeWrapper from "../HOC/homeWrapper";
import Button from "../components/ui/Button";
import Subtitle from "../components/ui/Subtitle";
import Paragraph from "../components/ui/Paragraph";
import Container from "../components/ui/Container";
import Modal from "../components/modals/Modal";
import SuccessContent from "../components/modals/modal-contents/SuccessContent";

const Home = homeWrapper(
  ({ isLoading, drugs, navigate, handleOpenModal, isModalOpen, handleCloseModal }) => (
    <>
      <Modal
        title="ՇՆՈՐՀԱԿԱԼՈՒԹՅՈՒՆ"
        description="ՄԵՐ ՄԱՍՆԱԳԵՏԸ ԿՊԱՏԱՍԽԱՆԻ ՁԵԶ ԷԼ․ՓՈՍՏԻ ՄԻՋՈՑՈՎ"
        body={<SuccessContent />}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
      <Container className=" lg:px-20 md:px-10 px-5 pb-20">
        <section className=" w-full h-screen grid lg:grid-cols-2 lg:p-0 pt-28 lg:gap-0 gap-10 items-center">
          <div className=" w-full flex lg:items-start lg:justify-start items-center justify-center flex-col gap-6 lg:p-0 lg:pr-32 sm:px-20 lg:text-start text-center">
            <h1 className=" font-semibold text-green-1 xs:text-4xl text-3xl">
              ԱՌԱՋԻՆԸ ՀԱՅԱՍՏԱՆՈՒՄ
            </h1>
            <p>
              Բինտեր, թանզիֆե մանրէազերծված բժշկական անձեռոցիկներ, մանրէազերծված և ոչ մանրէազերծված
              բժշկական վիրակապեր արտադրող;
            </p>
            <Button onClick={() => navigate("/about-us")}>ԿԱՐԴԱԼ ԱՎԵԼԻՆ</Button>
          </div>
          <div className=" flex items-center justify-center">
            <div className=" aspect-video relative">
              <Image src="/assets/image1.png" className=" object-cover" />
              <div className=" absolute xs:w-fit w-64 aspect-square -bottom-24 -right-24 -z-10">
                <Image src="/assets/Ellipse 1.svg" />
              </div>
            </div>
          </div>
        </section>
        <section className=" w-full flex items-center flex-col text-center lg:m-0 mt-32">
          <div className=" my-10">
            <Subtitle>ԱՐՏԱԴՐԱՆՔ</Subtitle>
          </div>
          <div className=" w-full grid lg:grid-cols-3 sm:grid-cols-2 gap-x-6 gap-y-12">
            {isLoading
              ? [...Array(8).keys()].map((index: number) => <DrugSkeleton key={index} />)
              : drugs?.length && drugs?.map(drug => <Drug key={drug?.id} drug={drug} />)}
          </div>
          <Button className=" mt-10" onClick={() => navigate("/products/all")}>
            ՏԵՍՆԵԼ ԱՄԲՈՂՋԸ
          </Button>
        </section>
        <section className=" w-full h-[calc(100vh-80px)] grid lg:grid-cols-2 lg:p-0 pt-10 lg:gap-0 gap-10 items-center">
          <div className=" w-full flex lg:items-start lg:justify-start items-center justify-center flex-col gap-6 lg:p-0 lg:pr-32 sm:px-20 lg:text-start text-center">
            <Subtitle>ԲԺՇԿԱԿԱՆ ՊԱՐԱԳԱՆԵՐԻ ՍՏԵՐԻԼԻԶԱՑՈՒՄ</Subtitle>
            <p>Մենք առաջարկում ենք ԲԺՇԿԱԿԱՆ ՊԱՐԱԳԱՆԵՐԻ ՍՏԵՐԻԼԻԶԱՑՈՒՄ</p>
            <Button onClick={() => navigate("/services")}>ԿԱՐԴԱԼ ԱՎԵԼԻՆ</Button>
          </div>
          <div className=" flex items-center justify-center">
            <div className=" aspect-video relative">
              <Image src="/assets/image2.png" className=" object-cover" />
              <div className=" absolute sm:w-fit w-64 aspect-square -bottom-24 -right-24 -z-10">
                <Image src="/assets/Ellipse 1.svg" className=" rotate-[28deg]" />
              </div>
            </div>
          </div>
        </section>
        <section className=" w-full flex items-center flex-col text-center lg:m-0 sm:mt-32 mt-24">
          <Subtitle className=" sm:my-20 my-10">ԳՈՐԾԸՆԿԵՐՆԵՐ</Subtitle>
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
              : [...Array(6).keys()]?.map((index: number) => (
                  <div
                    key={index}
                    className=" flex items-center justify-center px-6 rounded-xl bg-gray-1 overflow-hidden py-32"
                  >
                    <Image src="/assets/box-image.svg" />
                  </div>
                ))}
          </div>
          <Button className=" mt-10" onClick={() => navigate("/partners")}>
            ՏԵՍՆԵԼ ԱՄԲՈՂՋԸ
          </Button>
        </section>
        <section className=" w-full h-fit grid lg:grid-cols-2 lg:p-0 pt-10 lg:gap-0 gap-10 items-start lg:mt-20 mt-10">
          <div className=" flex items-center flex-col md:gap-0 gap-10">
            <Paragraph className=" xxs:mb-0 mb-10">
              It is a long established fact that a reader will be distracted by the readable content
              of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop publishing packages
              and web page editors now use Lorem Ipsum as their default model text, and a search for
              'lorem ipsum' will uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on purpose (injected
              humour and the like).
            </Paragraph>
            <div className=" w-fit flex items-center justify-center relative">
              <Image src="/assets/map.png" />
              <div className=" absolute sm:w-64 w-44 aspect-square bottom-8 left-4 -z-10">
                <Image src="/assets/Ellipse 1.svg" className=" rotate-90" />
              </div>
            </div>
          </div>
          <div className=" flex items-center flex-col gap-6 sm:px-24">
            <Subtitle>ԿԱՊՆՎԵՔ ՄԵԶ ՀԵՏ ՀԻՄԱ</Subtitle>
            <form action="" className=" w-full flex items-center flex-col gap-6">
              <input
                type="text"
                className=" w-full sm:px-10 px-5 h-20 rounded-xl bg-gray-1"
                placeholder="Անուն"
              />
              <input
                type="email"
                className=" w-full sm:px-10 px-5 h-20 rounded-xl bg-gray-1"
                placeholder="Էլ․հասցե"
              />
              <textarea
                name=""
                id=""
                rows={5}
                placeholder="Հաղորդագրություն"
                className=" w-full resize-none rounded-xl bg-gray-1 sm:px-10 px-5 py-10"
              ></textarea>
              <div className=" w-full flex items-center justify-start">
                <Button type="button" onClick={handleOpenModal}>
                  ՈՒՂԱՐԿԵԼ
                </Button>
              </div>
            </form>
          </div>
        </section>
      </Container>
    </>
  )
);

export default memo(Home);
