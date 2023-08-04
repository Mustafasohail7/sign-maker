import { useState } from 'react'

//data
import imageData from '../data/images'

//components
import ImageComponent from './TextDisplay/ImageComponent'
import Options from './TextDisplay/Options'
import ImageSelector from './TextDisplay/ImageSelector'

import '../styles/TextDisplay.css'

import adapterImage from '../assets/ZZadapter.png'

const TextDisplay = () => {

    const adapter = {src:adapterImage,title:'adapter'}

    const [selectedImage,setSelectedImage] = useState(imageData[0]) 
    const [signImages,setSignImages] = useState([adapter])

  return (
    <div className="function-container">
        <div className="component-left">
          <ImageComponent selectedImage={selectedImage} signImages={signImages}/>
        </div>
        <div className='component-right' >
          <ImageSelector setSelectedImage={setSelectedImage}/>
          <Options signImages={signImages} setSignImages={setSignImages}/>
        </div>
    </div>
  )
}

export default TextDisplay
