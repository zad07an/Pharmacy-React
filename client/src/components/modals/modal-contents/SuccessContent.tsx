import Image from "../../ui/Image";

function SuccessContent() {
  return (
    <div
      className=" w-32 aspect-square flex items-center justify-center mt-6"
      style={{ backgroundImage: `url("/assets/Ellipse 12.svg")`, backgroundSize: "cover" }}
    >
      <Image src="/assets/check.svg" className=" w-16" />
    </div>
  );
}

export default SuccessContent;
