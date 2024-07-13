import React from "react";

type InputProps = {
  variable: string;
  onTextChange: (value: string) => void;
  value: string;
};

function Input({ variable, onTextChange, value }: InputProps) {
  return (
    <div className="flex items-center">
      <p className="w-32">{variable}</p>
      <input
        type="text"
        className="bg-slate-100 flex-1 border rounded py-1.5 px-2"
        onChange={(e) => onTextChange(e.target.value)}
        value={value}
      />
    </div>
  );
}

export default Input;
