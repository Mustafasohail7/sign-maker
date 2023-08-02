import React from 'react'

const TypeOptionItem = ({size,setSize,name}) => {

    const handleSizeButton = (buttonId) => {
        console.log(buttonId)
        setSize(buttonId);
    }

  return (
    <button
    className={`type-btn ${size === `${name}` ? 'selected' : ''}`}
    onClick={() => handleSizeButton(name)}
    >
        {name}
    </button>
  )
}

export default TypeOptionItem
