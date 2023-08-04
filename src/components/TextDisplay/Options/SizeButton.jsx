import { useEffect } from "react"

const SizeButton = ({name,size,setSize}) => {

  const handleSizeButton = (buttonId) => {
    setSize(buttonId)
  }

  useEffect(() => {
    const sizeButtons = document.querySelectorAll('.size-btn-A')
    const baseFontSize = 1
    const fontSizeIncrement = 0.15

    sizeButtons.forEach((button,index) => {
      const fontSize = baseFontSize + index*fontSizeIncrement
      button.style.fontSize = `${fontSize}rem`
    })
  })

  return (
    <button 
      className={`size-btn ${size === name ? 'selected' : ''}`}
      onClick={() => handleSizeButton(name)}
    >
        <p className="size-btn-A">A</p>
        <div className={`size-btn-column ${size === name ? 'selected' : ''}`}>
            <p>{name}</p>
            <p>mm</p>
        </div>
    </button>
  )
}

export default SizeButton
