// description
// this is a form component
// value, label, name, placeholder, type, onChange  are fom component props you can reuse this value
// in your code
// lavel is conditional
// type ,value, name ,placeholder are daynamic

import React from "react";

const Form = ({ value, label, name, placeholder, type, onChange }) => (
  <div className="form-group">
    {label && (
      <label htmlFor="input-field" style={{ margin: "5px 0px 5px 10px" }}>
        {label}
      </label>
    )}
    <br />
    <input
      style={{
        width: "90%",
        margin: "5px 5px",
        padding: "5px",
        border: "1px solid LimeGreen",
        borderRadius: 5,
      }}
      type={type}
      value={value}
      name={name}
      className="form-control"
      placeholder={placeholder}
      onChange={onChange}
    />
  </div>
);
export default Form;
