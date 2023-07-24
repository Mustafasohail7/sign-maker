const SizeButton = ({size,setSize,name}) => {

    // console.log(name);

    //change size
    const handleSizeButton = (buttonId) => {
        setSize(buttonId);
    }

  return (
    <button
    className={`font-btn ${size === `${name}` ? 'selected' : ''}`}
    onClick={() => handleSizeButton(name)}
    >
        {name}
    </button>
  )
}

export default SizeButton
