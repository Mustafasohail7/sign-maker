
const RadioItem2 = ({connectorItem,mounting,setMounting}) => {
    const handleConnector = (e) => {
        setMounting(e.target.value)
    }

  return (
    <div className='radio-option'>
        <p>{connectorItem.name}</p>
        <input 
            type='radio' 
            id={connectorItem.value} 
            name={connectorItem.name} 
            value={connectorItem.value}
            checked={mounting === connectorItem.value}
            onChange={handleConnector}
            />
    </div>
  )
}

export default RadioItem2
