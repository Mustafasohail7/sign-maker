import { useState, useLayoutEffect } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';

//stylesheet
import '../../styles/Options.css';

//components
import SectionContainer from './SectionContainer';
import SizeButton from './SizeButton';
import ColorButton from './ColorButton';

const Options = ({size,setSize,color,setColor}) => {

  const SizeData = [
    {id: 1, name: 'small'},
    {id: 2, name: 'medium'},
    {id: 3, name: 'large'},
    {id: 4, name: 'extra-large'},
  ]

  const ColorData = [
    {id: 1, name: 'white'},
    {id: 2, name: 'black'},
  ]

  const [stand, setStand] = useState(false);
  const [plug, setPlug] = useState(false);
  const [plug2,setPlug2] = useState(false);
  const [wrap,setWrap] = useState(false);
  
  //change section layout
  const handleSection = () => {
    if(window.innerWidth > 980) {
      setWrap(false);
    } else {
      setWrap(true);
    }
  }

  //toggle stand
  const handleStandToggle = () => {
    setStand(!stand);
  }

  //toggle plug
  const handlePlugToggle = () => {
    setPlug(!plug)
    if(plug2 && !plug) setPlug2(false)
  }
  
  //toggle plug2
  const handlePlugTwoToggle = () => {
    setPlug2(!plug2)
    if(plug && !plug2) setPlug(false)
  }

  //resize event listener
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
          {SizeData.map((sizeData) => (
            <SizeButton key={sizeData.id} size={size} setSize={setSize} name={sizeData.name} />
          ))}
        </div>

      </div>

      <div className="section">
        <h2 className="section-heading">Choose Color</h2>
        <div className="options">
          {ColorData.map((colorData) => (
            <ColorButton key={colorData.id} color={color} setColor={setColor} name={colorData.name} />
          ))}
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
          {SizeData.map((sizeData) => (
            <SizeButton key={sizeData.id} size={size} setSize={setSize} name={sizeData.name} />
          ))}
        </div>

      </div>

      <div className="section">
        <h2 className="section-heading">Choose Color</h2>
        <div className="options">
          {ColorData.map((colorData) => (
            <ColorButton key={colorData.id} color={color} setColor={setColor} name={colorData.name} />
          ))}
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
