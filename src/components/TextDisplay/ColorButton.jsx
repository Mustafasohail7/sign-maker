const ColorButton = ({color,name}) => {

    //change color
    const handleColorButton = (buttonId) => {
        // setColor(buttonId);
    }

  return (
    <button 
    className={`font-btn ${color === `${name}` ? 'selected' : ''}`}
    style={{backgroundColor: `${color}`}}
    onClick={() => handleColorButton(name)}
    >
        {name}
    </button>
  )
}

export default ColorButton
