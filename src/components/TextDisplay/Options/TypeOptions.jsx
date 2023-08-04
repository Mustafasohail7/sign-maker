import TypeOptionItem from './TypeOptionItem'

import '../../../styles/TypeOptions.css'

const TypeOptions = ({type,setType}) => {

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
                <TypeOptionItem key={sizeData.id} type={type} setType={setType} name={sizeData.name} />
            ))}
            </div>
        </div>
    )
}

export default TypeOptions
