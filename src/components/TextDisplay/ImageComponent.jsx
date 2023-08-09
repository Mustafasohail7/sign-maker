// Stylesheet
import '../../styles/ImageComponent.css';

const ImageComponent = ({selectedImage,signImages}) => {

  return (
    <div className="image-container">
      <img src={selectedImage.src} alt="Your Background" className="image" />
      <div className='sign-container'>
      {signImages && signImages.map((signImage) => {
        if(signImage.title==='adapter'){
          return <img key={1000} src={signImage.src} alt={signImage.title} className='adapter'
          />
        }else if(signImage.title==='space'){
          return <img key={signImage.id} src={signImage.src} alt={signImage.title} className='space'/>
        }else if(signImage.title==='heart'){
          return <img key={signImage.id} src={signImage.src} alt={signImage.title} className='heart'/>
        }
        return <img key={signImage.id} src={signImage.src} alt={signImage.title} 
          className={`letter ${signImage.title==='I' || signImage.title==='one' ? 'slim' : ''}`}
        />
      })}
      </div>
    </div>
  );
};

export default ImageComponent;
