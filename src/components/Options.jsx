import { useState, useLayoutEffect } from 'react';

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
    console.log(buttonId)
    setColor(buttonId);
  }

  const handleStandButton = (buttonId) => {
    setStand(buttonId);
  }

  const handleSection = () => {
    if(window.innerWidth > 980) {
      setWrap(false);
    } else {
      setWrap(true);
    }
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
        </div>

      </div>

      <div className="section">
        <h2 className="section-heading">Choose Color</h2>
        <div className="options">
          <button 
          className={`color-btn red ${color === 'red' ? 'selected' : ''}`}
          onClick={() => {
            handleColorButton('red')
          }}
          >
            {/* red */}
          </button>
          <button
          className={`color-btn yellow ${color === 'yellow' ? 'selected' : ''}`}
          onClick={() => handleColorButton('yellow')}
          >
            {/* yellow */}
          </button>
        </div>
      </div>

      <div className="section">
        <h2 className="section-heading">Choose Your Stand</h2>
        <div className="options">
          {/* Add your stand checkbox here */}
          <button
          className={`font-btn ${stand === 'stand1' ? 'selected' : ''}`}
          onClick={() => handleStandButton('stand1')}
          >
            Stand 1
          </button>
          <button
          className={`font-btn ${stand === 'stand2' ? 'selected' : ''}`}
          onClick={() => handleStandButton('stand2')}
          >
            Stand 2
          </button>
        </div>
      </div>

      <div className="section add-to-cart">
        <h2 className="section-heading">Plug Adapter</h2>
        <div className="options">
          {/* Add your radio buttons for plug adapter options here */}
          <label className="checkbox-container">
            <input
              type="checkbox"
              checked={plug}
              onChange={() => setPlug(!plug)}
            />
            <span className="checkmark"></span>
            <span className="label-text">Include Plug Adapter</span>
          </label>
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
          {/* Add your stand checkbox here */}
          <label className="checkbox-container">
            <input
              type="checkbox"
              checked={stand}
              onChange={() => setStand(!stand)}
            />
            <span className="checkmark"></span>
            <span className="label-text">Include Stand</span>
          </label>
          <label className="checkbox-container">
            <input
              type="checkbox"
              checked={plug}
              onChange={() => {
                setPlug(!plug)
                if(plug2 && !plug) setPlug2(false)
              }}
            />
            <span className="checkmark"></span>
            <span className="label-text">Include Adapter</span>
          </label>
          <label className="checkbox-container">
            <input
              type="checkbox"
              checked={plug2}
              onChange={() => {
                setPlug2(!plug2)
                if(plug && !plug2) setPlug(false)
              }}
            />
            <span className="checkmark"></span>
            <span className="label-text">Include Adapter (w/ xyz)</span>
          </label>
          <button className="cart-btn">ADD TO CART</button>
        </div>
      </div>

      </div>
    )}
    </>
  );
};

export default Options;
