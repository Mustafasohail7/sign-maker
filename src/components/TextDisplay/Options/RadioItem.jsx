const RadioItem = ({connectorItem,connector,setConnector}) => {

    const handleConnector = (e) => {
        setConnector(e.target.value)
    }

  return (
    <div className='radio-option'>
        <p>{connectorItem.name}</p>
        <input 
            type='radio' 
            id={connectorItem.value} 
            name={connectorItem.name} 
            value={connectorItem.value}
            checked={connector === connectorItem.value}
            onChange={handleConnector}
            />
    </div>
  )
}

export default RadioItem
