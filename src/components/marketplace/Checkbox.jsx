import React from 'react';

const Checkbox = ({ 
  id, 
  label, 
  checked, 
  onChange, 
  disabled = false,
  className = ''
}) => {
  return (
    <div className={`flex items-center ${className}`}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
      />
      {label && (
        <label htmlFor={id} className="ml-2 text-gray-700 select-none cursor-pointer">
          {label}
        </label>
      )}
    </div>
  );
};

export default Checkbox;