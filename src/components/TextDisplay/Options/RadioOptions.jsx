import RadioItem from './RadioItem'
import RadioItem2 from './RadioItem2'

import '../../../styles/RadioOptions.css'
import { useState } from 'react'

const RadioOptions = () => {

  const [connector,setConnector] = useState('5a-adapter')
  const [mounting,setMounting] = useState('wall')

  const connectorData = [
    {id: 1, name: '5A Adapter', value: '5a-adapter'},
    {id: 2, name: 'Type C', value: 'type-c'},
    {id: 3, name: 'M3', value: 'm3'},
  ]

  const mountingData = [
    {id: 1, name: "Wall", value: 'wall'},
    {id: 2, name: "Glass", value: 'glass'}
  ]

  return (
    <div className='column-divider'>
          <div className='radio-section'>
            <h2 className='section-heading'>Select Wall mounting kit</h2>
            <div className="radio-options">
              {mountingData.map((mountingItem) => (
                <RadioItem2 key={mountingItem.id} connectorItem={mountingItem} mounting={mounting} setMounting={setMounting} />
              ))}
            </div>
          </div>     
          <div className='radio-section'>
            <h2 className='section-heading'>Select connector:</h2>
            <div className='radio-options'>
                {connectorData.map((connectorItem) => (
                  <RadioItem key={connectorItem.id} connectorItem={connectorItem} connector={connector} setConnector={setConnector}/>
                ))}
            </div>
          </div>
      </div>
  )
}

export default RadioOptions
