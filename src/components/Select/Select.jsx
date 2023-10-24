import React from "react";

export const Select = ({ children, defaultValue }) => {
  return (
    <select>
      <option value={defaultValue}>{ defaultValue }</option>
      {children}
    </select>
  );
};
