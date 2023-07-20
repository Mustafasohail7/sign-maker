import '../styles/ProcessModelList.css'

import processData from '../data/processData'

const ProcessModelList = ({shrink}) => {
  return (
    <div className={`process-list-container ${shrink ? "" : "hide"}`}>
      <div className='process-list'>
        {processData.map((process) => (
            <div className='process-list-item'>
                <div className='process-logo'>
                {process.image}
                </div>
                <div className='process-text'> 
                <h2>{process.title}</h2>
                <p>{process.text}</p>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default ProcessModelList
