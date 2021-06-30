import React from "react";
import Loader from "react-loader-spinner";
const CustomLoader = () => (
  <div className="loader-container">
    <Loader type="Puff" color="#f93" height={50} width={50} />
  </div>
);

export default CustomLoader;
