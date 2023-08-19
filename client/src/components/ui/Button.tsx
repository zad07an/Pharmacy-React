import { ButtonHTMLAttributes, ReactNode } from "react";
import cn from "../../utils/tailwindMerge";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
}

function Button({ className, children, ...props }: Props) {
  return (
    <button
      className={cn(
        " px-8 py-4 rounded-lg bg-green-1 hover:bg-green-2 transition-all duration-200 uppercase text-white xs:text-base text-xs",
        className || ""
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
