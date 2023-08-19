import React from "react";

function servicesWrapper(Component: React.FC) {
  return () => {
    return <Component />;
  };
}

export default servicesWrapper;
