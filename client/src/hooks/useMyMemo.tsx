import React, { memo } from "react";

function useMyMemo<T>(Component: React.FC<T>) {
  return memo(Component, (prevProps: Readonly<T>, nextProps: Readonly<T>) => {
    if (JSON.stringify(prevProps) === JSON.stringify(nextProps)) {
      return true;
    }
    return false;
  });
}

export default useMyMemo;
