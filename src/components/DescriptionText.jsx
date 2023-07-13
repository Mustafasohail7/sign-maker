//stylesheet
import '../styles/DescriptionText.css';

//data
import DescriptionTextData from '../data/DescriptionText'

const DescriptionText = () => {
  return (
    <div className="desc_text_container">
        {DescriptionTextData.map((item) => (
            <div className="desc_item" key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
            </div>
        ))}
    </div>
  )
}

export default DescriptionText
