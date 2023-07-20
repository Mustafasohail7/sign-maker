import { useState, useLayoutEffect } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';

//stylesheet
import '../styles/Options.css';

//components
import SectionContainer from './SectionContainer';

const Options = ({size,setSize,color,setColor}) => {

  const [stand, setStand] = useState(false);
  const [plug, setPlug] = useState(false);
  const [plug2,setPlug2] = useState(false);
  const [wrap,setWrap] = useState(false);

  const handleSizeButton = (buttonId) => {
    setSize(buttonId);
  }

  const handleColorButton = (buttonId) => {
    setColor(buttonId);
  }
  
  const handleSection = () => {
    if(window.innerWidth > 980) {
      setWrap(false);
    } else {
      setWrap(true);
    }
  }

  const handleStandToggle = () => {
    setStand(!stand);
  }

  const handlePlugToggle = () => {
    setPlug(!plug)
    if(plug2 && !plug) setPlug2(false)
  }
  
  const handlePlugTwoToggle = () => {
    setPlug2(!plug2)
    if(plug && !plug2) setPlug(false)
  }

  useLayoutEffect(() => {

    handleSection();

    window.addEventListener('resize',handleSection)

    return () => {
        window.removeEventListener('resize',handleSection)
    }
  },[])

  return (
    <>
    {wrap ? (
      <SectionContainer>

      <div className="section">
        <h2 className="section-heading">Choose Size</h2>
        <div className="options">
          <button
          className={`font-btn ${size === 'small' ? 'selected' : ''}`}
          onClick={() => handleSizeButton('small')}
          >
            small
          </button>
          <button
          className={`font-btn ${size === 'medium' ? 'selected' : ''}`}
          onClick={() => handleSizeButton('medium')}
          >
            medium
          </button>
          <button
          className={`font-btn ${size === 'large' ? 'selected' : ''}`}
          onClick={() => handleSizeButton('large')}
          >
            large
          </button>
          <button 
          className={`font-btn ${size === 'extra-large' ? 'selected' : ''}`}
          onClick={() => handleSizeButton('extra-large')}
          >
            Extra Large
          </button>
        </div>

      </div>

      <div className="section">
        <h2 className="section-heading">Choose Color</h2>
        <div className="options">
        <button 
          className={`font-btn white ${color === 'white' ? 'selected' : ''}`}
          onClick={() => handleColorButton('white')}
          >
            white
          </button>
          <button
          className={`font-btn black ${color === 'black' ? 'selected' : ''}`}
          onClick={() => handleColorButton('black')}
          >
            black
          </button>
        </div>
      </div>

      <div className="section add-to-cart">
      <div className='checkbox-holder'>
            <div className='checkbox-item'>
              <p>Include Stand</p>
              <label className={`checkbox-toggle ${stand ? 'checked' : ''}`}>
                <input type="checkbox" checked={stand} onChange={handleStandToggle} />
                <span className="slider">
                  <span className="slider-icon">
                    <AiOutlineCheck />
                  </span>
                </span>
              </label>
            </div>
            <div className='checkbox-item'>
              <p>Include Adapter</p>
              <label className={`checkbox-toggle ${plug ? 'checked' : ''}`}>
                <input type="checkbox" checked={plug} onChange={handlePlugToggle} />
                <span className="slider">
                  <span className="slider-icon">
                    <AiOutlineCheck />
                  </span>
                </span>
              </label>
            </div>
            <div className='checkbox-item'>
              <p>Include Adapter 2</p>
              <label className={`checkbox-toggle ${plug2 ? 'checked' : ''}`}>
                <input type="checkbox" checked={plug2} onChange={handlePlugTwoToggle} />
                <span className="slider">
                  <span className="slider-icon">
                    <AiOutlineCheck />
                  </span>
                </span>
              </label>
            </div>
          </div>
          <button className="cart-btn">ADD TO CART</button>
      </div>

    </SectionContainer>
    ) : (
      <div className='content-container'>

      <div className="section">
        <h2 className="section-heading">Choose Size</h2>
        <div className="options">
          <button
          className={`font-btn ${size === 'small' ? 'selected' : ''}`}
          onClick={() => handleSizeButton('small')}
          >
            small
          </button>
          <button
          className={`font-btn ${size === 'medium' ? 'selected' : ''}`}
          onClick={() => handleSizeButton('medium')}
          >
            medium
          </button>
          <button
          className={`font-btn ${size === 'large' ? 'selected' : ''}`}
          onClick={() => handleSizeButton('large')}
          >
            large
          </button>
          <button
          className={`font-btn ${size === 'extra-large' ? 'selected' : ''}`}
          onClick={() => handleSizeButton('extra-large')}
          >
            Extra Large
          </button>
        </div>

      </div>

      <div className="section">
        <h2 className="section-heading">Choose Color</h2>
        <div className="options">
          <button 
          className={`font-btn white ${color === 'white' ? 'selected' : ''}`}
          onClick={() => handleColorButton('white')}
          >
            white
          </button>
          <button
          className={`font-btn black ${color === 'black' ? 'selected' : ''}`}
          onClick={() => handleColorButton('black')}
          >
            black
          </button>
        </div>
      </div>

      <div className="section">
        <div className="options">
          {/* <label className="checkbox-container">
            <input
              type="checkbox"
              checked={stand}
              onChange={() => setStand(!stand)}
            />
            <span className="checkmark"></span>
            <span className="label-text">Include Stand</span>
          </label> */}
          <div className='checkbox-holder'>
            <div className='checkbox-item'>
              <p>Include Stand</p>
              <label className={`checkbox-toggle ${stand ? 'checked' : ''}`}>
                <input type="checkbox" checked={stand} onChange={handleStandToggle} />
                <span className="slider">
                  <span className="slider-icon">
                    <AiOutlineCheck />
                  </span>
                </span>
              </label>
            </div>
            <div className='checkbox-item'>
              <p>Include Adapter</p>
              <label className={`checkbox-toggle ${plug ? 'checked' : ''}`}>
                <input type="checkbox" checked={plug} onChange={handlePlugToggle} />
                <span className="slider">
                  <span className="slider-icon">
                    <AiOutlineCheck />
                  </span>
                </span>
              </label>
            </div>
            <div className='checkbox-item'>
              <p>Include Adapter 2</p>
              <label className={`checkbox-toggle ${plug2 ? 'checked' : ''}`}>
                <input type="checkbox" checked={plug2} onChange={handlePlugTwoToggle} />
                <span className="slider">
                  <span className="slider-icon">
                    <AiOutlineCheck />
                  </span>
                </span>
              </label>
            </div>
          </div>
          <button className="cart-btn">ADD TO CART</button>
        </div>
      </div>

      </div>
    )}
    </>
  );
};

export default Options;
