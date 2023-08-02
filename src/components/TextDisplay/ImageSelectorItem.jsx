const ImageSelectorItem = ({option,setSelectedImage}) => {

  const changeImage = (src) => {
    setSelectedImage(src)
  }

  return (
      <img src={option.src} alt={option.name} className='img-options' onClick={() => changeImage(option)}/>
  )
}

export default ImageSelectorItem
