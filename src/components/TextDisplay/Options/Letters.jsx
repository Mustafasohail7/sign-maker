import letters from '../../../data/letterData'

import LettersItem from './LettersItem'

import '../../../styles/Letters.css'

const Letters = () => {
  return (
    <div className="section">
        <h2 className="section-heading transform">Insert an Element:</h2>
        <div className="options">
          {letters.map((letter) => (
            <LettersItem key={letter.id} name={letter.name} image={letter.src} />
          ))}
        </div>
    </div>
  )
}

export default Letters
