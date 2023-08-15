import { ReactNode } from "react";
import cn from "../../utils/tailwindMerge";

interface Props {
  children: ReactNode;
  className?: string;
}

function Container({ children, className }: Props) {
  return (
    <section className={cn("w-full min-h-screen flex items-center flex-col", className || "")}>
      {children}
    </section>
  );
}

export default Container;
