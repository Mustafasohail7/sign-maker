import loader from '../assets/loading.gif'

import '../styles/Loading.css'

const Loading = () => {
  return (
    <div className='loading-container'>
        <div>
        <img src={loader} alt="Loading..." />
        </div>
    </div>
  )
}

export default Loading
