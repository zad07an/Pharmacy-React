import Skeleton from "react-loading-skeleton";

function SingleProductSkeleton() {
  return (
    <div className=" w-full grid lg:grid-cols-2 gap-10">
      <div className=" w-full rounded-2xl">
        <Skeleton height={360} />
      </div>
      <div className=" w-full flex items-start flex-col gap-6">
        <div className=" w-full">
          <Skeleton height={30} containerClassName="flex-1" />
        </div>
        <div className=" flex items-center justify-start flex-wrap gap-6">
          {[...Array(3).keys()]?.map((index: number) => (
            <div
              key={index}
              className={` w-20 flex items-center justify-center grow gap-2rounded-full`}
            >
              <Skeleton height={30} containerClassName="flex-1" />
            </div>
          ))}
        </div>
        <div className=" flex items-center justify-start flex-wrap gap-6">
          <div className=" w-20 flex items-center justify-center grow gap-2">
            <Skeleton height={24} containerClassName="flex-1" />
          </div>
          <div className=" w-20 flex items-center justify-center grow gap-2">
            <Skeleton height={24} containerClassName="flex-1" />
          </div>
        </div>
        <div className=" w-full">
          <Skeleton height={16} count={10} />
        </div>
      </div>
    </div>
  );
}

export default SingleProductSkeleton;
