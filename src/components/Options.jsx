import { useState, useLayoutEffect } from 'react';

//stylesheet
import '../styles/Options.css';

//components
import SectionContainer from './SectionContainer';

const Options = () => {

  const [font, setFont] = useState('');
  const [size, setSize] = useState('');
  const [color,setColor] = useState('');
  const [stand, setStand] = useState('');
  const [plug, setPlug] = useState(false);
  const [wrap,setWrap] = useState(false);

  const handleFontButton = (buttonId) => {
    setFont(buttonId);
  }

  const handleSizeButton = (buttonId) => {
    setSize(buttonId);
  }

  const handleColorButton = (buttonId) => {
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
        <h2 className="section-heading">Choose Font</h2>
        <div className="options">
          <button 
            className={`font-btn ${font === 'arial' ? 'selected' : ''}`}
            onClick={() => handleFontButton('arial')}
            >Arial</button>
          <button 
            className={`font-btn ${font === 'times-new-roman' ? 'selected' : ''}`}
            onClick={() => handleFontButton('times-new-roman')}
            >Times New Roman</button>
        </div>
      </div>

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
          className={`color-btn red ${color === 'color-btn red' ? 'selected' : ''}`}
          onClick={() => handleColorButton('color-btn red')}
          >
            {/* red */}
          </button>
          <button
          className={`color-btn yellow ${color === 'color-btn yellow' ? 'selected' : ''}`}
          onClick={() => handleColorButton('color-btn yellow')}
          >
            {/* yellow */}
          </button>
          <button
          className={`color-btn blue ${color === 'color-btn blue' ? 'selected' : ''}`}
          onClick={() => handleColorButton('color-btn blue')}
          >
            {/* blue */}
          </button>
          <button
          className={`color-btn green ${color === 'color-btn green' ? 'selected' : ''}`}
          onClick={() => handleColorButton('color-btn green')}
          >
            {/* green */}
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
        <h2 className="section-heading">Choose Font</h2>
        <div className="options">
          <button 
            className={`font-btn ${font === 'arial' ? 'selected' : ''}`}
            onClick={() => handleFontButton('arial')}
            >Arial</button>
          <button 
            className={`font-btn ${font === 'times-new-roman' ? 'selected' : ''}`}
            onClick={() => handleFontButton('times-new-roman')}
            >Times New Roman</button>
        </div>
      </div>

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
          className={`color-btn red ${color === 'color-btn red' ? 'selected' : ''}`}
          onClick={() => handleColorButton('color-btn red')}
          >
            {/* red */}
          </button>
          <button
          className={`color-btn yellow ${color === 'color-btn yellow' ? 'selected' : ''}`}
          onClick={() => handleColorButton('color-btn yellow')}
          >
            {/* yellow */}
          </button>
          <button
          className={`color-btn blue ${color === 'color-btn blue' ? 'selected' : ''}`}
          onClick={() => handleColorButton('color-btn blue')}
          >
            {/* blue */}
          </button>
          <button
          className={`color-btn green ${color === 'color-btn green' ? 'selected' : ''}`}
          onClick={() => handleColorButton('color-btn green')}
          >
            {/* green */}
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

      <div className="section">
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

      <div className="section"> 
      </div>
      </div>
    )}
    </>
  );
};

export default Options;
