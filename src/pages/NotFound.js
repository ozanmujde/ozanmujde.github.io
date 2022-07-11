import React from "react";
import RouterButton from "../components/UI/RouterButton";
const NotFound = () => {
  return (
    <div style={{ color: "white" }}>
      <div>404</div>
      <div>There is nothing in this url :(</div>
      <RouterButton to="/">Go to Home</RouterButton>
    </div>
  );
};

export default NotFound;
