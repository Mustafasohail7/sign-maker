import '../../../styles/ColorOptions.css'

const ColorButton = ({name,image}) => {

  return (
      <img src={image} alt={name} className='color-images'/>
  )
}

export default ColorButton
