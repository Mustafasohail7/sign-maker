// Stylesheet
import '../../styles/ImageComponent.css';

const ImageComponent = ({selectedImage,signImages}) => {

  return (
    <div className="image-container">
      <img src={selectedImage.src} alt="Your Background" className="image" />
      <div className='sign-container'>
      {signImages && signImages.map((signImage) => {
        if(signImage.title==='adapter'){
          return <img key={1000} src={signImage.src} alt={signImages.title} className='adapter'
          />
        }
        return <img key={signImage.id} src={signImage.src} alt={signImages.title} className='letter'
        />
      })}
      </div>
    </div>
  );
};

export default ImageComponent;
