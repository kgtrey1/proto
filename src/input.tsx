import React, { FC } from "react";

interface InputProps {
  label: string;
  props?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
}

const Input: FC<InputProps> = ({ label, props }) => {
  return (
    <div style={{ marginTop: 10 }}>
      <label className="form-label label">{label}</label>
      <input {...props} className={`form-control`} />
    </div>
  );
};

export default Input;
