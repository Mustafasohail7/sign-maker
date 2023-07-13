import { AiOutlineDesktop, AiOutlineFontColors } from 'react-icons/ai'
import { BsPalette, BsBodyText, BsFillCartCheckFill } from 'react-icons/bs'

//stylesheet
import '../styles/ProcessModel.css';

const ProcessModel = () => {
  const processData = [
    {
      image: <AiOutlineDesktop size={30}/>,
      text: 'Enter the text you want on your sign',
    },
    {
      image: <BsPalette size={30}/>,
      text: 'Choose a font and color',
    },
    {
      image: <AiOutlineFontColors size={30}/>,
      text: 'Choose a size',
    },
    {
      image: <BsBodyText size={30}/>,
      text: 'Choose a backboard style',
    },
    {
      image: <BsFillCartCheckFill size={30}/>,
      text: 'Add to your cart and checkout',
    },
    // Add more process data as needed
  ];

  return (
    <div className="process-model">
      {processData.map((step, index) => (
        <div className="process-box" key={index}>
          <div className="process-image">
            {step.image }
          </div>
          <div className="process-text">
            <span>{step.text}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProcessModel;
