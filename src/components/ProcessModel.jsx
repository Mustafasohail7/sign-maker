import { useState,useEffect, useRef } from 'react';

//stylesheet
import '../styles/ProcessModel.css';

import processData from '../data/processData'

const ProcessModel = ({shrink,setShrink}) => {

  const [selectedProcess, setSelectedProcess] = useState(3);
  // const [processState, setProcessState] = useState(processData);
  const processState = processData

  const containerRef = useRef(null);

  useEffect(() => {
      const container = containerRef.current;
      const numLogos = processState.length;
      const radius = container.clientHeight * 0.4; // Adjust the radius as needed

      processState.forEach((logo, index) => {
        const angle = (index / numLogos) * 360;
        const posX = radius * Math.cos((angle * Math.PI) / 180);
        const posY = radius * Math.sin((angle * Math.PI) / 180);

        const logoElement = container.children[index + 1]; // Index 0 is the text
        logoElement.style.transform = `translate(${posX}px, ${posY}px)`;
      });
  }, [processState]);

  useEffect(() => {
    const interval = setInterval(() => {
        // Increment the selected component and loop back to 1 if it exceeds 5
        const nextSelected = selectedProcess === 5 ? 1 : selectedProcess + 1;
        setSelectedProcess(nextSelected);
    }, 2000); // Change state every 5 seconds (adjust as needed)

    return () => {
      clearInterval(interval); // Clean up the interval on unmount
    };
  })

  useEffect(() => {
    window.addEventListener('resize',handleResize)

    return () => {
        window.removeEventListener('resize',handleResize)
    }
  })

  const handleResize = () => {
    if(window.innerWidth > 768) {
        setShrink(false)
    }else{
        setShrink(true)
    }
  }


  return (
    <div className={`process-model ${shrink ? "shrink" : ""}`}>
      <div className="process-steps" ref={containerRef}>
        <div className='process-text-item'>
              <>
              {processState[selectedProcess - 1].image}
              </>
              <h2>{processState[selectedProcess - 1].title}</h2>
              <p>{processState[selectedProcess - 1].text}</p>
        </div>
        {processState.map((step) => (
          <div
            key={step.id}
            className={`process-step ${selectedProcess === step.id ? "selected" : ""}`}
            onClick={() => setSelectedProcess(step.id)}
          >
            {step.image}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessModel;
