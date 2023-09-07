// Stylesheet
import '../../styles/ImageComponent.css';

const ImageComponent = ({selectedImage,signImages}) => {

  return (
    <div className="image-container" id='image-container'>
      <img src={selectedImage.src} alt="Your" className="image" />
      <div className='sign-container'>
      {signImages.map((signImage) => {
        if(signImage.title === 'adapter'){
          return <img key={1000} src={signImage.src} alt={signImage.title} className='adapter'/>
        }
        return <img key={signImage.id} src={signImage.src} alt={signImage.title} className='letter'/>
      }
      )}

      </div>
    </div>
  );
};

export default ImageComponent;
