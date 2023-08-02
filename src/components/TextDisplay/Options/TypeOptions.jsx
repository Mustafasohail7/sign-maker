import TypeOptionItem from './TypeOptionItem'

import '../../../styles/TypeOptions.css'

const TypeOptions = ({size,setSize}) => {

    const TypeData = [
        {id: 1, name: 'letters'},
        {id: 2, name: 'digits'},
        {id: 3, name: 'symbols'},
        {id: 4, name: 'accessory'},
      ]

    return (
        <div className="section">
            <h2 className="section-heading">Choose Type:</h2>
            <div className="options">
            {TypeData.map((sizeData) => (
                <TypeOptionItem key={sizeData.id} size={size} setSize={setSize} name={sizeData.name} />
            ))}
            </div>
        </div>
    )
}

export default TypeOptions
