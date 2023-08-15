import Skeleton from "react-loading-skeleton";

function DrugSkeleton() {
  return (
    <div className=" flex items-center flex-col gap-6 p-6 rounded-xl bg-gray-1">
      <div className=" w-full">
        <Skeleton height={280} />
      </div>
      <div className=" w-full">
        <Skeleton height={24} />
      </div>
      <div className=" w-full flex items-center justify-center gap-4">
        <div className=" w-20">
          <Skeleton height={24} />
        </div>
        <div className=" w-20">
          <Skeleton height={24} />
        </div>
        <div className=" w-20">
          <Skeleton height={24} />
        </div>
      </div>
      <div>
        <div className=" w-32">
          <Skeleton height={40} />
        </div>
      </div>
    </div>
  );
}

export default DrugSkeleton;
