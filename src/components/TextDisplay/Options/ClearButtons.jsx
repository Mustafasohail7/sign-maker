import '../../../styles/ClearButtons.css'

import { AiFillDelete } from 'react-icons/ai'
import { FiDelete } from 'react-icons/fi'

const ClearButtons = ({signImages,setSignImages}) => {

    const enableRemove = signImages.length>1

    const handleClear = () => {
        const filteredImages = signImages.filter((signImage) => signImage.title==='adapter')
        setSignImages(filteredImages)
    }

    const handleRemove = () => {
        if(signImages.length>1){
            setSignImages(signImages.slice(0,signImages.length-1))
        }
    }

  return (
    <div className="delete-container">
        <div className='delete-container-item left'>
            <AiFillDelete className='delete-icon' size={20}/>
            <button className='clear-all-btn' onClick={handleClear}>
                clear all
            </button>
        </div>
        <div className={`delete-container-item right ${!enableRemove ? 'disabled' : ''}`}>
            <FiDelete/>
            <button className='clear-last-btn' onClick={handleRemove}>
                clear last
            </button>
        </div>
    </div>
  )
}

export default ClearButtons
