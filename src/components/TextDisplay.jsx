import { useState } from 'react'

//images
import Xmas from '../assets/Xmas.jpg'

//components
import TagLine from './TextDisplay/TagLine'
import TextPreviewer from './TextDisplay/TextPreviewer'
import ImageComponent from './TextDisplay/ImageComponent'
import Options from './TextDisplay/Options'

import '../styles/TextDisplay.css'

const TextDisplay = () => {

    const selectedImage = {id: 2, title: "Coffee Shop" ,src: Xmas}
    const [userText,setUserText] = useState('Drag Me')
    const [size, setSize] = useState('small');
    const [color,setColor] = useState('red');

  return (
    <>
    <div className="component">
        <TagLine/>
        <TextPreviewer setUserText={setUserText} />
    </div>
    <div className="function-container">
        <div className="component-left">
          <ImageComponent userText={userText} selectedImage={selectedImage} size={size} color={color}/>
        </div>
        <div className='component-right' >
          <Options size={size} setSize={setSize} color={color} setColor={setColor}/>
        </div>
    </div>
    </>
  )
}

export default TextDisplay
