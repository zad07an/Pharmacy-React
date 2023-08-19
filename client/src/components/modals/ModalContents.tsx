import { ReactElement } from "react";
import Button from "../ui/Button";
import Image from "../ui/Image";

export const formContent: ReactElement = (
  <form className=" w-full flex items-center flex-col gap-6">
    <div className=" w-full grid xs:grid-cols-2 gap-6">
      <input
        type="text"
        className=" w-full sm:px-10 px-5 h-14 rounded-xl bg-gray-1"
        placeholder="Անուն"
      />
      <input
        type="text"
        className=" w-full sm:px-10 px-5 h-14 rounded-xl bg-gray-1"
        placeholder="Ազգանուն"
      />
    </div>
    <input
      type="tel"
      className=" w-full sm:px-10 px-5 h-14 rounded-xl bg-gray-1"
      placeholder="Հեռախեսահամար"
    />
    <textarea
      name=""
      id=""
      rows={4}
      placeholder="Ծառայության անվանումը"
      className=" w-full resize-none rounded-xl bg-gray-1 sm:px-10 px-5 py-5"
    ></textarea>
    <div className=" w-full flex items-center justify-center">
      <Button type="button" className="">
        ՊԱՏՎԻՐԵԼ
      </Button>
    </div>
  </form>
);

export const successContent: ReactElement = (
  <div
    className=" w-32 aspect-square flex items-center justify-center mt-6"
    style={{ backgroundImage: `url("/assets/Ellipse 12.svg")`, backgroundSize: "cover" }}
  >
    <Image src="/assets/check.svg" className=" w-16" />
  </div>
);
