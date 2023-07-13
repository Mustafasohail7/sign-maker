import { useState } from 'react'

//stylesheet
import '../styles/TextPreviewer.css'

const TextPreviewer = ({setUserText}) => {

  const [text, setText] = useState('')

  const handleChange = (e) => {
    const newText = e.target.value
    setText(newText)
    setUserText(newText)
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
