import React, { useState } from 'react'

const Device = ({ onSelect, removeSelected, device, selected }) => {
  const [isSelected, setIsSelected] = useState(selected);

  return (
    <div
      className={`device ${isSelected ? 'selected': ''}`}
      onClick={() => {
        setIsSelected(!isSelected)
        if(isSelected) {
          removeSelected(device)
        } else {
          onSelect(device)
        }
      }}
    >
      {device.name}
    </div>
  )
}

export default Device;
