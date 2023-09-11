import { useState } from 'react'

//images
import bg from '../assets/picture.png'

//components
import TagLine from './TextDisplay/TagLine'
import TextPreviewer from './TextDisplay/TextPreviewer'
import ImageComponent from './TextDisplay/ImageComponent'
import Options from './TextDisplay/Options'

import '../styles/TextDisplay.css'

import adapterImage from '../assets/ZZadapter.png'

const TextDisplay = () => {

    const adapter = {src:adapterImage, title: 'adapter'}

    const selectedImage = {id: 2, title: "Background 1" ,src: bg}
    const [userText,setUserText] = useState('Drag Me')
    const [size, setSize] = useState('small');
    // const [color,setColor] = useState('red');
    const [signImages,setSignImages] = useState([adapter])

  return (
    <>
    <div className="component">
        <TagLine/>
        <TextPreviewer setUserText={setUserText} setSignImages={setSignImages} />
    </div>
    <div className="function-container">
        <div className="component-left">
          <ImageComponent signImages={signImages} userText={userText} selectedImage={selectedImage} size={size}/>
        </div>
        <div className='component-right' >
          <Options size={size} setSize={setSize}/>
        </div>
    </div>
    </>
  )
}

export default TextDisplay
