import React from "react";

const Input = ({label, id, title, value, name, onChange }) => {
  return (
    <div className={"input-container"}>
      <label htmlFor={title}>{label}</label>
      <input
        id={title}
        required
        name={name}
        value={value}
        onChange={onChange}
        // ref={titleRef }
      />
    </div>
  );
};

export default Input;
