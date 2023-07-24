const ColorButton = ({color,setColor,name}) => {

    //change color
    const handleColorButton = (buttonId) => {
        setColor(buttonId);
    }

  return (
    <button 
    className={`font-btn white ${color === `${name}` ? 'selected' : ''}`}
    onClick={() => handleColorButton(name)}
    >
        {name}
    </button>
  )
}

export default ColorButton
