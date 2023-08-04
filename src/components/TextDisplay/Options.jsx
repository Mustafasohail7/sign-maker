import { useState } from 'react';

//stylesheet
import '../../styles/Options.css';

//components
import TypeOptions from './Options/TypeOptions';
import Letters from './Options/Letters'
import ColorOptions from './Options/ColorOptions';
import SizeOptions from './Options/SizeOptions';
import RadioOptions from './Options/RadioOptions';
import Cart from './Options/Cart';
import ClearButtons from './Options/ClearButtons';

const Options = ({signImages,setSignImages}) => {

  const [type,setType] = useState('letters');

  return (
    <div className='content-container'>

      <ClearButtons signImages={signImages} setSignImages={setSignImages}/>
      <TypeOptions type={type} setType={setType} />
      <Letters type={type} setSignImages={setSignImages} />
      <ColorOptions/>
      <SizeOptions/>
      <RadioOptions/>
      <Cart/>

    </div>
  );
};

export default Options;
