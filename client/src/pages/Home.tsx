import { memo } from "react";
import Image from "../components/ui/Image";
import Drug from "../components/drug/Drug";
import DrugSkeleton from "../components/drug/DrugSkeleton";
import Skeleton from "react-loading-skeleton";
import homeWrapper from "../HOC/homeWrapper";

const Home = homeWrapper(({ isLoading, drugs, navigate }) => {
  console.log("Home page rendering");
  return (
    <section className="w-full min-h-screen lg:px-20 md:px10 px-5 flex items-center flex-col pb-20">
      <section className=" w-full h-screen grid lg:grid-cols-2 lg:p-0 pt-28 lg:gap-0 gap-10 items-center">
        <div className=" w-full flex lg:items-start lg:justify-start items-center justify-center flex-col gap-6 lg:p-0 lg:pr-32 sm:px-20 lg:text-start text-center">
          <div>
            <h1 className=" text-4xl font-semibold text-green-1">ԱՌԱՋԻՆԸ ՀԱՅԱՍՏԱՆՈՒՄ</h1>
          </div>
          <div>
            <p>
              Բինտեր, թանզիֆե մանրէազերծված բժշկական անձեռոցիկներ, մանրէազերծված և ոչ մանրէազերծված
              բժշկական վիրակապեր արտադրող;
            </p>
          </div>
          <button
            className=" px-10 py-4 rounded-xl bg-green-1 text-white"
            onClick={() => navigate("/about-us")}
          >
            ԿԱՐԴԱԼ ԱՎԵԼԻՆ
          </button>
        </div>
        <div className=" flex items-center justify-center">
          <div className=" aspect-video relative">
            <Image src="/assets/image1.png" className=" object-cover" />
            <div className=" absolute w-fit aspect-square -bottom-24 -right-24 -z-10">
              <Image src="/assets/Ellipse 1.svg" />
            </div>
          </div>
        </div>
      </section>
      <section className=" w-full flex items-center flex-col text-center lg:m-0 mt-32">
        <div className=" my-10">
          <h2 className=" text-4xl text-green-1 font-semibold">ԱՐՏԱԴՐԱՆՔ</h2>
        </div>
        <div className=" w-full grid lg:grid-cols-3 sm:grid-cols-2 gap-x-6 gap-y-12">
          {isLoading
            ? [...Array(8).keys()].map((index: number) => <DrugSkeleton key={index} />)
            : drugs?.length && drugs?.map(drug => <Drug key={drug?.id} drug={drug} />)}
        </div>
        <div className=" my-10">
          <button
            className=" px-8 py-4 rounded-lg bg-green-1 uppercase text-white"
            onClick={() => navigate("/products/all")}
          >
            ՏԵՍՆԵԼ ԱՄԲՈՂՋԸ
          </button>
        </div>
      </section>
      <section className=" w-full h-[calc(100vh-80px)] grid lg:grid-cols-2 lg:p-0 pt-10 lg:gap-0 gap-10 items-center">
        <div className=" w-full flex lg:items-start lg:justify-start items-center justify-center flex-col gap-6 lg:p-0 lg:pr-32 sm:px-20 lg:text-start text-center">
          <div>
            <h1 className=" text-4xl font-semibold text-green-1">
              ԲԺՇԿԱԿԱՆ ՊԱՐԱԳԱՆԵՐԻ ՍՏԵՐԻԼԻԶԱՑՈՒՄ
            </h1>
          </div>
          <div>
            <p>Մենք առաջարկում ենք ԲԺՇԿԱԿԱՆ ՊԱՐԱԳԱՆԵՐԻ ՍՏԵՐԻԼԻԶԱՑՈՒՄ</p>
          </div>
          <div>
            <button className=" px-10 py-4 rounded-xl bg-green-1 text-white">ԿԱՐԴԱԼ ԱՎԵԼԻՆ</button>
          </div>
        </div>
        <div className=" flex items-center justify-center">
          <div className=" aspect-video relative">
            <Image src="/assets/image2.png" className=" object-cover" />
            <div className=" absolute w-fit aspect-square -bottom-24 -right-24 -z-10">
              <Image src="/assets/Ellipse 1.svg" className=" rotate-[28deg]" />
            </div>
          </div>
        </div>
      </section>
      <section className=" w-full flex items-center flex-col text-center lg:m-0 mt-32">
        <div className=" my-10">
          <h2 className=" text-4xl text-green-1 font-semibold">ԳՈՐԾԸՆԿԵՐՆԵՐ</h2>
        </div>
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
        <div className=" my-10">
          <button className=" px-8 py-4 rounded-lg bg-green-1 uppercase text-white">
            ՏԵՍՆԵԼ ԱՄԲՈՂՋԸ
          </button>
        </div>
      </section>
      <section className=" w-full h-fit grid lg:grid-cols-2 lg:p-0 pt-10 lg:gap-0 gap-10 items-start mt-20">
        <div className=" flex items-center flex-col md:gap-0 gap-10">
          <p>
            It is a long established fact that a reader will be distracted by the readable content
            of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
            more-or-less normal distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing packages and web
            page editors now use Lorem Ipsum as their default model text, and a search for 'lorem
            ipsum' will uncover many web sites still in their infancy. Various versions have evolved
            over the years, sometimes by accident, sometimes on purpose (injected humour and the
            like).
          </p>
          <div className=" w-fit flex items-center justify-center relative">
            <Image src="/assets/map.png" />
            <div className=" absolute w-64 aspect-square bottom-8 left-4 -z-10">
              <Image src="/assets/Ellipse 1.svg" className=" rotate-90" />
            </div>
          </div>
        </div>
        <div className=" flex items-center flex-col gap-6 sm:px-24">
          <div>
            <h2 className=" text-green-1 text-4xl font-semibold">ԿԱՊՆՎԵՔ ՄԵԶ ՀԵՏ ՀԻՄԱ</h2>
          </div>
          <form action="" className=" w-full flex items-center flex-col gap-6">
            <input
              type="text"
              className=" w-full px-10 h-20 rounded-xl bg-gray-1"
              placeholder="Անուն"
            />
            <input
              type="text"
              className=" w-full px-10 h-20 rounded-xl bg-gray-1"
              placeholder="Էլ․հասցե"
            />
            <textarea
              name=""
              id=""
              rows={5}
              placeholder="Հաղորդագրություն"
              className=" w-full resize-none rounded-xl bg-gray-1 px-10 py-10"
            ></textarea>
            <div className=" w-full flex items-center justify-start">
              <button className=" px-10 py-4 rounded-xl bg-green-1 text-white">
                ԿԱՐԴԱԼ ԱՎԵԼԻՆ
              </button>
            </div>
          </form>
        </div>
      </section>
    </section>
  );
});

export default memo(Home);
