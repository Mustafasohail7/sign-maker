import { useState,useLayoutEffect } from 'react';

//data
import portfolioData from '../data/portfolioData';

//stylesheet
import '../styles/PortfolioGrid.css'

function PortfolioGrid() {

    const [shrink,setShrink] = useState(false);

    const handleAdjust = () => {
        if(window.innerWidth > 768) {
            setShrink(false);
        }else{
            setShrink(true);
        }
    }

    useLayoutEffect(() => {

        handleAdjust();

        window.addEventListener('resize',handleAdjust)

        return () => {
            window.removeEventListener('resize',handleAdjust)
        }
    },[])

  return (
    <div className="portfolio-grid">
      {portfolioData.map((item) => {
        if(shrink && item.id>12) {
            return null
        }
        return (
            <div className="portfolio-item" key={item.id}>
                <img src={item.image} alt={item.alt} />
            </div>
        )
        })}
    </div>
  );
}

export default PortfolioGrid;
