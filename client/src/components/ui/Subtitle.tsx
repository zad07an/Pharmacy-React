import { ReactNode } from "react";
import cn from "../../utils/tailwindMerge";

interface Props {
  children: ReactNode;
  className?: string;
}

function Subtitle({ children, className }: Props) {
  return (
    <h2
      className={cn("sm:text-4xl text-2xl text-green-1 font-semibold uppercase", className || "")}
    >
      {children}
    </h2>
  );
}

export default Subtitle;
