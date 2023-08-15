import { RefObject, useEffect } from "react";

type ElementType<T> = RefObject<T>;
type OnCloseType = () => void;

function useClickOutside<T extends HTMLElement>(element: ElementType<T>, onClose: OnCloseType) {
  const handleCloseMenu = (e: MouseEvent) => {
    if (element?.current && !element.current.contains(e.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleCloseMenu);
    return () => document.removeEventListener("mousedown", handleCloseMenu);
  }, [handleCloseMenu]);
}

export default useClickOutside;
