import React from "react";

function aboutWrapper(Component: React.FC) {
  return () => {
    return <Component />;
  };
}

export default aboutWrapper;
