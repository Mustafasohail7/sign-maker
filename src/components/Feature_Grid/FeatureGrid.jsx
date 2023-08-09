//data 
import FeatureGridData from "../../data/FeatureGridData";
import FeatureGridItem from "./FeatureGridItem";

import { useState, useEffect } from "react";

//stylesheet
import "../../styles/FeatureGrid.css";

const FeatureGrid = () => {

  const [shrink,setShrink] = useState(false)

  const handleShrink = () => {
    if(window.innerWidth<400){
      setShrink(true)
    }else{
      setShrink(false)
    }
  }

  useEffect(() => {
    handleShrink()
    window.addEventListener('resize',handleShrink)
    return () => {
      window.removeEventListener('resize',handleShrink)
    }
  })

  return (
    <div className="feature-grid">
        {FeatureGridData.map((item) => {
            if(shrink && item.id>3){
              return null
            }
            return <FeatureGridItem key={item.id} item={item} />
          })}
    </div>
  )
}

export default FeatureGrid
