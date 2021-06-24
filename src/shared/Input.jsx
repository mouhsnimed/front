import React from "react";

const Input = ({ type, name, error, placeholder, ...rest }) => {
  return (
    <>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        {...rest}
      />
      {error && error.message && (
        <p className="input-error"> {error.message}</p>
      )}
    </>
  );
};

export default Input;
