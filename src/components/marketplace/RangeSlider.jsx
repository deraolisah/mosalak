import React, { useState, useEffect, useRef } from 'react';

const RangeSlider = ({ 
  min = 0, 
  max = 100000000, 
  step = 100000,
  value = [min, max],
  onChange,
  formatLabel = (value) => `₦${value.toLocaleString()}`,
  className = ''
}) => {
  const [localValue, setLocalValue] = useState(value);
  const [dragging, setDragging] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const handleMouseDown = (thumb) => {
    setDragging(thumb);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (!containerRef.current || dragging === null) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.min(Math.max(e.clientX - rect.left, 0), rect.width);
    const percentage = x / rect.width;
    const newValue = min + percentage * (max - min);
    const steppedValue = Math.round(newValue / step) * step;

    setLocalValue(prev => {
      const newValues = [...prev];
      newValues[dragging] = Math.min(Math.max(steppedValue, min), max);
      
      // Ensure min <= max
      if (dragging === 0 && newValues[0] > newValues[1]) {
        newValues[0] = newValues[1];
      } else if (dragging === 1 && newValues[1] < newValues[0]) {
        newValues[1] = newValues[0];
      }

      return newValues;
    });
  };

  const handleMouseUp = () => {
    if (dragging !== null) {
      onChange([...localValue]);
    }
    setDragging(null);
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  const handleInputChange = (index, e) => {
    const newValue = Number(e.target.value);
    const newValues = [...localValue];
    newValues[index] = Math.min(Math.max(newValue, min), max);
    
    // Ensure min <= max
    if (index === 0 && newValues[0] > newValues[1]) {
      newValues[0] = newValues[1];
    } else if (index === 1 && newValues[1] < newValues[0]) {
      newValues[1] = newValues[0];
    }
    
    setLocalValue(newValues);
    onChange(newValues);
  };

  const minPercentage = ((localValue[0] - min) / (max - min)) * 100;
  const maxPercentage = ((localValue[1] - min) / (max - min)) * 100;

  return (
    <div className={`space-y-4 ${className}`}>
      <div 
        ref={containerRef}
        className="relative h-2 bg-gray-200 rounded-full"
        onMouseDown={(e) => {
          const rect = containerRef.current.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const percentage = x / rect.width;
          const newValue = min + percentage * (max - min);
          const steppedValue = Math.round(newValue / step) * step;
          
          // Determine which thumb to move
          const minDist = Math.abs(localValue[0] - steppedValue);
          const maxDist = Math.abs(localValue[1] - steppedValue);
          const thumbToMove = minDist < maxDist ? 0 : 1;
          
          const newValues = [...localValue];
          newValues[thumbToMove] = steppedValue;
          
          if (thumbToMove === 0 && newValues[0] > newValues[1]) {
            newValues[0] = newValues[1];
          } else if (thumbToMove === 1 && newValues[1] < newValues[0]) {
            newValues[1] = newValues[0];
          }
          
          setLocalValue(newValues);
          onChange(newValues);
        }}
      >
        <div 
          className="absolute h-full bg-primary rounded-full"
          style={{
            left: `${minPercentage}%`,
            right: `${100 - maxPercentage}%`
          }}
        />
        
        {/* Min Thumb */}
        <div
          className="absolute w-4 h-4 bg-white border-2 border-primary rounded-full shadow -top-1 -ml-2 cursor-pointer"
          style={{ left: `${minPercentage}%` }}
          onMouseDown={() => handleMouseDown(0)}
        />
        
        {/* Max Thumb */}
        <div
          className="absolute w-4 h-4 bg-white border-2 border-primary rounded-full shadow -top-1 -ml-2 cursor-pointer"
          style={{ left: `${maxPercentage}%` }}
          onMouseDown={() => handleMouseDown(1)}
        />
      </div>

      <div className="flex items-center justify-between gap-4">
        <div className="flex-1">
          <label className="block text-sm text-gray-600 mb-1">Min</label>
          <input
            type="number"
            value={localValue[0]}
            onChange={(e) => handleInputChange(0, e)}
            min={min}
            max={max}
            step={step}
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
          />
        </div>
        <span className="text-gray-500 mt-6">to</span>
        <div className="flex-1">
          <label className="block text-sm text-gray-600 mb-1">Max</label>
          <input
            type="number"
            value={localValue[1]}
            onChange={(e) => handleInputChange(1, e)}
            min={min}
            max={max}
            step={step}
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
          />
        </div>
      </div>

      <div className="flex justify-between text-sm text-gray-500">
        <span>{formatLabel(min)}</span>
        <span>{formatLabel(max)}</span>
      </div>
    </div>
  );
};

export default RangeSlider;