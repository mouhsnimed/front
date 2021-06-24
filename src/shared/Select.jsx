import React from "react";

const Select = ({ options, type, name, error, placeholder, ...rest }) => {
  return (
    <>
      <select
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        {...rest}
      >
        {options.map((item) => (
          <option value={item.value}>{item.label}</option>
        ))}
      </select>
      {error && error.message && (
        <p className="input-error"> {error.message}</p>
      )}
    </>
  );
};

export default Select;
