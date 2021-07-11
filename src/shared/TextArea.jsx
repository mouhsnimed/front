import React from "react";

const TextArea = ({ type, name, error, placeholder, ...rest }) => {
  return (
    <>
      <textarea
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

export default TextArea;
