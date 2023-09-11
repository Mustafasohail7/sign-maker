// Stylesheet
import '../../styles/ImageComponent.css';

const ImageComponent = ({selectedImage,signImages}) => {

  return (
    <div className="image-container" id='image-container'>
      <img src={selectedImage.src} alt="Your" className="image" />
      <div className='sign-container'>
      {signImages.map((signImage,index) => {
        if(signImage.title === 'adapter'){
          return <img key={index} src={signImage.src} alt={signImage.title} className='adapter'/>
        }else if(signImage.title === 'space'){
          return <img key={index} src={signImage.src} alt={signImage.title} className='space'/>
        }
        return <img key={index} src={signImage.src} alt={signImage.title} 
        className={`letter ${signImage.title==='I' || signImage.title==='one' ? 'slim' : ''}`}
        />
      }
      )}
      </div>
      <div className='sign-color-container'>
      {signImages.map((signImage,index) => (
        <div className='letter red'></div>
      ))}
      </div>
    </div>
  );
};

export default ImageComponent;
