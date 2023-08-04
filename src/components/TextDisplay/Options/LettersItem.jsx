import React from 'react'

import { AiOutlinePlus } from 'react-icons/ai'

const LettersItem = ({object,setSignImages,letters}) => {

  const handleAdd = (id) => {
    setSignImages((prevSignImages) => {
      const letter = letters.find((letter) => letter.id === id)
      return [...prevSignImages,{...letter,id:prevSignImages.length}]
    })
  }

  return (
    <div className="letter-container">
        <img src={object.src} alt={object.title} className="option-images"/>
        <AiOutlinePlus size={15} className='plus-image' onClick={() => handleAdd(object.id)} />
    </div>
  )
}

export default LettersItem
