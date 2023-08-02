import '../../../styles/RadioOptions.css'

const RadioOptions = () => {
  return (
    <div className='column-divider'>
          <div className='radio-section'>
            <h2 className='section-heading'>Select Wall mounting kit</h2>
          </div>     
          <div className='radio-section'>
            <h2 className='section-heading'>Select connector</h2>
            <div className='radio-options'>
              <div className='radio-option'>
                <p>5A Adapter</p>
                <input type='radio' id='stand' name='connector' value='stand'/>
              </div>
              <div className='radio-option'>
                <p>5A Adapter</p>
                <input type='radio' id='stand' name='connector' value='stand'/>
              </div>
              <div className='radio-option'>
                <p>5A Adapter</p>
                <input type='radio' id='stand' name='connector' value='stand'/>
              </div>
            </div>
          </div>
      </div>
  )
}

export default RadioOptions
