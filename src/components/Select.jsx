import React from 'react';

const Select = ({label, id, title, value, name, onChange }) => {
    return (
        <div className="input-container">
        <label htmlFor={id}>{label}</label>
        <select
          id={id}
          name={name}
          required
          value={value}
          onChange={onchange}
          // ref={categoryRef}
        >
          <option value="" hidden>
            Select Category
          </option>
          <option value="Grocery">Grocery</option>
          <option value="Clothes">Clothes</option>
          <option value="Bills">Bills</option>
          <option value="Education">Education</option>
          <option value="Medicine">Medicine</option>
        </select>
      </div>
    );
};

export default Select;