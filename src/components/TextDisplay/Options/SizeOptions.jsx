import SizeButton from "./SizeButton"

import '../../../styles/SizeOptions.css'

const SizeOptions = () => {

    const SizeData = [
        {id: 1, name: '50'},
        {id: 2, name: '75'},
        {id: 3, name: '100'},
        {id: 4, name: '125'},
        {id: 5, name: '150'},
        {id: 6, name: '175'},
        {id: 7, name: '200'},
      ]

  return (
    <div className="section" >
        <h2 className="section-heading">Choose Size:</h2>
        <div className="options size">
            {SizeData.map((sizeData) => (
              <SizeButton key={sizeData.id} name={sizeData.name} />
            ))}
        </div>
    </div>
  )
}

export default SizeOptions
