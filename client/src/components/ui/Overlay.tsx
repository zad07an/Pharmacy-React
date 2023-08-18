import cn from "../../utils/tailwindMerge";

interface Props {
  className?: string;
}

function Overlay({ className }: Props) {
  return (
    <div
      className={cn(
        "w-full h-screen fixed left-0 top-0 bg-black bg-opacity-50 backdrop-blur-sm z-10",
        className || ""
      )}
    />
  );
}

export default Overlay;
