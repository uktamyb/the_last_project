import React from "react";

export const Generic = ({ location }) => {
  console.log(location);
  return <div>Coming soon{location.pathname}</div>;
};

export default Generic;
