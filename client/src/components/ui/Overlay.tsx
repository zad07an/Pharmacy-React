import cn from "../../utils/tailwindMerge";

interface Props {
  className?: string;
}

function Overlay({ className }: Props) {
  return (
    <div
      className={cn(
        "w-full h-screen fixed left-0 top-20 bg-black bg-opacity-50 backdrop-blur-sm",
        className || ""
      )}
    />
  );
}

export default Overlay;
