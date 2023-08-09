import letters from '../../../data/letterData'
import digits from '../../../data/digitData'
import symbols from '../../../data/symbolData'

import LettersItem from './LettersItem'

import '../../../styles/Letters.css'

//data
import straightLetters from '../../../data/straightletterData'
import straightDigits from '../../../data/straightDigitData'
import straightSymbols from '../../../data/straightSymbolData'

const Letters = ({type,setSignImages}) => {
  return (
    <div className="section">
        <h2 className="section-heading transform">Insert an Element:</h2>
        <div className="options">
          {type==='letters' && letters.map((letter) => (
            <LettersItem key={letter.id} object={letter} setSignImages={setSignImages} letters={straightLetters}/>
          ))}
          {type==='digits' && 
            digits.map((digit) => (
            <LettersItem key={digit.id} object={digit} setSignImages={setSignImages} letters={straightDigits}/>
            ))
          }
          {type==='symbols' && symbols.map((letter) => (
            <LettersItem key={letter.id} object={letter} setSignImages={setSignImages} letters={straightSymbols}/>
            ))}
        </div>
    </div>
  )
}

export default Letters
