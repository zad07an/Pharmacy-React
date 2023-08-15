import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function useScrollToTopOnNavigation(): void {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);
}

export default useScrollToTopOnNavigation;
