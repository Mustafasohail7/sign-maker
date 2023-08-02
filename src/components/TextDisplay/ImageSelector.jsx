//stylesheet
import '../../styles/ImageSelector.css'
import ImageSelectorItem from './ImageSelectorItem'

//data
import imageData from '../../data/images'

const ImageSelector = ({setSelectedImage}) => {

  return (
    <div className='img-selector'>
      {imageData.map(option => (
        <ImageSelectorItem key={option.id} option={option} setSelectedImage={setSelectedImage}/>
      ))}
    </div>
  )
}

export default ImageSelector
