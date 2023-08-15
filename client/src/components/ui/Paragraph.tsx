import { ReactNode } from "react";
import cn from "../../utils/tailwindMerge";

interface Props {
  children: ReactNode;
  className?: string;
}

function Paragraph({ children, className }: Props) {
  return <p className={cn("xs:text-base text-sm", className || "")}>{children}</p>;
}

export default Paragraph;
