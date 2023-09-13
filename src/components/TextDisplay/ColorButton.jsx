const ColorButton = ({color,name,selectedColor,setSelectedColor}) => {

    //change color
    const handleColorButton = (buttonId) => {
        setSelectedColor(buttonId);
    }

  return (
    <button 
    className={`font-btn ${selectedColor === `${name}` ? 'selected' : ''}`}
    style={{backgroundColor: `${color}`}}
    onClick={() => handleColorButton(name)}
    >
        {name}
    </button>
  )
}

export default ColorButton
