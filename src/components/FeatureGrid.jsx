//data 
import FeatureGridData from "../data/FeatureGridData";

//stylesheet
import "../styles/FeatureGrid.css";

const FeatureGrid = () => {
  return (
    <div className="feature-grid">
        {FeatureGridData.map((item) => (
            <div className="feature-grid-item" key={item.id}>
                {item.logo}
                <h3>{item.title}</h3>
                <p>{item.description}</p>
            </div>
        ))}
    </div>
  )
}

export default FeatureGrid
