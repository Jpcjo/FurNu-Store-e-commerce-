import React from "react";

const FormSelect = ({ label, name, list, defaultValue, size }) => {
  return (
    <div className="form-control">
      {/* "form-control" is from DaisyUI */}
      <label htmlFor={name} className="label">
        <span className="label-text capitalize">{label}</span>
      </label>
      <select
        name={name}
        id={name}
        className={`rounded-lg bg-white border:none ${size}`}
        defaultValue={defaultValue}
      >
        {list.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
            //  the <option> element is used within a <select> element to define
            //  individual options within a dropdown or select menu.
            // CHatGPT value={item} if not sure why setting up value
          );
        })}
      </select>
    </div>
  );
};

export default FormSelect;
