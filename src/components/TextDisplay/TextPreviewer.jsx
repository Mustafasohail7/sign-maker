import { useState } from 'react'

//stylesheet
import '../../styles/TextPreviewer.css'

import letters from '../../data/straightLetterData'

import adapterImage from '../../assets/ZZadapter.png'

const TextPreviewer = ({setUserText,setSignImages}) => {

  const adapter = {src:adapterImage, title: 'adapter'}

  const [text,setText] = useState('')

  const renderSigns = (newText) => {
    let letter_signs = [adapter]
    for (const char of newText.toUpperCase()){
      let matchingLetter
      if(char === ' '){
        matchingLetter = letters.find(
          (letter) => letter.title === 'space'
        )
      }else{
        matchingLetter = letters.find(
          (letter) => letter.title === `${char}`
        )
      }
      if(matchingLetter) {
        letter_signs.push(matchingLetter)
      }
    }
    setSignImages(letter_signs)
  }

  const handleChange = (e) => {
    const newText = e.target.value
    setText(newText)
    renderSigns(newText)
  }

  return (
    <div className="text-previewer-container">
      <h2 className="text-previewer-title">Enter your text</h2>
      <textarea
        className="text-previewer-textbox"
        value={text}
        onChange={handleChange}
        placeholder='ENTER TEXT HERE 
        Press Enter/Return for a new line'
        rows={4}
        maxLength={100} //fix maxlength
      />
    </div>
  )
}

export default TextPreviewer
