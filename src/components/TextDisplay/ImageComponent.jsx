// Stylesheet
import '../../styles/ImageComponent.css';

const ImageComponent = ({selectedImage,size,color}) => {

  return (
    <div className="image-container">
      <img src={selectedImage.src} alt="Your" className="image" />
    </div>
  );
};

export default ImageComponent;
