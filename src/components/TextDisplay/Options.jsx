import { useState, useLayoutEffect } from 'react';

//stylesheet
import '../../styles/Options.css';

//components
import TypeOptions from './Options/TypeOptions';
import Letters from './Options/Letters'
import ColorOptions from './Options/ColorOptions';
import SizeOptions from './Options/SizeOptions';
import RadioOptions from './Options/RadioOptions';
import Cart from './Options/Cart';

const Options = ({size,setSize,color,setColor}) => {

  const [wrap,setWrap] = useState(false);
  
  //change section layout
  const handleSection = () => {
    if(window.innerWidth > 980) {
      setWrap(false);
    } else {
      setWrap(true);
    }
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
    <div className='content-container'>

      <TypeOptions size={size} setSize={setSize} />
      <Letters/>
      <ColorOptions/>
      <SizeOptions/>
      <RadioOptions/>
      <Cart/>

    </div>
  );
};

export default Options;
