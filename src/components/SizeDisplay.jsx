import size_img1 from '../assets/sizes.png'
// import size_img2 from '../assets/size-chart.jpg'

import '../styles/SizeDisplay.css'

const SizeDisplay = () => {
  return (
    <div className="size-container">
      <div className='size-img-container'>
        <img src={size_img1} alt='all sizes in ascending order'/>
      </div>
      {/* <div className='size-img-container'>
        <img src={size_img2} alt='size chart next to a standing person'/>
      </div> */}
    </div>
  )
}

export default SizeDisplay
