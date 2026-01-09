import React from 'react';

const RadioButton = ({ 
  id, 
  name, 
  label, 
  value, 
  checked, 
  onChange, 
  disabled = false,
  className = ''
}) => {
  return (
    <div className={`flex items-center ${className}`}>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
      />
      {label && (
        <label htmlFor={id} className="ml-2 text-gray-700 select-none cursor-pointer">
          {label}
        </label>
      )}
    </div>
  );
};

export default RadioButton;