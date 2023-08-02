import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

const LettersItem = ({name,image}) => {

  return (
    <div className="letter-container">
        <img src={image} alt={name} className="option-images"/>
        <AiOutlinePlus size={10} className='plus-image'/>
    </div>
  )
}

export default LettersItem
