import coloredLetters from '../../../data/colorData'

import ColorButton from './ColorButton'

const ColorOptions = () => {
  return (
    <div className='section'>
        <h2 className='section-heading'>Select Color:</h2>
        <div className="options">
            {coloredLetters.map((letter) => (
              <ColorButton key={letter.id} name={letter.name} image={letter.src} />
            ))}
        </div>
      </div>
  )
}

export default ColorOptions
