import { useState } from 'react'

//data
import imageData from '../data/images'

//components
import ImageComponent from './TextDisplay/ImageComponent'
import Options from './TextDisplay/Options'
import ImageSelector from './TextDisplay/ImageSelector'

import '../styles/TextDisplay.css'

const TextDisplay = () => {

    const [selectedImage,setSelectedImage] = useState(imageData[0]) 
    const [size, setSize] = useState('small');
    const [color,setColor] = useState('red');

  return (
    <div className="function-container">
        <div className="component-left">
          <ImageComponent selectedImage={selectedImage} size={size} color={color}/>
        </div>
        <div className='component-right' >
          <ImageSelector setSelectedImage={setSelectedImage} />
          <Options size={size} setSize={setSize} color={color} setColor={setColor}/>
        </div>
    </div>
  )
}

export default TextDisplay
