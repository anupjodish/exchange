import React from "react";
function WithLoading(Component) {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return <p>Please Wait, fetching data may take some time....</p>;
  };
}
export default WithLoading;