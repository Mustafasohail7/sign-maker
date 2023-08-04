import React from 'react'

const TypeOptionItem = ({type,setType,name}) => {

    const handleSizeButton = (buttonId) => {
        setType(buttonId);
    }

  return (
    <button
    className={`type-btn ${type === `${name}` ? 'selected' : ''}`}
    onClick={() => handleSizeButton(name)}
    >
        {name}
    </button>
  )
}

export default TypeOptionItem
